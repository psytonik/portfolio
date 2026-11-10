import React from 'react';
import NextImage from 'next/image';
import {
	AspectRatio,
	Heading,
	LinkOverlay,
	ListItem,
	Stack,
	Tag,
	Text,
	UnorderedList,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import {FiArrowUpRight} from "react-icons/fi";
import Card from "@components/Card/Card";
import {Project} from "../../constants/projects";

interface ProjectCardProps {
	project: Project;
	/** Hide the highlights list, for dense grids. */
	compact?: boolean;
	headingLevel?: 'h2' | 'h3';
}

const ProjectCard: React.FC<ProjectCardProps> = ({project, compact, headingLevel = 'h2'}) => {
	return (
		<Card as="article" interactive h="full" role="group">
			<AspectRatio ratio={16 / 9} bg="subtle">
				<NextImage
					src={project.image}
					alt={project.alt}
					fill
					sizes="(max-width: 768px) 100vw, 480px"
					style={{objectFit: 'cover'}}
				/>
			</AspectRatio>
			<Stack p={{base: 5, md: 6}} spacing={3}>
				<Heading as={headingLevel} fontSize="xl" display="flex" alignItems="center" gap={1}>
					<LinkOverlay href={project.url} isExternal>
						{project.title}
					</LinkOverlay>
					<Text
						as="span"
						color="muted"
						transition="color .2s ease"
						_groupHover={{color: 'accent'}}
						aria-hidden
					>
						<FiArrowUpRight/>
					</Text>
				</Heading>
				<Text color="muted" lineHeight={1.6}>{project.summary}</Text>
				{!compact && (
					<UnorderedList color="muted" spacing={1} pl={1}>
						{project.highlights.map((item) => (
							<ListItem key={item}>{item}</ListItem>
						))}
					</UnorderedList>
				)}
				<Wrap pt={1}>
					{project.tags.map((tag) => (
						<WrapItem key={tag}>
							<Tag size="sm">{tag}</Tag>
						</WrapItem>
					))}
				</Wrap>
			</Stack>
		</Card>
	);
};

export default ProjectCard;
