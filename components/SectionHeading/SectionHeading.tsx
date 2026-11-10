import React from 'react';
import {Box, Flex, Heading, Text} from "@chakra-ui/react";

interface SectionHeadingProps {
	title: string;
	description?: React.ReactNode;
	/** Use "h1" for the page title, "h2" for sections inside a page. */
	as?: 'h1' | 'h2';
	action?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({title, description, as = 'h2', action}) => {
	const isPageTitle = as === 'h1';

	return (
		<Flex justify="space-between" align="flex-end" gap={4} mb={6} wrap="wrap">
			<Box maxW="2xl">
				<Heading
					as={as}
					fontSize={isPageTitle ? {base: '3xl', md: '4xl'} : {base: '2xl', md: '3xl'}}
					lineHeight={1.2}
				>
					{title}
				</Heading>
				{description && (
					<Text color="muted" fontSize={isPageTitle ? 'lg' : 'md'} lineHeight={1.6} mt={2}>
						{description}
					</Text>
				)}
			</Box>
			{action}
		</Flex>
	);
};

export default SectionHeading;
