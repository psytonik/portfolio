import React from 'react';
import NextLink from 'next/link';
import {Box, Button, SimpleGrid} from "@chakra-ui/react";
import {FiArrowRight} from "react-icons/fi";
import SectionHeading from "@components/SectionHeading/SectionHeading";
import ProjectCard from "@components/ProjectCard/ProjectCard";
import {projects} from "../../constants/projects";

interface ProjectsSectionProps {
	/** Show only the first N projects in a compact grid with a link to the full list. */
	featured?: number;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({featured}) => {
	const isFeatured = typeof featured === 'number';
	const list = isFeatured ? projects.slice(0, featured) : projects;

	return (
		<Box as="section">
			<SectionHeading
				as={isFeatured ? 'h2' : 'h1'}
				title={isFeatured ? 'Featured projects' : 'Projects'}
				description={isFeatured
					? undefined
					: 'Products and sites I have designed, built and shipped, from booking marketplaces and AI travel tools to portfolio sites.'}
				action={isFeatured ? (
					<Button as={NextLink} href="/portfolio" variant="ghost" size="sm" rightIcon={<FiArrowRight/>}>
						All projects
					</Button>
				) : undefined}
			/>

			<SimpleGrid columns={{base: 1, md: isFeatured ? 3 : 2}} spacing={6}>
				{list.map((project) => (
					<ProjectCard
						key={project.url}
						project={project}
						compact={isFeatured}
						headingLevel={isFeatured ? 'h3' : 'h2'}
					/>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default ProjectsSection;
