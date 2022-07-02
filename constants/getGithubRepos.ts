import axios from "axios";

const getGithubRepos = async ({username}:any) => {
	try{
		const res = await axios.get(`https://api.github.com/users/${username}/repos`);
		let repos = res.data;
		return repos?.sort((a: { stargazers_count: number; }, b: { stargazers_count: number; }) => b.stargazers_count - a.stargazers_count).slice(0, 10);

	} catch (err) {
		console.log(err);
	}
}
export default getGithubRepos;
