import type {GetServerSideProps} from 'next';
import {siteConfig} from '../constants';

// Keep in sync with the routes under pages/
const routes = [
	{path: '/', priority: '1.0'},
	{path: '/about', priority: '0.8'},
	{path: '/portfolio', priority: '0.8'},
	{path: '/github', priority: '0.6'},
	{path: '/contact', priority: '0.6'},
];

const buildSitemap = (): string => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		({path, priority}) => `	<url>
		<loc>${siteConfig.url}${path === '/' ? '' : path}</loc>
		<changefreq>monthly</changefreq>
		<priority>${priority}</priority>
	</url>`,
	)
	.join('\n')}
</urlset>`;

export const getServerSideProps: GetServerSideProps = async ({res}) => {
	res.setHeader('Content-Type', 'application/xml');
	res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
	res.write(buildSitemap());
	res.end();
	return {props: {}};
};

// Never rendered: getServerSideProps writes the response directly.
export default function Sitemap() {
	return null;
}
