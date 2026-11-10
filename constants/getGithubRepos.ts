export interface GithubRepo {
	name: string;
	description: string | null;
	language: string | null;
	html_url: string;
	stargazers_count: number;
	forks_count: number;
}

const getGithubRepos = async (): Promise<GithubRepo[]> => {
	try {
		const res = await fetch('https://api.github.com/users/psytonik/repos?per_page=100');
		if (!res.ok) {
			throw new Error(`GitHub API responded with ${res.status}`);
		}
		const repos: GithubRepo[] = await res.json();
		return repos
			.sort((a, b) => b.stargazers_count - a.stargazers_count)
			.slice(0, 12)
			.map(({name, description, language, html_url, stargazers_count, forks_count}) => ({
				name, description, language, html_url, stargazers_count, forks_count,
			}));
	} catch (err) {
		console.error(err);
		return [];
	}
}
export default getGithubRepos;
