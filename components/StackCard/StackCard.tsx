import React from 'react';
import {Flex, LinkOverlay, Text} from "@chakra-ui/react";
import {IconType} from "react-icons";
import Card from "@components/Card/Card";

interface Stack {
	name: string;
	url: string;
	icon: IconType;
}

const StackCard: React.FC<{ stack: Stack }> = ({stack}) => {
	return (
		<Card interactive role="group" p={4}>
			<Flex align="center" gap={3}>
				<Text as="span" fontSize="xl" color="muted" transition="color .2s ease" _groupHover={{color: 'accent'}} aria-hidden>
					<stack.icon/>
				</Text>
				<LinkOverlay href={stack.url} isExternal fontWeight={500}>
					{stack.name}
				</LinkOverlay>
			</Flex>
		</Card>
	);
};

export default StackCard;
