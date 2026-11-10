import React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import {Box, Button, Flex, Heading, Text, Wrap, WrapItem} from '@chakra-ui/react';
import {FiArrowRight, FiDownload} from "react-icons/fi";
import {resume, siteConfig} from "../../constants";
import {gaEvents} from '../../utils/gaEvents';

const ProfileSection = () => {
	return (
		<Flex
			as="section"
			direction={{base: 'column-reverse', md: 'row'}}
			align={{base: 'flex-start', md: 'center'}}
			justify="space-between"
			gap={{base: 6, md: 12}}
			pb={{base: 4, md: 8}}
		>
			<Box maxW="2xl">
				<Text color="accent" fontWeight={600} fontSize="sm" letterSpacing="0.08em" textTransform="uppercase" mb={3}>
					Full Stack Web Developer · Israel
				</Text>
				<Heading as="h1" fontSize={{base: '4xl', md: '6xl'}} lineHeight={1.1} letterSpacing="-0.03em">
					{siteConfig.author.name}
				</Heading>
				<Text color="muted" fontSize={{base: 'lg', md: 'xl'}} lineHeight={1.6} mt={4}>
					I build web products end to end with React, Node.js and TypeScript, ship AI
					features that reach real users, and care about interfaces that are clean and fast.
				</Text>

				<Wrap spacing={3} mt={8}>
					<WrapItem>
						<Button as={NextLink} href="/portfolio" colorScheme="brand" size="lg" rightIcon={<FiArrowRight/>}>
							View projects
						</Button>
					</WrapItem>
					<WrapItem>
						<Button as={NextLink} href="/contact" variant="outline" size="lg" onClick={gaEvents.eventContactClick}>
							Contact me
						</Button>
					</WrapItem>
					<WrapItem>
						<Button
							as="a"
							href={resume.url}
							target="_blank"
							rel="noopener noreferrer"
							variant="ghost"
							size="lg"
							leftIcon={<FiDownload/>}
						>
							{resume.name}
						</Button>
					</WrapItem>
				</Wrap>
			</Box>

			<Box
				position="relative"
				boxSize={{base: 24, md: 48}}
				rounded="full"
				overflow="hidden"
				borderWidth="1px"
				bg="subtle"
				flexShrink={0}
			>
				<NextImage
					src="/profile.png"
					alt="Portrait of Anthony Fink"
					fill
					priority
					sizes="(max-width: 768px) 96px, 192px"
					style={{objectFit: 'cover'}}
				/>
			</Box>
		</Flex>
	);
};

export default ProfileSection;
