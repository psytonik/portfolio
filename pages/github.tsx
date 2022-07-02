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
				<meta name="description" content="Anthony Fink | Full Stack Web Developer" />
				<link rel="icon" href="/profile.png" />
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
	const repos = await getGithubRepos({ username: 'psytonik' });

	return {
		props: {
			repos,
		},
	};
}

export default Github;
