import React from 'react';
import {Box, Flex, Heading, Image, Link, LinkOverlay, ListItem, Tag, Text, UnorderedList, Wrap, WrapItem} from "@chakra-ui/react";
import {FiArrowUpRight} from "react-icons/fi";
import Card from "@components/Card/Card";
import {Experience} from "../../constants";

const CompanyCard: React.FC<{ item: Experience }> = ({item}) => {
	return (
		<Card as="article" interactive={Boolean(item.url)} p={5}>
			<Flex gap={4}>
				<Image
					flexShrink={0}
					boxSize={14}
					rounded="lg"
					objectFit="contain"
					bg="white"
					borderWidth="1px"
					p={1}
					src={item.logo}
					alt={item.alt}
				/>
				<Box flex="1" minW={0}>
					<Flex justify="space-between" gap={2} direction={{base: 'column', md: 'row'}}>
						<Heading as="h3" fontSize="lg">
							{item.url ? (
								<LinkOverlay href={item.url} isExternal>{item.title}</LinkOverlay>
							) : item.title}
						</Heading>
						<Text fontSize="sm" color="muted" whiteSpace="nowrap">
							{item.period}
						</Text>
					</Flex>
					<Text color="muted" mt={1}>
						{item.role}
					</Text>
					{item.highlights && (
						<UnorderedList color="muted" spacing={2} mt={4} pl={1}>
							{item.highlights.map((highlight) => (
								<ListItem key={highlight} lineHeight={1.6}>{highlight}</ListItem>
							))}
						</UnorderedList>
					)}
					{item.links && (
						<Wrap spacing={4} mt={2}>
							{item.links.map((link) => (
								<WrapItem key={link.url}>
									<Link
										href={link.url}
										isExternal
										color="accent"
										fontWeight={500}
										fontSize="sm"
										display="inline-flex"
										alignItems="center"
										gap={1}
										minH="44px"
									>
										{link.label}
										<FiArrowUpRight aria-hidden/>
									</Link>
								</WrapItem>
							))}
						</Wrap>
					)}
					<Wrap mt={4}>
						{item.skills.map((skill) => (
							<WrapItem key={skill}>
								<Tag size="sm">{skill}</Tag>
							</WrapItem>
						))}
					</Wrap>
				</Box>
			</Flex>
		</Card>
	);
};

export default CompanyCard;
