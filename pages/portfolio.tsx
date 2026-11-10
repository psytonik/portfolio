import React from 'react';
import {NextPage} from "next";
import Seo from "@components/Seo/Seo";
import {buildProjectsJsonLd} from "../constants/structuredData";
import Page from "@components/Page/Page";
import ProjectsSection from "../section/ProjectsSection/ProjectsSection";

const PortfolioPage: NextPage = () => {
	return (
		<>
			<Seo
				title="Projects"
				description="Products and sites built by Anthony Fink: GigCalm, Traveller, AFink Video and more."
				path="/portfolio"
				jsonLd={buildProjectsJsonLd()}
			/>
			<Page>
				<ProjectsSection/>
			</Page>
		</>
	);
};

export default PortfolioPage;
