import React from 'react';
import {Text} from "@chakra-ui/react";

const Paragraph: React.FC<{ children: React.ReactNode }> = ({children}) => (
	<Text color="muted" fontSize="lg" lineHeight={1.7}>
		{children}
	</Text>
);

export default Paragraph;
