import React, {useRef, useState} from 'react';
import {NextPage} from "next";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Link,
	SimpleGrid,
	Stack,
	Text,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import emailJs from '@emailjs/browser';
import Seo from "@components/Seo/Seo";
import {buildContactJsonLd} from "../constants/structuredData";
import Page from "@components/Page/Page";
import Card from "@components/Card/Card";
import SectionHeading from "@components/SectionHeading/SectionHeading";
import {siteConfig} from "../constants";
import {gaEvents} from "../utils/gaEvents";

const EMAILJS_PUBLIC_KEY = 'user_HkihIZQIylIbB3W952VlF';
const EMAILJS_SERVICE = 'service_oewo82m';
const EMAILJS_TEMPLATE = 'template_koi7q1g';

type FieldErrors = { name?: string; email?: string; message?: string };

const isEmailFormatValid = (email: string) =>
	/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const Contact: NextPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState<FieldErrors>({});
	const [isLoading, setIsLoading] = useState(false);

	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);

	const toast = useToast();

	const validateForm = (): FieldErrors => {
		const newErrors: FieldErrors = {};
		if (!name.trim()) newErrors.name = 'Please enter your name.';
		if (!email.trim()) {
			newErrors.email = 'Please enter your email address.';
		} else if (!isEmailFormatValid(email)) {
			newErrors.email = 'This email address does not look right. Check it for typos.';
		}
		if (!message.trim()) newErrors.message = 'Please write a message.';
		return newErrors;
	};

	const focusFirstInvalid = (fieldErrors: FieldErrors) => {
		if (fieldErrors.name) nameRef.current?.focus();
		else if (fieldErrors.email) emailRef.current?.focus();
		else if (fieldErrors.message) messageRef.current?.focus();
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const fieldErrors = validateForm();
		setErrors(fieldErrors);
		if (Object.keys(fieldErrors).length > 0) {
			focusFirstInvalid(fieldErrors);
			return;
		}

		setIsLoading(true);

		try {
			const response = await fetch('/api/validate-domain', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({email}),
			});
			const data = await response.json();

			if (!data.validDomain) {
				const domainError = {email: 'This email domain cannot receive mail. Check the address and try again.'};
				setErrors(domainError);
				focusFirstInvalid(domainError);
				return;
			}

			await emailJs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
				from_name: name,
				from_email: email,
				message: message,
			}, EMAILJS_PUBLIC_KEY);

			toast({
				title: 'Message sent',
				description: 'Thank you! I will reply as soon as I can.',
				status: 'success',
				duration: 5000,
				isClosable: true,
			});

			setName('');
			setEmail('');
			setMessage('');
			setErrors({});
			gaEvents.eventMailSent();
		} catch {
			// Keep what the user typed so they can retry
			toast({
				title: 'Message not sent',
				description: `Something went wrong. Please try again or email me at ${siteConfig.email}.`,
				status: 'error',
				duration: 9000,
				isClosable: true,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<Seo
				title="Contact"
				description="Get in touch with Anthony Fink about a project, a role or a collaboration."
				path="/contact"
				jsonLd={buildContactJsonLd()}
			/>
			<Page>
				<SimpleGrid columns={{base: 1, md: 2}} spacing={{base: 8, md: 12}}>
					<Box>
						<SectionHeading
							as="h1"
							title="Let's get in touch"
							description="Have a project, a role or an idea to discuss? Send me a message and I will get back to you."
						/>
						<Stack spacing={1} mx={-3}>
							{siteConfig.author.accounts.map((account) => (
								<Link
									key={account.name}
									href={account.url}
									isExternal
									display="flex"
									alignItems="center"
									gap={3}
									px={3}
									py={3}
									rounded="md"
									transition="background-color .2s ease"
									_hover={{bg: 'subtle', textDecoration: 'none'}}
								>
									<Flex boxSize={10} align="center" justify="center" rounded="md" bg="subtle" fontSize="lg" flexShrink={0}>
										<account.icon aria-hidden/>
									</Flex>
									<Box minW={0}>
										<Text fontWeight={600} fontSize="sm">{account.name}</Text>
										<Text color="muted" fontSize="sm" noOfLines={1}>{account.handle}</Text>
									</Box>
								</Link>
							))}
						</Stack>
					</Box>

					<Card p={{base: 5, md: 8}}>
						<form onSubmit={handleSubmit} noValidate>
							<Stack spacing={5}>
								<FormControl isRequired isInvalid={Boolean(errors.name)}>
									<FormLabel>Name</FormLabel>
									<Input
										ref={nameRef}
										name="name"
										type="text"
										autoComplete="name"
										size="lg"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
									<FormErrorMessage>{errors.name}</FormErrorMessage>
								</FormControl>

								<FormControl isRequired isInvalid={Boolean(errors.email)}>
									<FormLabel>Email</FormLabel>
									<Input
										ref={emailRef}
										name="email"
										type="email"
										autoComplete="email"
										size="lg"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									<FormErrorMessage>{errors.email}</FormErrorMessage>
								</FormControl>

								<FormControl isRequired isInvalid={Boolean(errors.message)}>
									<FormLabel>Message</FormLabel>
									<Textarea
										ref={messageRef}
										name="message"
										size="lg"
										rows={6}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
									/>
									<FormErrorMessage>{errors.message}</FormErrorMessage>
								</FormControl>

								<Button
									type="submit"
									colorScheme="brand"
									size="lg"
									width="full"
									isLoading={isLoading}
									loadingText="Sending"
								>
									Send message
								</Button>
							</Stack>
						</form>
					</Card>
				</SimpleGrid>
			</Page>
		</>
	);
};

export default Contact;
