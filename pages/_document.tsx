import {Head, Html, Main, NextScript} from 'next/document';
import {ColorModeScript} from '@chakra-ui/react';
import theme from '../styles/theme';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="manifest" href="/manifest.json"/>
				<link rel="icon" href="/favicon.ico"/>
				<link rel="apple-touch-icon" href="/profile.png"/>
				<meta name="application-name" content="Anthony Fink"/>
				<meta name="apple-mobile-web-app-title" content="Anthony Fink"/>
				<meta name="mobile-web-app-capable" content="yes"/>
				<meta name="format-detection" content="telephone=no"/>
				<meta name="theme-color" media="(prefers-color-scheme: light)" content="#FAFAFA"/>
				<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#09090B"/>
			</Head>
			<body>
				<ColorModeScript initialColorMode={theme.config.initialColorMode}/>
				<Main/>
				<NextScript/>
			</body>
		</Html>
	);
}
