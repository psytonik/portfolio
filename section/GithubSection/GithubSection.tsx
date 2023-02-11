import React from 'react';
import {Box, Flex, Heading, SimpleGrid, SlideFade, Stack, Text} from "@chakra-ui/react";
import GithubCard from "@components/GithubCard/GithubCard";
import UnderlineText from "@components/UnderlineText/UnderlineText";
import {AiFillGithub} from "react-icons/ai";

const GithubSection = ({repos}:any) => {
	return (
		<SlideFade in offsetY={80} delay={0.2}>
			<UnderlineText>
				<Flex alignItems={'center'}>
					<Stack pr={3}>
						<AiFillGithub size={'30px'} style={{marginBottom:'12px'}} />
					</Stack>
					<Heading
						as="h1"
						fontSize={{ base: "24px", md: "30px", lg: "36px" }}
						mb={3}
					>
						Github
					</Heading>
				</Flex>

			</UnderlineText>

			<div style={{marginTop:'20px', marginBottom:'20px'}}>
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
