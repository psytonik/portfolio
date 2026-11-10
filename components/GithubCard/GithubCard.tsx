import React from 'react';
import {Flex, HStack, Heading, LinkOverlay, Tag, Text} from "@chakra-ui/react";
import {FiGithub} from "react-icons/fi";
import {BiGitRepoForked, BiStar} from 'react-icons/bi';
import Card from "@components/Card/Card";
import {GithubRepo} from "../../constants/getGithubRepos";

const GithubCard: React.FC<{ repo: GithubRepo }> = ({repo}) => {
	return (
		<Card as="article" interactive p={5} h="full">
			<Flex direction="column" gap={2} h="full">
				<Heading as="h2" fontSize="md" display="flex" alignItems="center" gap={2}>
					<FiGithub aria-hidden/>
					<LinkOverlay href={repo.html_url} isExternal noOfLines={1}>
						{repo.name}
					</LinkOverlay>
				</Heading>
				<Text fontSize="sm" color="muted" noOfLines={2} flex="1">
					{repo.description || 'No description yet.'}
				</Text>
				<HStack spacing={4} fontSize="sm" color="muted">
					{repo.language && <Tag size="sm">{repo.language}</Tag>}
					{repo.stargazers_count > 0 && (
						<HStack spacing={1}>
							<BiStar aria-hidden/>
							<Text as="span" aria-label={`${repo.stargazers_count} stars`}>{repo.stargazers_count}</Text>
						</HStack>
					)}
					{repo.forks_count > 0 && (
						<HStack spacing={1}>
							<BiGitRepoForked aria-hidden/>
							<Text as="span" aria-label={`${repo.forks_count} forks`}>{repo.forks_count}</Text>
						</HStack>
					)}
				</HStack>
			</Flex>
		</Card>
	);
};

export default GithubCard;
