import {extendTheme, type ThemeConfig} from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: false,
};

const fontStack = `var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`;

const theme = extendTheme({
	config,
	fonts: {
		heading: fontStack,
		body: fontStack,
	},
	colors: {
		// Neutral zinc scale instead of Chakra's blue-tinted gray
		gray: {
			50: '#FAFAFA',
			100: '#F4F4F5',
			200: '#E4E4E7',
			300: '#D4D4D8',
			400: '#A1A1AA',
			500: '#71717A',
			600: '#52525B',
			700: '#3F3F46',
			800: '#27272A',
			900: '#18181B',
		},
		// 500 is dark enough for white text at 4.5:1
		brand: {
			50: '#EFF6FF',
			100: '#DBEAFE',
			200: '#93C5FD',
			300: '#60A5FA',
			400: '#3B82F6',
			500: '#2563EB',
			600: '#1D4ED8',
			700: '#1E40AF',
			800: '#1E3A8A',
			900: '#172554',
		},
	},
	semanticTokens: {
		colors: {
			canvas: {default: 'gray.50', _dark: '#09090B'},
			surface: {default: 'white', _dark: 'gray.900'},
			subtle: {default: 'gray.100', _dark: 'gray.800'},
			line: {default: 'gray.200', _dark: 'gray.800'},
			fg: {default: '#09090B', _dark: 'gray.50'},
			muted: {default: 'gray.600', _dark: 'gray.400'},
			accent: {default: 'brand.500', _dark: 'brand.300'},
		},
	},
	styles: {
		global: {
			body: {
				bg: 'canvas',
				color: 'fg',
			},
			'*, *::before, *::after': {
				borderColor: 'line',
			},
		},
	},
	components: {
		Heading: {
			baseStyle: {
				letterSpacing: '-0.02em',
			},
		},
	},
});

export default theme;
