import React from 'react';
import {Box, Heading, SimpleGrid, SlideFade, Text} from "@chakra-ui/react";
import GithubCard from "@components/GithubCard/GithubCard";

const GithubSection = ({repos}:any) => {
	return (
		<SlideFade in offsetY={80} delay={0.2}>
			<Heading
				as="h1"
				fontSize={{ base: "24px", md: "30px", lg: "36px" }}
				mb={3}
			>
				Github
			</Heading>
			<div>
				<Text>List of my top featured github repositories. 🔖</Text>
				<Text>Feel free to pay a visit and don't forget to leave me a star! ⭐ </Text>
			</div>

			<Box my={5}>
				<SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
					{repos.map((repo:any)=>(
						<GithubCard
							name={repo.name}
							description={repo.description}
							language={repo.language}
							url={repo.clone_url}
							stargazers_count={repo.stargazers_count}
							forks_count={repo.forks_count}
							key={repo.name}
						/>
					))}
				</SimpleGrid>
			</Box>
		</SlideFade>
	);
};

export default GithubSection;
