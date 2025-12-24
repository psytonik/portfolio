import React from 'react';
import {
	Heading,
	SlideFade,
	Stack,
	Flex,
	Text,
	useColorModeValue,
	Center,
	LinkBox,
	Box,
	Image,
	Tag
} from "@chakra-ui/react";
import UnderlineText from '@components/UnderlineText/UnderlineText';
import { FaProjectDiagram } from "react-icons/fa";
import Paragraph from "@components/Paragraph/Paragraph";
import {MotionBox} from "../../utils/motionBox";
const ProjectsSection: React.FC = () => {
	return (
		<SlideFade in offsetY={80} delay={0.2}>
			<UnderlineText>
				<Flex alignItems={'center'}>
					<Stack pr={3}>
						<FaProjectDiagram size={'30px'} style={{marginBottom:'12px'}}/>
					</Stack>
					<Heading
						as="h1"
						fontSize={{ base: "24px", md: "30px", lg: "36px" }}
						mb={3}
					>
						My Projects
					</Heading>
				</Flex>
			</UnderlineText>


			<Paragraph Paragraph fontSize="lg" lineHeight={1.6} my={5}>
					Below is a compilation of various projects that I have personally undertaken and completed in the past.
					These projects represent a diverse range of my skills, experiences, and areas of expertise. Each endeavor showcases my dedication to problem-solving,
					creativity, and the ability to bring ideas to fruition. Whether they involve web development, application programming, design, or other domains,
					these projects collectively reflect the breadth and depth of my past contributions to various fields.
			</Paragraph>

			<MotionBox whileHover={{ y: -5 }}>
				<Center py={6}>
					<LinkBox
						w={"full"}
						bg={useColorModeValue("white", "gray.900")}
						boxShadow={"2xl"}
						rounded={"md"}
						px={6}
						py={3}
						mx={5}
						overflow={"hidden"}
						_hover={{ cursor: "pointer" }}
						onClick={() => {
							window.open('https://psytonik.dj');
						}}
					>
						<Box bg={"gray.100"} mt={-6} mx={-6} pos={"relative"}>
							<Image
								src="/screenshots/screen1.png"
								objectFit={"cover"}
								maxH={"250px"}
								h={"250px"}
								w="full"
							/>
						</Box>
						<Stack mb={3}>
							<Text
								mt={3}
								color={"blue.500"}
								textTransform={"uppercase"}
								fontWeight={800}
								fontSize={"lg"}
								letterSpacing={1.1}
							>
								Dj PsyToniK
							</Text>
							<Text color={"gray.500"}>
								Certainly! Here's a description for the portfolio of DJ PsyToniK that you developed using Next.js, Tailwind CSS, MixCloudAPI, and EmailJS API:
							</Text>
							<Text color={"gray.500"}>
								DJ PsyToniK's portfolio is a dynamic and visually engaging platform crafted with precision and creativity.
								Developed using the powerful Next.js framework, the website seamlessly combines robust functionality with a sleek and intuitive user interface.
								The use of Tailwind CSS not only ensures a responsive and visually appealing design but also enhances the overall performance of the site.
							</Text>
							<Text color={"gray.500"}>
								One of the standout features of the portfolio is its integration with the MixCloudAPI.
								This integration allows DJ PsyToniK to effortlessly showcase an extensive collection of mixes and tracks,
								providing visitors with an immersive audio experience.
								The MixCloudAPI integration ensures that the portfolio stays up-to-date with the latest content,
								offering a real-time reflection of DJ PsyToniK's musical journey.
							</Text>
							<Text color={"gray.500"}>
								To further enhance user interaction, the portfolio incorporates the EmailJS API, enabling seamless communication.
								This integration allows visitors to connect with DJ PsyToniK easily, whether it be for collaboration inquiries,
								event bookings, or general inquiries. The use of EmailJS ensures a streamlined and secure communication process,
								emphasizing professionalism and accessibility.
							</Text>
							<Text color={"gray.500"}>
								The portfolio not only serves as a showcase of DJ PsyToniK's talent but also reflects your commitment to utilizing cutting-edge technologies.
								The synergy between Next.js, Tailwind CSS, MixCloudAPI, and EmailJS API results in a website that not only meets but exceeds industry standards,
								providing a memorable and enjoyable experience for visitors exploring the world of DJ PsyToniK.
							</Text>
						</Stack>
							<Tag size="sm" padding="0 5px" mx={1}>
								Next Js
							</Tag>
							<Tag size="sm" padding="0 5px" mx={1}>
								Tailwind Css
							</Tag>
							<Tag size="sm" padding="0 5px" mx={1}>
								React
							</Tag>
							<Tag size="sm" padding="0 5px" mx={1}>
								TypeScript
							</Tag>
					</LinkBox>
				</Center>
			</MotionBox>
		</SlideFade>
	);
};

export default ProjectsSection;
