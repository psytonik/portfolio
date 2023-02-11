import React from 'react';
import {Flex, Grid, Heading, SlideFade, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import {techStacks} from "../../constants";
import StackCard from "@components/StackCard/StackCard";
import {MotionBox} from "../../utils/motionBox";
import {GiTechnoHeart} from "react-icons/gi";
import UnderlineText from "@components/UnderlineText/UnderlineText";

const TechStackSection = () => {
	return (
		<SlideFade in offsetY={80} delay={0.2}>
			<Flex my={10}>
				<UnderlineText>
					<Flex alignItems={'center'}>
						<Stack pr={3}>
							<GiTechnoHeart size={"30px"} style={{marginBottom:'12px'}}/>
						</Stack>
						<Heading
							as="h1"
							fontSize={{ base: "24px", md: "30px", lg: "36px" }}
							mb={3}
						>
							Tech Stack
						</Heading>
					</Flex>
				</UnderlineText>
			</Flex>

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
