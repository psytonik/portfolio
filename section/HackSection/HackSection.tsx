import React from 'react';
import {Box, Flex, Text} from "@chakra-ui/react";
import {MdOutlineSecurity} from "react-icons/md";
import Card from "@components/Card/Card";

export interface IpInfo {
	ipAddress?: string;
	city?: string;
	countryName?: string;
}

const HackSection: React.FC<{ hack: IpInfo }> = ({hack}) => {
	const location = [hack.city, hack.countryName].filter(Boolean).join(', ');

	return (
		<Card p={5} h="full">
			<Flex align="center" gap={2} mb={4} color="muted" fontSize="sm" fontWeight={500}>
				<MdOutlineSecurity aria-hidden/>
				<Text as="span">What your browser shares</Text>
			</Flex>
			<Box>
				<Text fontWeight={600}>{location || 'Unknown location'}</Text>
				<Text color="muted" fontSize="sm" sx={{fontVariantNumeric: 'tabular-nums'}}>
					IP address: {hack.ipAddress}
				</Text>
			</Box>
		</Card>
	);
};

export default HackSection;
