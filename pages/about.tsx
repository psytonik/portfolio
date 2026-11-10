import React from 'react';
import {NextPage} from "next";
import {Box, Stack} from "@chakra-ui/react";
import Seo from "@components/Seo/Seo";
import {buildAboutJsonLd} from "../constants/structuredData";
import Page from "@components/Page/Page";
import SectionHeading from "@components/SectionHeading/SectionHeading";
import Paragraph from "@components/Paragraph/Paragraph";
import CompanyCard from "@components/CompanyCard/CompanyCard";
import {companies, educations} from "../constants";

const About: NextPage = () => {
	return (
		<>
			<Seo
				title="About"
				description="About Anthony Fink: career, education and the technologies I work with."
				path="/about"
				jsonLd={buildAboutJsonLd()}
			/>
			<Page>
				<Stack spacing={{base: 12, md: 16}}>
					<Box as="section">
						<SectionHeading as="h1" title="About me"/>
						<Stack spacing={4} maxW="3xl">
							<Paragraph>
								I am a full stack developer. My journey started with JavaScript during my internship and
								grew through React and Node.js into building products end to end, most recently Traveller,
								an AI walking-route planner I built and launched solo for iOS, Android and the web.
							</Paragraph>
							<Paragraph>
								Highly motivated, with strong interpersonal skills, solid troubleshooting and the ability
								to multitask. I am a team player who can also work independently, and I am always open
								to learning something new. Looking for Full Stack or Front-End positions.
							</Paragraph>
						</Stack>
					</Box>

					<Box as="section">
						<SectionHeading title="Career"/>
						<Stack spacing={4}>
							{companies.map((company) => (
								<CompanyCard key={company.title} item={company}/>
							))}
						</Stack>
					</Box>

					<Box as="section">
						<SectionHeading title="Education"/>
						<Stack spacing={4}>
							{educations.map((education) => (
								<CompanyCard key={education.title} item={education}/>
							))}
						</Stack>
					</Box>
				</Stack>
			</Page>
		</>
	);
};

export default About;
