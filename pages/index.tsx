import type {NextPage} from 'next';
import useSWR from "swr";
import {Box, Stack} from "@chakra-ui/react";
import Seo from "@components/Seo/Seo";
import {buildHomeJsonLd} from "../constants/structuredData";
import Page from "@components/Page/Page";
import ProfileSection from "../section/ProfileSection/ProfileSection";
import ProjectsSection from "../section/ProjectsSection/ProjectsSection";
import AiSection from "../section/AiSection/AiSection";
import TechStackSection from "../section/TechStackSection/TechStackSection";
import HackSection, {IpInfo} from "../section/HackSection/HackSection";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Home: NextPage = () => {
	const {data: ipInfo} = useSWR<IpInfo>('https://api.db-ip.com/v2/free/self', fetcher);

	return (
		<>
			<Seo jsonLd={buildHomeJsonLd()}/>
			<Page>
				<Stack spacing={{base: 14, md: 20}}>
					<ProfileSection/>
					<ProjectsSection featured={3}/>
					<AiSection/>
					<TechStackSection/>
					{ipInfo?.ipAddress && (
						<Box maxW={{md: 'calc(50% - 8px)'}}>
							<HackSection hack={ipInfo}/>
						</Box>
					)}
				</Stack>
			</Page>
		</>
	);
};

export default Home;
