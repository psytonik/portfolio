import React from 'react';
import {Box, BoxProps} from "@chakra-ui/react";

interface CardProps extends BoxProps {
	/** Card is a single link target: use LinkOverlay inside for the main link. */
	interactive?: boolean;
}

const baseStyles: BoxProps = {
	bg: 'surface',
	borderWidth: '1px',
	borderColor: 'line',
	rounded: 'xl',
	overflow: 'hidden',
	transition: 'border-color .2s ease, transform .2s ease, box-shadow .2s ease',
};

// Same behaviour as Chakra's LinkBox: LinkOverlay stretches over the card,
// other links inside stay clickable above it.
const interactiveStyles: BoxProps = {
	position: 'relative',
	sx: {
		'a[href]:not(.chakra-linkbox__overlay)': {position: 'relative', zIndex: 1},
		// Body text sits above the overlay so it can be selected and copied.
		'p, li': {position: 'relative', zIndex: 1},
	},
	_hover: {borderColor: 'accent', transform: 'translateY(-2px)', boxShadow: 'md'},
	_focusWithin: {borderColor: 'accent'},
};

const Card = ({interactive, ...props}: CardProps) => (
	<Box {...baseStyles} {...(interactive ? interactiveStyles : {})} {...props}/>
);

export default Card;
