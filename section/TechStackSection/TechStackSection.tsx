import React from 'react';
import {Grid, Heading, SlideFade, Text, useColorModeValue} from "@chakra-ui/react";
import {techStacks} from "../../constants";
import StackCard from "@components/StackCard/StackCard";
import {MotionBox} from "../../utils/motionBox";

const TechStackSection = () => {
	return (
		<SlideFade in offsetY={80} delay={0.2}>
			<Heading
				as="h1"
				fontSize={{ base: "24px", md: "30px", lg: "36px" }}
				mb={3}
			>
				Tech Stack
			</Heading>
			<Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'lg'}>A list of my favorite tools and technologies that I use on a regular basis.</Text>
			<Grid
				mt={5}
				templateColumns={["1fr", "repeat(2,1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
				gap={[2, 5, 5, 5]}
			>
				{techStacks.map((stack) => (
					<MotionBox whileHover={{ y: -5 }} key={stack.name}>
						<StackCard stack={stack} />
					</MotionBox>
				))}
			</Grid>
		</SlideFade>
	);
};

export default TechStackSection;
