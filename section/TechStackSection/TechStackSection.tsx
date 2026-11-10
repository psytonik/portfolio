import React from 'react';
import {Box, SimpleGrid} from "@chakra-ui/react";
import {techStacks} from "../../constants";
import StackCard from "@components/StackCard/StackCard";
import SectionHeading from "@components/SectionHeading/SectionHeading";

const TechStackSection = () => {
	return (
		<Box as="section">
			<SectionHeading
				title="Tech stack"
				description="Tools and technologies I use on a regular basis."
			/>
			<SimpleGrid columns={{base: 2, md: 4}} spacing={{base: 3, md: 4}}>
				{techStacks.map((stack) => (
					<StackCard key={stack.name} stack={stack}/>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default TechStackSection;
