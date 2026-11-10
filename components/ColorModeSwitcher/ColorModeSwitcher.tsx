import React from 'react';
import {IconButton, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {FaMoon, FaSun} from "react-icons/fa";

const ColorModeSwitcher = () => {
	const {toggleColorMode, colorMode} = useColorMode();
	const nextMode = useColorModeValue("dark", "light");

	return (
		<IconButton
			boxSize="44px"
			variant="ghost"
			onClick={toggleColorMode}
			icon={colorMode === 'light' ? <FaMoon/> : <FaSun/>}
			aria-label={`Switch to ${nextMode} mode`}
		/>
	);
};

export default ColorModeSwitcher;
