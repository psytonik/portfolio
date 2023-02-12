import React from 'react';
import styles from '../styles/Home.module.css';
import Head from "next/head";
import {Button, Container, Flex, Heading, SlideFade, Spacer} from "@chakra-ui/react";
import {useRouter} from "next/router";

const NotFound = () => {

	const router = useRouter()

	const handleClick = async () => {
		await router.push("/")
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Anthony Fink | 404 Page Not Found</title>
				<meta name="description" content="Anthony Fink | Full Stack Web Developer" />
				<link rel="preload prefetch" href="/profile.png" as="image"  crossOrigin="anonymous"/>
			</Head>
			<main>
				<Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
					<SlideFade in offsetX={80}>
						<Flex width="full" height="70vh" align="center" justifyContent="center">

								<Heading size={'lg'}>Page Not Found ! 404 🙉 </Heading>
							<Spacer/>
								<Button onClick={handleClick}>Return Home</Button>

						</Flex>
					</SlideFade>
				</Container>
			</main>
		</div>
	);
};

export default NotFound;
