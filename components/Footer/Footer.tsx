import React from 'react';
import {Box, Flex, HStack, IconButton, Text} from "@chakra-ui/react";
import {siteConfig} from "../../constants";

const Footer = () => {
	return (
		<Box as="footer" borderTopWidth="1px" mt={8}>
			<Flex
				direction={{base: 'column-reverse', md: 'row'}}
				align="center"
				justify="space-between"
				gap={2}
				maxW="container.lg"
				mx="auto"
				px={{base: 4, md: 6}}
				py={4}
			>
				<Text fontSize="sm" color="muted">
					{siteConfig.copyright}
				</Text>

				<HStack spacing={1}>
					{siteConfig.author.accounts.map((account) => (
						<IconButton
							key={account.name}
							as="a"
							href={account.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={account.name}
							variant="ghost"
							boxSize="44px"
							fontSize="lg"
							color="muted"
							_hover={{color: 'fg', bg: 'subtle'}}
							icon={<account.icon/>}
						/>
					))}
				</HStack>
			</Flex>
		</Box>
	);
};

export default Footer;
