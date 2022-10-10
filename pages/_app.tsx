import "../styles/globals.css";
import type { AppProps } from 'next/app';
import {ChakraProvider} from "@chakra-ui/provider";
import { extendTheme } from '@chakra-ui/react';
import Layout from "@components/Layout/LayOut";
import {useRouter} from "next/router";
import ReactGA from "react-ga4";

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const MyApp =({ Component, pageProps }: AppProps) => {

    const router = useRouter();
    ReactGA.send({ hitType: "pageview", page: router.pathname });

    const theme = extendTheme({ colors })

  return (
      <ChakraProvider theme={theme}>
          <Layout>
              <Component {...pageProps}/>
          </Layout>
      </ChakraProvider>
  )
}

export default MyApp
