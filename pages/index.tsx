import type {NextPage} from 'next'
import styles from '../styles/Home.module.css';
import Head from "next/head";
import {Container, Divider} from "@chakra-ui/react";
import ProfileSection from "../section/ProfileSection/ProfileSection";
import TechStackSection from "../section/TechStackSection/TechStackSection";
import useSWR from "swr";

const Home: NextPage = () => {
    const fetcher = (url: RequestInfo | URL) => fetch(url).then((r)=>r.json())
    const {data} = useSWR('/api/spotify', fetcher);

  return (
      <div className={styles.container}>
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

              <link rel='apple-touch-icon preload' href='/profile.png' />
              <link rel='apple-touch-icon preload' sizes='152x152' href='/profile.png' />
              <link rel='apple-touch-icon preload' sizes='180x180' href='/profile.png' />
              <link rel='apple-touch-icon preload' sizes='167x167' href='/profile.png' />

              <link rel='icon preload' type='image/png' sizes='32x32' href='/profile.png' />
              <link rel='icon preload' type='image/png' sizes='16x16' href='/profile.png' />
              <link rel='manifest preload' href='/manifest.json' />
              <link rel='mask-icon preload' href='/profile.png' color='#5bbad5' />
              <link rel='shortcut icon preload' href='/favicon.ico' />
              <link rel='stylesheet preload' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

              <meta property="og:title" content="Anthony Fink | Full Stack Web Developer"></meta>
              <meta name="description" content="Anthony Fink | Full Stack Web Developer" />
              <link rel="icon preload" href="/profile.png"/>
          </Head>
          <main>
              <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
                  <ProfileSection song={data}/>
                  <Divider my={7} />
                  <TechStackSection/>
                  <Divider my={7} />
              </Container>
          </main>
      </div>
  )
}

export default Home
