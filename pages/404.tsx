import React from 'react';
import NextLink from 'next/link';
import {NextPage} from "next";
import {Button, Flex, Heading, Text} from "@chakra-ui/react";
import Seo from "@components/Seo/Seo";
import Page from "@components/Page/Page";

const NotFound: NextPage = () => {
	return (
		<>
			<Seo title="Page not found"/>
			<Page>
				<Flex direction="column" align="center" justify="center" textAlign="center" minH="50vh" gap={4}>
					<Text color="accent" fontWeight={600} letterSpacing="0.08em">404</Text>
					<Heading as="h1" fontSize={{base: '3xl', md: '4xl'}}>Page not found</Heading>
					<Text color="muted" maxW="md">
						The page you are looking for does not exist or has been moved.
					</Text>
					<Button as={NextLink} href="/" colorScheme="brand" mt={2}>
						Back to home
					</Button>
				</Flex>
			</Page>
		</>
	);
};

export default NotFound;
