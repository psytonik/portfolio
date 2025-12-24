import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Head from "next/head";
import {
	Box,
	Button,
	Container,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	SlideFade,
	Text,
	Textarea,
	useColorModeValue,
	useToast,
} from "@chakra-ui/react";
import { NextPage } from "next";
import emailJs, { init } from '@emailjs/browser';
import { gaEvents } from "../utils/gaEvents";

const Contact: NextPage = () => {
	init('user_HkihIZQIylIbB3W952VlF');

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
	const [isLoading, setIsLoading] = useState(false);

	const toast = useToast();
	const clearInput = () => {
		setName('');
		setEmail('');
		setMessage('');
		setErrors({});
		setIsLoading(false);
	};

	// ✅ Email format validation
	const validateEmailFormat = (email: string) => {
		const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return regex.test(email);
	};

	const validateForm = () => {
		const newErrors: typeof errors = {};
		if (!name.trim()) newErrors.name = 'Name is required';
		if (!email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!validateEmailFormat(email)) {
			newErrors.email = 'Invalid email format';
		}
		if (!message.trim()) newErrors.message = 'Message is required';
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!validateForm()) return; // Stop if validation fails

		setIsLoading(true);

		try {
			// ✅ Check domain validity via API
			const response = await fetch('/api/validate-domain', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			});

			const data = await response.json();
			if (!data.isValid){
				setErrors({...errors, email:data.error});
				setIsLoading(false);
				toast({
					title: data.error,
					description: 'Please enter a valid email address.',
					status: 'error',
					duration: 9000,
					isClosable: true,
				});

				return;
			}

			// ✅ Send email via EmailJS
			await emailJs.send('service_oewo82m', 'template_koi7q1g', {
				from_name: name,
				from_email: email,
				message: message,
			});

			toast({
				title: 'Email sent.',
				description: 'You successfully sent the email. I will reply ASAP. Thank you!',
				status: 'success',
				duration: 9000,
				isClosable: true,
			});

			clearInput();
			gaEvents.eventMailSent();
		} catch (error: any) {
			toast({
				title: 'Email not sent.',
				description: error.message || 'Something went wrong.',
				status: 'error',
				duration: 9000,
				isClosable: true,
			});
			clearInput();
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Anthony Fink | Contact</title>
				<meta name="description" content="Anthony Fink | Full Stack Web Developer" />
			</Head>
			<main>
				<Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
					<SlideFade in offsetX={80}>
						<Flex width="full" align="center" justifyContent="center">
							<Box p={8} maxWidth="container.lg" borderWidth={1} borderRadius={8} boxShadow="lg">
								<Heading size={'lg'}>Let's get in touch. Leave me your message. 💬</Heading>
								<Text fontSize={'lg'} my={2}>Do not hesitate to contact me!</Text>
								<Box my={4} textAlign="left">
									<form onSubmit={handleSubmit}>
										<FormControl isRequired mb={4}>
											<FormLabel>Name</FormLabel>
											<Input
												id='name'
												type='text'
												value={name}
												placeholder="Your Name"
												size="lg"
												onChange={(e) => setName(e.target.value)}
												bg={useColorModeValue('gray.100', 'gray.900')}
											/>
											{errors.name && <Text color="red.500" fontSize="sm">{errors.name}</Text>}
										</FormControl>

										<FormControl isRequired mb={4}>
											<FormLabel>Email</FormLabel>
											<Input
												id='email'
												type='email'
												value={email}
												placeholder='Email'
												size="lg"
												onChange={(e) => setEmail(e.target.value)}
												bg={useColorModeValue('gray.100', 'gray.900')}
											/>
											{errors.email && <Text color="red.500" fontSize="sm">{errors.email}</Text>}
										</FormControl>

										<FormControl isRequired mb={4}>
											<FormLabel>Message</FormLabel>
											<Textarea
												id='message'
												value={message}
												placeholder="Type your message..."
												size="lg"
												onChange={(e) => setMessage(e.target.value)}
												bg={useColorModeValue('gray.100', 'gray.900')}
											/>
											{errors.message && <Text color="red.500" fontSize="sm">{errors.message}</Text>}
										</FormControl>

										<Button
											variant="solid"
											type="submit"
											width="full"
											mt={4}
											isLoading={isLoading}
											loadingText='Submitting'
											colorScheme={'blue'}
										>
											Send Message
										</Button>
									</form>
								</Box>
							</Box>
						</Flex>
					</SlideFade>
				</Container>
			</main>
		</div>
	);
};

export default Contact;
