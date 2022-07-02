import React from 'react';
import {Alert, AlertDescription, AlertIcon, Box} from "@chakra-ui/react";

const ErrorMessage = ({message}:any) => {
	return (
		<Box my={4}>
			<Alert status="error" borderRadius={4}>
				<AlertIcon />
				<AlertDescription>{message}</AlertDescription>
			</Alert>
		</Box>
	);
};

export default ErrorMessage;
