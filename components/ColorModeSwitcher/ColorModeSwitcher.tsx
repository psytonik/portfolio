import React from 'react';
import {IconButton, Tooltip, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {FaMoon, FaSun} from "react-icons/fa";

const ColorModeSwitcher = (props:any) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	const handleClick = () => {
		toggleColorMode();
	};


	return (
		// @ts-ignore
		<Tooltip>
			<IconButton
				size="md"
				fontSize="md"
				variant="ghost"
				color="current"
				marginLeft="2"
				onClick={handleClick}
				icon={<SwitchIcon />}
				aria-label={`Switch to ${text} mode`}
				_hover={{
					bg: useColorModeValue("gray.200", "gray.900")
				}}
				{...props}
			/>
		</Tooltip>
	);
};

export default ColorModeSwitcher;
