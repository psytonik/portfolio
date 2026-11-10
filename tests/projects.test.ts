import {describe, expect, it} from 'vitest';
import {existsSync} from 'fs';
import {join} from 'path';
import {projects} from '../constants/projects';
import {companies, educations, menuLinks, techStacks} from '../constants';

describe('project data', () => {
	it('has no duplicate entries', () => {
		const urls = projects.map((project) => project.url);
		expect(new Set(urls).size).toBe(urls.length);
	});

	it('points every cover image at a file that exists', () => {
		for (const project of projects) {
			expect(existsSync(join(process.cwd(), 'public', project.image))).toBe(true);
		}
	});

	it('gives every project an accessible alt text and at least one tag', () => {
		for (const project of projects) {
			expect(project.alt.length).toBeGreaterThan(0);
			expect(project.tags.length).toBeGreaterThan(0);
		}
	});
});

describe('site data', () => {
	it('points logos and the tech stack at real files and absolute URLs', () => {
		for (const item of [...companies, ...educations]) {
			expect(existsSync(join(process.cwd(), 'public', item.logo))).toBe(true);
		}
		for (const stack of techStacks) {
			expect(stack.url).toMatch(/^https:\/\//);
		}
	});

	it('uses internal routes for the menu', () => {
		for (const link of menuLinks) {
			expect(link.route.startsWith('/')).toBe(true);
		}
	});
});
