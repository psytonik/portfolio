import React from 'react';
import {Box, Flex, IconButton, Link, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import {siteConfig} from "../../constants";

const iconProps = {
	variant: "ghost",
	size: "lg",
	isRound: true
};

const Footer = () => {
	return (
		<Stack
			as="footer"
			isInline
			spacing={[1, 2]}
			p={4}
			justifyContent="space-between"
			alignItems="center"
			w={["100%", "90%", "90%"]}
			maxW='container.lg'
			mx="auto"
		>
			<Flex
				flexDirection={["column", "column", "row"]}
				flexFlow={["column-reverse", "column-reverse"]}
				justifyContent={["center", "space-between"]}
				alignItems="center"
				w="100%"
			>
				<Text
					textAlign="center"
					fontSize="sm"
					color={useColorModeValue("gray.500", "gray.200")}
				>
					{siteConfig.copyright}
				</Text>

				<Box textAlign="center">
					{siteConfig.author.accounts.map((sc, index) => (
						<IconButton
							key={index}
							as={Link}
							isExternal
							href={sc.url}
							aria-label={sc.name}
							colorScheme={sc.type}
							icon={<sc.icon/>}
							{...iconProps}						/>
					))}
				</Box>
			</Flex>
		</Stack>
	);
};

export default Footer;
