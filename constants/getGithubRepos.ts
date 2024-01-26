import axios from "axios";

const getGithubRepos = async () => {
	try{
		const res = await axios.get(`https://api.github.com/users/psytonik/repos`);
		let repos = res.data;
		return repos?.sort((a: { stargazers_count: number; }, b: { stargazers_count: number; }) => b.stargazers_count - a.stargazers_count).slice(0, 12);
	} catch (err) {
		console.log(err);
	}
}
export default getGithubRepos;
