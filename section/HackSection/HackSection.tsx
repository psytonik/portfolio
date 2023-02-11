import React from 'react';
import {MotionBox} from "../../utils/motionBox";
import {Flex, LinkBox, Stack, useColorModeValue, Text, Heading, SlideFade} from "@chakra-ui/react";
import UnderlineText from "@components/UnderlineText/UnderlineText";
import {MdOutlineSecurity} from "react-icons/md";

const HackSection = (props:any) => {
	const {city,ipAddress,countryName} = props.hack;
	return (
		<SlideFade in offsetY={80} delay={0.2}>
			<UnderlineText>
			<Flex alignItems={'center'}>
				<Stack pr={3}>
					<MdOutlineSecurity size={'30px'} style={{marginBottom:'12px'}} />
				</Stack>
				<Heading
					as="h1"
					fontSize={{ base: "24px", md: "30px", lg: "36px" }}
					mb={3}
				>
					Security
				</Heading>
			</Flex>
			</UnderlineText>

			<Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'lg'} my={5}>
				Some information about you
			</Text>
				<MotionBox whileHover={{ y: -5 }}>
					<LinkBox
						p={4}
						display={{ md: "flex" }}
						borderWidth={1}
						margin={2}
						rounded={'10px'}
						_hover={{
							borderColor: "blue.500",
						}}
						borderColor={useColorModeValue("gray.300", "gray.700")}
					>
						<Stack
							as="div"
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
								<Text>
									IP Address: {ipAddress}
								</Text>
								<Text>
									City: {city}
								</Text>
								<Text>
									Country: {countryName}
								</Text>
							</Flex>
						</Stack>
					</LinkBox>
				</MotionBox>
		</SlideFade>
	);
};

export default HackSection;
