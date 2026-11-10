import React from 'react';
import {Box, Flex, Heading, Link, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import {FiArrowUpRight} from "react-icons/fi";
import SectionHeading from "@components/SectionHeading/SectionHeading";
import Card from "@components/Card/Card";
import {aiCapabilities} from "../../constants/aiWork";

const AiSection = () => {
	return (
		<Box as="section">
			<SectionHeading
				title="AI & agents"
				description="AI is part of how I build and part of what I ship, not a line on a list."
			/>

			<SimpleGrid columns={{base: 1, md: 3}} spacing={6}>
				{aiCapabilities.map((capability) => (
					<Card key={capability.title} as="article" p={{base: 5, md: 6}} h="full">
						<Stack spacing={3} h="full">
							<Flex
								boxSize={10}
								align="center"
								justify="center"
								rounded="lg"
								bg="subtle"
								color="accent"
								fontSize="xl"
								flexShrink={0}
							>
								<capability.icon aria-hidden/>
							</Flex>
							<Heading as="h3" fontSize="lg">
								{capability.title}
							</Heading>
							<Text color="muted" lineHeight={1.6} flex="1">
								{capability.description}
							</Text>
							{capability.link && (
								<Link
									href={capability.link.url}
									isExternal
									color="accent"
									fontWeight={500}
									fontSize="sm"
									display="inline-flex"
									alignItems="center"
									gap={1}
									alignSelf="flex-start"
									minH="44px"
								>
									{capability.link.label}
									<FiArrowUpRight aria-hidden/>
								</Link>
							)}
						</Stack>
					</Card>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default AiSection;
