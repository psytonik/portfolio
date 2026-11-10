import React from 'react';
import {GetStaticProps, NextPage} from "next";
import Seo from "@components/Seo/Seo";
import Page from "@components/Page/Page";
import getGithubRepos, {GithubRepo} from "../constants/getGithubRepos";
import GithubSection from "../section/GithubSection/GithubSection";

interface GithubPageProps {
	repos: GithubRepo[];
}

const Github: NextPage<GithubPageProps> = ({repos}) => {
	return (
		<>
			<Seo
				title="GitHub"
				description="Open source repositories by Anthony Fink."
				path="/github"
			/>
			<Page>
				<GithubSection repos={repos}/>
			</Page>
		</>
	);
};

export const getStaticProps: GetStaticProps<GithubPageProps> = async () => {
	const repos = await getGithubRepos();
	return {
		props: {repos},
		// Refresh hourly; retry sooner when the GitHub API call failed
		revalidate: repos.length > 0 ? 3600 : 60,
	};
};

export default Github;
