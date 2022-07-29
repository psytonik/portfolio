import React from 'react';
import {MotionBox} from "../../utils/motionBox";
import {
	Flex,
	Heading,
	HStack,
	LinkBox,
	LinkOverlay,
	useColorModeValue,
	Text,
	VStack,
	Image } from "@chakra-ui/react";
import {SiSpotify} from "react-icons/si";
import Paragraph from "../../components/Paragraph/Paragraph";

const SpotifySection = ({ song }:any) => {
	console.log(song);
	return (
		<MotionBox whileHover={{ y: -5 }} mt={5}>
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
				// href={song?.isPlaying && song.songUrl}
			>
				<LinkOverlay
					href={song?.isPlaying ? song?.songUrl : undefined}
					rel="noopener"
					isExternal
				>
					<VStack>
						<HStack alignSelf={{ base: 'center', md: 'flex-start' }} mb={2}>
							<SiSpotify size={20} color={'#1ED760'} className='rotating' />
							<Text>Spotify</Text>
						</HStack>

						<Flex
							alignItems="center"
							justifyContent="space-around"
							direction={['column', 'column', 'row', 'row']}
						>
							{song?.isPlaying ?
								<Image
									margin="auto"
									src={song?.albumImageUrl}
									alt={song?.album}
									objectFit={'cover'}
									boxSize={['100px', '100px', '100px', '100px']}
									fallback={<SiSpotify size={20} color={'#1ED760'} />}
								/>
								:
								<SiSpotify size={100} color={'#1ED760'} />
							}

							<Flex flexDirection="column" ml={[0, 0, 5, 5]} mt={[5, 5, 0, 0]}>

								<Heading as="h2" fontSize="lg" fontWeight="600" color={"blue.400"} alignSelf={['center', 'flex-start']}>
									{song?.isPlaying ? song?.title : 'Not Listening'}
								</Heading>

								<Paragraph mt={'5px'} alignSelf={['center', 'center', 'flex-start', 'flex-start']}>
									{song?.isPlaying ? song?.artist : 'Spotify'}
								</Paragraph>

							</Flex>

						</Flex>
					</VStack>
				</LinkOverlay>


			</LinkBox>
		</MotionBox>
	);
};

export default SpotifySection;
