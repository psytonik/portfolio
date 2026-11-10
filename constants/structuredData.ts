import {siteConfig, techStacks} from './index';
import {projects} from './projects';

/**
 * JSON-LD for the home page: who the site is about, and the site itself.
 * Only real, verifiable data goes in here.
 */
export const buildHomeJsonLd = () => ({
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Person',
			'@id': `${siteConfig.url}/#person`,
			name: siteConfig.author.name,
			url: siteConfig.url,
			image: `${siteConfig.url}/profile.png`,
			jobTitle: 'Full Stack Web Developer',
			email: `mailto:${siteConfig.email}`,
			address: {
				'@type': 'PostalAddress',
				addressCountry: 'IL',
			},
			knowsAbout: [
				...techStacks.map((stack) => stack.name),
				'Artificial Intelligence',
				'AI integration',
				'Large language models',
			],
			sameAs: siteConfig.author.accounts
				.filter((account) => !account.url.startsWith('mailto:'))
				.map((account) => account.url),
		},
		{
			'@type': 'WebSite',
			'@id': `${siteConfig.url}/#website`,
			url: siteConfig.url,
			name: siteConfig.title,
			description: siteConfig.description,
			inLanguage: 'en',
			publisher: {'@id': `${siteConfig.url}/#person`},
		},
	],
});

/** JSON-LD for the projects page: the work itself, credited to the person. */
export const buildProjectsJsonLd = () => ({
	'@context': 'https://schema.org',
	'@type': 'CollectionPage',
	'@id': `${siteConfig.url}/portfolio#webpage`,
	url: `${siteConfig.url}/portfolio`,
	name: 'Projects',
	isPartOf: {'@id': `${siteConfig.url}/#website`},
	about: {'@id': `${siteConfig.url}/#person`},
	mainEntity: {
		'@type': 'ItemList',
		itemListElement: projects.map((project, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'CreativeWork',
				name: project.title,
				url: project.url,
				description: project.summary,
				image: `${siteConfig.url}${project.image}`,
				creator: {'@id': `${siteConfig.url}/#person`},
			},
		})),
	},
});

/** JSON-LD for the about page. */
export const buildAboutJsonLd = () => ({
	'@context': 'https://schema.org',
	'@type': 'ProfilePage',
	'@id': `${siteConfig.url}/about#webpage`,
	url: `${siteConfig.url}/about`,
	name: 'About',
	isPartOf: {'@id': `${siteConfig.url}/#website`},
	mainEntity: {'@id': `${siteConfig.url}/#person`},
});

/** JSON-LD for the contact page. */
export const buildContactJsonLd = () => ({
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	'@id': `${siteConfig.url}/contact#webpage`,
	url: `${siteConfig.url}/contact`,
	name: 'Contact',
	isPartOf: {'@id': `${siteConfig.url}/#website`},
	about: {'@id': `${siteConfig.url}/#person`},
});
