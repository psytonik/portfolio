import React from 'react';
import {Box, Button, SimpleGrid, Text} from "@chakra-ui/react";
import {FiGithub} from "react-icons/fi";
import GithubCard from "@components/GithubCard/GithubCard";
import SectionHeading from "@components/SectionHeading/SectionHeading";
import Card from "@components/Card/Card";
import {GithubRepo} from "../../constants/getGithubRepos";

const PROFILE_URL = "https://github.com/psytonik";

const GithubSection: React.FC<{ repos: GithubRepo[] }> = ({repos}) => {
	return (
		<Box as="section">
			<SectionHeading
				as="h1"
				title="GitHub"
				description="My public repositories."
				action={
					<Button as="a" href={PROFILE_URL} target="_blank" rel="noopener noreferrer" variant="outline" size="sm" leftIcon={<FiGithub/>}>
						View profile
					</Button>
				}
			/>

			{repos.length > 0 ? (
				<SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
					{repos.map((repo) => (
						<GithubCard key={repo.name} repo={repo}/>
					))}
				</SimpleGrid>
			) : (
				<Card p={8} textAlign="center">
					<Text fontWeight={600}>Repositories could not be loaded</Text>
					<Text color="muted" mt={1}>You can browse them directly on my GitHub profile.</Text>
				</Card>
			)}
		</Box>
	);
};

export default GithubSection;
