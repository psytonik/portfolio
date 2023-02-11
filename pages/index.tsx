import type {NextPage} from 'next'
import styles from '../styles/Home.module.css';
import Head from "next/head";
import {Container, Divider, Flex, LinkBox, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import ProfileSection from "../section/ProfileSection/ProfileSection";
import TechStackSection from "../section/TechStackSection/TechStackSection";
import useSWR from "swr";
import ReactGA from "react-ga4";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {MotionBox} from "../utils/motionBox";

const Home: NextPage = () => {
    const router = useRouter();
    ReactGA.initialize("G-9DGEB5XE14");
    ReactGA.send({ hitType: "pageview", page: router.pathname });

    const fetcher = (url: RequestInfo | URL) => fetch(url).then((r)=>r.json());
    const spotify = useSWR('/api/spotify', fetcher);

    const {data} = useSWR('https://api.db-ip.com/v2/free/self', fetcher);
    const [ipInfo,setIpInfo] = useState<any>(null);

    useEffect(()=>{
        setIpInfo(data)
    },[data]);
    return (
      <div className={styles.container} >
          <Head>
              <title>Anthony Fink | Home</title>

              <meta name='application-name' content='Anthony Fink | Full Stack Web Developer' />
              <meta name='apple-mobile-web-app-capable' content='yes' />
              <meta name='apple-mobile-web-app-status-bar-style' content='default' />
              <meta name='apple-mobile-web-app-title' content='Anthony Fink | Full Stack Web Developer' />
              <meta name='description' content='Anthony Fink Resume | Full Stack Web Developer | Progressive Web Application with NextJs' />
              <meta name='format-detection' content='telephone=no' />
              <meta name='mobile-web-app-capable' content='yes' />
              <meta name='msapplication-config' content='/icons/browserconfig.xml' />
              <meta name='msapplication-TileColor' content='#2B5797' />
              <meta name='msapplication-tap-highlight' content='no' />
              <meta name='theme-color' content='#000000' />

              <link rel='apple-touch-icon preload' as="image" href='/profile.png' />
              <link rel='apple-touch-icon preload' as="image" sizes='152x152' href='/profile.png' />
              <link rel='apple-touch-icon preload' as="image" sizes='180x180' href='/profile.png' />
              <link rel='apple-touch-icon preload' as="image" sizes='167x167' href='/profile.png' />

              <link rel='icon preload'  as="image" type='image/png' sizes='32x32' href='/profile.png' />
              <link rel='icon preload' as="image" type='image/png' sizes='16x16' href='/profile.png' />
              <link rel='manifest preload' href='/manifest.json' />
              <link rel='mask-icon preload' as="image" href='/profile.png' color='#5bbad5' />
              <link rel='shortcut icon preload' href='/favicon.ico' as="image"/>
              <link rel='stylesheet preload' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' as="font"/>

              <meta property="og:title" content="Anthony Fink | Full Stack Web Developer"></meta>
              <meta name="description" content="Anthony Fink | Full Stack Web Developer" />
              <link rel="icon preload" href="/profile.png" as="image"/>
          </Head>
          <main className="website-counter">
              <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
                  <ProfileSection song={spotify.data}/>
                  <Divider my={7} />
                  <TechStackSection/>
                  <Divider my={7} />
                  {ipInfo && (
                      <MotionBox whileHover={{ y: -5 }}>
                          <LinkBox
                              p={4}
                              display={{ md: "flex" }}
                              borderWidth={1}
                              margin={2}
                              rounded={'10px'}
                              _hover={{
                                  borderColor: "blue.500",
                              }}
                              borderColor={useColorModeValue("gray.300", "gray.700")}
                          >
                              <Stack
                                  as="div"
                                  isInline
                                  spacing={[1, 2]}
                                  p={4}
                                  justifyContent="space-between"
                                  alignItems="center"
                                  w={["100%", "90%", "90%"]}
                                  maxW='container.lg'
                                  mx="auto"
                              >
                                  <Flex
                                      flexDirection={["column", "column", "row"]}
                                      flexFlow={["column-reverse", "column-reverse"]}
                                      justifyContent={["center", "space-between"]}
                                      alignItems="center"
                                      w="100%"
                                  >
                                      <Text>
                                          IP Address: {ipInfo.ipAddress}
                                      </Text>
                                      <Text>
                                          City: {ipInfo.city}
                                      </Text>
                                      <Text>
                                          Country: {ipInfo.countryName}
                                      </Text>
                                  </Flex>
                              </Stack>
                          </LinkBox>
                      </MotionBox>

                  )}
              </Container>
          </main>
      </div>
  )
}

export default Home;
