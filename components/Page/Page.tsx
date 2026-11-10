import React from 'react';
import {Container} from "@chakra-ui/react";

const Page: React.FC<{ children: React.ReactNode }> = ({children}) => (
	<Container maxW="container.lg" px={{base: 4, md: 6}} py={{base: 8, md: 14}} className="reveal">
		{children}
	</Container>
);

export default Page;
