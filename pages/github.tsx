import React from 'react';
import {NextPage} from "next";
import styles from '../styles/Home.module.css';
import Head from "next/head";
import {Container} from "@chakra-ui/react";
import getGithubRepos from "../constants/getGithubRepos";
import GithubSection from "../section/GithubSection/GithubSection";

const Github:NextPage = ({repos}:any) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Anthony Fink | Github</title>
				<link rel="preload prefetch" href="/profile.png" as="image" type='image/png'/>

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
					<GithubSection repos={repos}/>
				</Container>
			</main>
		</div>
	);
};
export const getStaticProps = async () => {
	const repos = await getGithubRepos();
	return {
		props: {
			repos,
		},
	};
}

export default Github;
