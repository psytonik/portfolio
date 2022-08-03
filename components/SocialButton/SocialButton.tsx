import React from 'react';
import {Button, Link} from "@chakra-ui/react";

const SocialButton = ({ social }:any) => {
	return (
		<Link href={social.url} isExternal style={{ textDecoration: 'none' }}>
			<Button
				colorScheme="blue"
				size='sm'
				margin={'5px'}
				leftIcon={<social.icon />}
			>
				{social.name}
			</Button>
		</Link>
	);
};

export default SocialButton;
