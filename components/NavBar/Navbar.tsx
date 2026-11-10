import React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import {useRouter} from 'next/router';
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import {
	Box,
	Container,
	HStack,
	IconButton,
	Link,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import {menuLinks, siteConfig} from '../../constants';
import ColorModeSwitcher from "@components/ColorModeSwitcher/ColorModeSwitcher";

const NavBar = () => {
	const {isOpen, onToggle, onClose} = useDisclosure();
	const {pathname} = useRouter();
	const barBg = useColorModeValue('rgba(250, 250, 250, 0.85)', 'rgba(9, 9, 11, 0.85)');

	const renderLinks = (mobile: boolean) =>
		menuLinks.map((link) => {
			const isActive = pathname === link.route;
			return (
				<Link
					as={NextLink}
					key={link.route}
					href={link.route}
					onClick={onClose}
					aria-current={isActive ? 'page' : undefined}
					px={3}
					py={mobile ? 3 : 2}
					rounded="md"
					fontSize={mobile ? 'md' : 'sm'}
					fontWeight={500}
					color={isActive ? 'fg' : 'muted'}
					bg={isActive ? 'subtle' : 'transparent'}
					transition="color .2s ease, background-color .2s ease"
					_hover={{color: 'fg', bg: 'subtle', textDecoration: 'none'}}
				>
					{link.name}
				</Link>
			);
		});

	return (
		<Box
			as="header"
			position="sticky"
			top={0}
			zIndex="sticky"
			bg={barBg}
			backdropFilter="saturate(180%) blur(12px)"
			borderBottomWidth="1px"
		>
			<Container maxW="container.lg" h={16} display="flex" alignItems="center" justifyContent="space-between" px={{base: 4, md: 6}}>
				<HStack spacing={6}>
					<Link
						as={NextLink}
						href="/"
						onClick={onClose}
						display="flex"
						alignItems="center"
						gap={3}
						rounded="md"
						_hover={{textDecoration: 'none'}}
					>
						<Box position="relative" boxSize={8} rounded="full" overflow="hidden" bg="subtle" flexShrink={0}>
							<NextImage src="/profile.png" alt="" fill sizes="32px" style={{objectFit: 'cover'}}/>
						</Box>
						<Text fontWeight={600}>{siteConfig.author.name}</Text>
					</Link>

					<HStack as="nav" aria-label="Main" spacing={1} display={{base: 'none', md: 'flex'}}>
						{renderLinks(false)}
					</HStack>
				</HStack>

				<HStack spacing={1}>
					<ColorModeSwitcher/>
					<IconButton
						display={{base: 'inline-flex', md: 'none'}}
						variant="ghost"
						boxSize="44px"
						icon={isOpen ? <CloseIcon boxSize={3}/> : <HamburgerIcon boxSize={5}/>}
						aria-label={isOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={isOpen}
						aria-controls="mobile-nav"
						onClick={onToggle}
					/>
				</HStack>
			</Container>

			{isOpen && (
				<Stack
					as="nav"
					id="mobile-nav"
					aria-label="Main"
					spacing={1}
					px={4}
					pb={4}
					display={{base: 'flex', md: 'none'}}
				>
					{renderLinks(true)}
				</Stack>
			)}
		</Box>
	);
};

export default NavBar;
