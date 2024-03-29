import React, {useEffect, useRef} from 'react';
import { SlideFade, Box, Heading, Avatar, Flex,Link as LinkChakra, LightMode, ButtonGroup, Button, useColorModeValue } from '@chakra-ui/react';
import Paragraph from "@components/Paragraph/Paragraph";
import {BiPhoneCall} from "react-icons/bi";
import SocialButton from "@components/SocialButton/SocialButton";
import {resume} from "../../constants";
import Link from 'next/link';
import SpotifySection from "../SpotifySection/SpotifySection";
import Typed from 'typed.js';
import {gaEvents} from '../../utils/gaEvents';

const ProfileSection = ({song}:any) => {

	const el = useRef<HTMLSpanElement>(null);
	useEffect(()=>{
		const options:object = {
			strings:['Hey, I am Anthony Fink!'],
			typeSpeed: 30,
			backSpeed: 60,
			backDelay: 150,
			shuffle: true,
			smartBackspace: true,
			loop: true,
		}
		// @ts-ignore
		const typed = new Typed(el?.current, options);

		return () => {
			typed.destroy();
		}
	},[])
	return (
		<SlideFade in offsetX={80}>
			<Box>
				<Flex alignItems="center" justifyContent="space-between">
					<Heading
						as="h1"
						fontSize={{ base: '28px', md: '40px', lg: '48px' }}
						mb={3}
					>
						<span ref={el}></span><span className="waving-hand">👋</span>
					</Heading>
					<Flex alignItems={"flex-end"}>
						<Avatar
							name="Anthony Fink"
							src="/profile.png"
							mb={5}
							size='2xl'
						/>
					</Flex>
				</Flex>
				<Paragraph fontSize="2xl" lineHeight={1.6}>
					Full Stack Web Developer from Israel 🇮🇱
				</Paragraph>
				<Paragraph fontSize="2xl" lineHeight={1.6}>
					Focused on {" "}
					<LinkChakra color={useColorModeValue("blue.500", "blue.400")} href="https://reactjs.org/" fontWeight="500" isExternal>
						React Js,
					</LinkChakra>{" "}
					<LinkChakra color={useColorModeValue("blue.500", "blue.400")} href="https://nodejs.org/en/" fontWeight="500" isExternal>
						Node Js,
					</LinkChakra>{" "}
					<LinkChakra color={useColorModeValue("blue.500", "blue.400")} href="https://www.typescriptlang.org/" fontWeight="500" isExternal>
						Type Script
					</LinkChakra>.
					{"\n"}Passion in beautiful UI / UX {" "}
					🔥
				</Paragraph>

				<Box mt={5}>
					<LightMode>
						<ButtonGroup>

							<SocialButton
								social={resume}
							/>

							<Link href={'/contact'} style={{ textDecoration: 'none' }}>
								<Button
									colorScheme="blue"
									size='sm'
									margin={'5px'}
									leftIcon={<BiPhoneCall color='white'/>}
									onClick={gaEvents.eventContactClick}
								>
									Contact Me
								</Button>
							</Link>
						</ButtonGroup>

					</LightMode>
				</Box>

				<SpotifySection song={song}/>
			</Box>
		</SlideFade>
	);
};

export default ProfileSection;
