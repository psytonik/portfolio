import {describe, expect, it} from 'vitest';
import {buildHomeJsonLd, buildProjectsJsonLd} from '../constants/structuredData';
import {siteConfig} from '../constants';
import {projects} from '../constants/projects';

describe('home JSON-LD', () => {
	const graph = buildHomeJsonLd()['@graph'];
	const person = graph.find((node) => node['@type'] === 'Person') as Record<string, unknown>;
	const website = graph.find((node) => node['@type'] === 'WebSite') as Record<string, unknown>;

	it('describes the person with absolute URLs', () => {
		expect(person.name).toBe(siteConfig.author.name);
		expect(person.url).toMatch(/^https:\/\//);
		expect(person.image).toMatch(/^https:\/\//);
	});

	it('lists social profiles and leaves the mailto link out of sameAs', () => {
		const sameAs = person.sameAs as string[];
		expect(sameAs.length).toBeGreaterThan(0);
		expect(sameAs.every((url) => url.startsWith('https://'))).toBe(true);
	});

	it('links the website back to the person', () => {
		expect(website.publisher).toEqual({'@id': `${siteConfig.url}/#person`});
	});
});

describe('projects JSON-LD', () => {
	const jsonLd = buildProjectsJsonLd();
	interface ListEntry {
		position: number;
		item: {url: string; image: string};
	}
	const items = (jsonLd.mainEntity.itemListElement ?? []) as ListEntry[];

	it('lists every project in order', () => {
		expect(items).toHaveLength(projects.length);
		expect(items.map((entry) => entry.position)).toEqual(projects.map((_, index) => index + 1));
	});

	it('gives each project an absolute image URL', () => {
		for (const entry of items) {
			expect(entry.item.image).toMatch(/^https:\/\//);
			expect(entry.item.url).toMatch(/^https:\/\//);
		}
	});
});
