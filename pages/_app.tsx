import "../styles/globals.css";
import type {AppProps} from 'next/app';
import {useEffect} from "react";
import {useRouter} from "next/router";
import {Inter} from "next/font/google";
import {ChakraProvider} from "@chakra-ui/react";
import ReactGA from "react-ga4";
import {appWithTranslation} from 'next-i18next';
import Layout from "@components/Layout/LayOut";
import theme from "../styles/theme";

const inter = Inter({subsets: ['latin', 'cyrillic'], display: 'swap'});

const GA_ID = "G-9DGEB5XE14";

const MyApp = ({Component, pageProps}: AppProps) => {
	const router = useRouter();

	useEffect(() => {
		ReactGA.initialize(GA_ID);
		ReactGA.send({hitType: "pageview", page: window.location.pathname});

		const onRouteChange = (url: string) => {
			ReactGA.send({hitType: "pageview", page: url});
		};
		router.events.on('routeChangeComplete', onRouteChange);
		return () => router.events.off('routeChangeComplete', onRouteChange);
	}, [router.events]);

	return (
		<>
			<style jsx global>{`
				:root {
					--font-inter: ${inter.style.fontFamily};
				}
			`}</style>
			<ChakraProvider theme={theme}>
				<Layout>
					<Component {...pageProps}/>
				</Layout>
			</ChakraProvider>
		</>
	);
};

export default appWithTranslation(MyApp);
