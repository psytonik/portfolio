import React from 'react';
import {Box, Flex, Link} from "@chakra-ui/react";
import NavBar from "@components/NavBar/Navbar";
import Footer from "@components/Footer/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({children}) => {
	return (
		<Flex direction="column" minH="100dvh">
			<Link
				href="#main-content"
				position="absolute"
				left={4}
				top={-20}
				zIndex="skipLink"
				px={4}
				py={2}
				rounded="md"
				bg="surface"
				borderWidth="1px"
				_focusVisible={{top: 4}}
			>
				Skip to content
			</Link>
			<NavBar/>
			<Box as="main" id="main-content" flex="1" tabIndex={-1} _focus={{outline: 'none'}}>
				{children}
			</Box>
			<Footer/>
		</Flex>
	);
};

export default Layout;
