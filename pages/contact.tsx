import React, {useState} from 'react';
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
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

import emailJs, {init} from '@emailjs/browser';

import {gaEvents} from "../utils/gaEvents";
import {NextPage} from "next";

const Contact: NextPage = () => {

	init('user_HkihIZQIylIbB3W952VlF');

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [error,setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const toast = useToast();
	const clearInput = () => {
		setName('');
		setEmail('');
		setMessage('');
		setIsLoading(false);
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setIsLoading(true);

		emailJs.send('service_oewo82m',
			'template_koi7q1g',
			{
			from_name: name,
			from_email: email,
			message: message,}
		).then(() => {
			toast({
				title: 'Email sent.',
				description: 'You had successfully sent the email. I will reply your email ASAP. Thank you!',
				status: 'success',
				duration: 9000,
				isClosable: true
			})
			clearInput();
			gaEvents.eventMailSent()
		}, (error) => {
			toast({
				title: 'Email not sent.',
				description: error.text,
				status: 'error',
				duration: 9000,
				isClosable: true
			})
			setError(error.text);
			clearInput();
		});
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Anthony Fink | Contact</title>
				<meta name="description" content="Anthony Fink | Full Stack Web Developer"/>
				<link rel="preload prefetch" href="/profile.png" as="image" type='image/png'/>

				<title>Anthony Fink | Full Stack Web Developer</title>
				<meta name="description"
					  content="Full Stack Web Developer from Israel 🇮🇱🇷🇺 Focused on React Js, Node Js, Type Script. Passion in beautiful UI / UX 🔥"/>

				<meta property="og:url" content="https://anthonyfink.dev/"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="Anthony Fink | Full Stack Web Developer"/>
				<meta property="og:description" content="Anthony Fink | Full Stack Web Developer"/>
				<meta property="og:image"
					  content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/anthonyfink.dev/Anthony%20Fink%20%7C%20Full%20Stack%20Web%20Developer/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F5d1c467f-d464-4950-832a-535389bd85b2.png%3Ftoken%3DeMS2h3LuCP-yWNFNavE37SRx0uCWuxLsHqOCQAhwWpk%26height%3D910%26width%3D885%26expires%3D33242278201/og.png"/>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta property="twitter:domain" content="anthonyfink.dev"/>
				<meta property="twitter:url" content="https://anthonyfink.dev/"/>
				<meta name="twitter:title" content="Anthony Fink | Full Stack Web Developer"/>
				<meta name="twitter:description"
					  content="Full Stack Web Developer from Israel 🇮🇱🇷🇺 Focused on React Js, Node Js, Type Script. Passion in beautiful UI / UX 🔥"/>
				<meta name="twitter:image"
					  content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/anthonyfink.dev/Anthony%20Fink%20%7C%20Full%20Stack%20Web%20Developer/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F5d1c467f-d464-4950-832a-535389bd85b2.png%3Ftoken%3DeMS2h3LuCP-yWNFNavE37SRx0uCWuxLsHqOCQAhwWpk%26height%3D910%26width%3D885%26expires%3D33242278201/og.png"/>

				<meta name='application-name' content='Anthony Fink | Full Stack Web Developer'/>
				<meta name='apple-mobile-web-app-capable' content='yes'/>
				<meta name='apple-mobile-web-app-status-bar-style' content='default'/>
				<meta name='apple-mobile-web-app-title' content='Anthony Fink | Full Stack Web Developer'/>

				<meta name='format-detection' content='telephone=no'/>
				<meta name='mobile-web-app-capable' content='yes'/>
				<meta name='msapplication-config' content='/icons/browserconfig.xml'/>
				<meta name='msapplication-TileColor' content='#2B5797'/>
				<meta name='msapplication-tap-highlight' content='no'/>
				<meta name='theme-color' content='#000000'/>

			</Head>
			<main>
				<Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
					<SlideFade in offsetX={80}>
						<Flex width="full" align="center" justifyContent="center">
							<Box
								p={8}
								maxWidth="container.lg"
								borderWidth={1}
								borderRadius={8}
								boxShadow="lg"
							>
								<Heading size={'lg'}>Let's get in touch. Leave me your message. 💬</Heading>
								<Text fontSize={'lg'} my={2}>Do not hesitate to contact me!</Text>
								<Box my={4} textAlign="left">
									<form onSubmit={handleSubmit}>
										{error && <ErrorMessage message={error}/>}
										<FormControl isRequired>
											<FormLabel key={'name'}>Name</FormLabel>
											<Input
												id='name'
												type={'text'}
												value={name}
												placeholder="Your Name"
												size="lg"
												onChange={event => setName(event.currentTarget.value)}
												bg={useColorModeValue('gray.100', 'gray.900')}
											/>
										</FormControl>
										<FormControl isRequired mt={6}>
											<FormLabel key={'email'}>Email</FormLabel>
											<Input
												id='email'
												type={'email'}
												value={email}
												placeholder='Email'
												size="lg"
												onChange={event => setEmail(event.currentTarget.value)}
												bg={useColorModeValue('gray.100', 'gray.900')}
											/>
										</FormControl>
										<FormControl isRequired mt={6}>
											<FormLabel key={'message'}>Message</FormLabel>
											<Textarea
												id='message'
												value={message}
												placeholder="Type your message..."
												size="lg"
												onChange={event => setMessage(event.currentTarget.value)}
												bg={useColorModeValue('gray.100', 'gray.900')}
											/>
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
