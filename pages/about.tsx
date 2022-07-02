import React from 'react';
import {NextPage} from "next";
import styles from '../styles/Home.module.css';
import Head  from 'next/head';
import {Box, Container, Flex, Heading, SlideFade, Stack, useColorMode, VStack} from "@chakra-ui/react";
import UnderlineText from "@components/UnderlineText/UnderlineText";
import {AiFillStar} from "react-icons/ai";
import Paragraph from "@components/Paragraph/Paragraph";
import {BsFillBriefcaseFill} from "react-icons/bs";
import {companies, educations} from "../constants";
import {MotionBox} from "../utils/motionBox";
import CompanyCard from "@components/CompanyCard/CompanyCard";
import {FaGraduationCap} from "react-icons/fa";

const About:NextPage = () => {
	const { colorMode } = useColorMode();

	return (
		<div className={styles.container}>
			<Head>
				<title>Anthony Fink | About Me</title>
				<meta name="description" content="Anthony Fink | Full Stack Web Developer" />
				<link rel="icon" href="/profile.png" />
			</Head>
			<main>
				<Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
					<SlideFade in offsetX={80}>
						<Box>
							<UnderlineText>
								<Flex alignItems={'center'}>
									<Stack pr={3}>
										<AiFillStar size={'30px'} />
									</Stack>
									<Heading>
										About Me
									</Heading>
								</Flex>
							</UnderlineText>

							<Paragraph fontSize="lg" lineHeight={1.6} my={5}>
								I am a Web developer with 2 years ++ working experience. My developer journey started with JavaScript during my internship.
								After graduation, this journey continued with React Js, and Node Js 👔
							</Paragraph>
							<Paragraph fontSize="lg" lineHeight={1.6} my={5}>
								Serious highly motivated candidate, excellent interpersonal skills,
								High level of troubleshooting andcapability of multitasking, team player but can also work independently.
								Always open to learn something new. Looking for Full Stack or Front-End Positions 🔥
							</Paragraph>

							<Flex alignItems="center" my={10}>
								<UnderlineText>
									<Flex alignItems={'center'}>
										<Stack pr={3}>
											<BsFillBriefcaseFill size={'30px'} />
										</Stack>

										<Heading>Career</Heading>
									</Flex>
								</UnderlineText>
							</Flex>

							<VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={5}>
								{companies.map((company,index)=>(
									<MotionBox whileHover={{ y: -5 }} key={index}>
										<CompanyCard
											key={index}
											title={company.title}
											role={company.role}
											skills={company.skills}
											period={company.period}
											logo={company.logo}
											url={company.url}
											colorMode={colorMode}
										/>
									</MotionBox>
								))}
							</VStack>

							<Flex alignItems="center" my={10}>
								<UnderlineText>
									<Flex alignItems="center">
										<Stack pr={3}>
											<FaGraduationCap size={'30px'} />
										</Stack>
										<Heading>Education</Heading>
									</Flex>
								</UnderlineText>
							</Flex>

							<VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={5}>
								{educations.map((education, index) => (
									<MotionBox whileHover={{ y: -5 }} key={index}>
										<CompanyCard
											key={index}
											title={education.title}
											role={education.role}
											skills={education.skills}
											period={education.period}
											logo={education.logo}
											url={education.url}
											colorMode={colorMode}
										/>
									</MotionBox>
								))}
							</VStack>

						</Box>
					</SlideFade>
				</Container>
			</main>
		</div>
	);
};

export default About;
