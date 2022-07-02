import type { NextPage } from 'next'
import styles from '../styles/Home.module.css';
import Head from "next/head";
import {Container, Divider} from "@chakra-ui/react";
import ProfileSection from "../section/ProfileSection/ProfileSection";
import TechStackSection from "../section/TechStackSection/TechStackSection";

const Home: NextPage = () => {

  return (
      <div className={styles.container}>
          <Head>
              <title>Anthony Fink | Home</title>
              <meta property="og:title" content="Anthony Fink | Full Stack Web Developer"></meta>
              <meta name="description" content="Anthony Fink | Full Stack Web Developer" />
              <link rel="icon" href="/profile.png" />
          </Head>
          <main>
              <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
                  <ProfileSection/>
                  <Divider my={7} />
                  <TechStackSection/>
                  <Divider my={7} />
              </Container>
          </main>
      </div>
  )
}

export default Home
