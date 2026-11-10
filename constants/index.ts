import {
	FaLinkedin,
	FaGithub,
	FaGitAlt,
	FaJs,
	FaNodeJs,
	FaAngular
} from "react-icons/fa";
import {SiExpo, SiGmail, SiNestjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript, SiVercel} from 'react-icons/si';
import {TbBrandNextjs} from "react-icons/tb";

const menuLinks = [
	{name: "About", route: "/about"},
	{name: "Projects", route: "/portfolio"},
	{name: "GitHub", route: "/github"},
	{name: "Contact", route: "/contact"},
]

const siteConfig = {
	url: "https://anthonyfink.dev",
	title: "Anthony Fink | Full Stack Web Developer",
	description: "Full Stack Web Developer from Israel. I build web products end to end with React, Node.js and TypeScript, and ship AI features to real users.",
	ogImage: "https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/anthonyfink.dev/Anthony%20Fink%20%7C%20Full%20Stack%20Web%20Developer/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F5d1c467f-d464-4950-832a-535389bd85b2.png%3Ftoken%3DeMS2h3LuCP-yWNFNavE37SRx0uCWuxLsHqOCQAhwWpk%26height%3D910%26width%3D885%26expires%3D33242278201/og.png",
	copyright: `© ${new Date().getFullYear()} Anthony Fink.`,
	email: "anthonyfink1985@gmail.com",
	author: {
		name: "Anthony Fink",
		accounts: [
			{
				url: "https://github.com/psytonik",
				icon: FaGithub,
				name: "GitHub",
				handle: "psytonik",
			},
			{
				url: "https://linkedin.com/in/anthony-fink/",
				icon: FaLinkedin,
				name: "LinkedIn",
				handle: "anthony-fink",
			},
			{
				url: "mailto:anthonyfink1985@gmail.com",
				icon: SiGmail,
				name: "Email",
				handle: "anthonyfink1985@gmail.com",
			}
		]
	}
}

const resume = {
	url: "/CV_AnthonyFink.pdf",
	name: "Resume"
}

const techStacks = [
	{
		name: "React",
		icon: SiReact,
		url: "https://react.dev/",
	},
	{
		name: "Angular",
		icon: FaAngular,
		url: "https://angular.dev/",
	},
	{
		name: "Next.js",
		icon: TbBrandNextjs,
		url: "https://nextjs.org/",
	},
	{
		name: "Node.js",
		icon: FaNodeJs,
		url: "https://nodejs.org/"
	},
	{
		name: "NestJS",
		icon: SiNestjs,
		url: "https://nestjs.com/",
	},
	{
		name: "TypeScript",
		icon: SiTypescript,
		url: "https://www.typescriptlang.org/"
	},
	{
		name: "JavaScript",
		icon: FaJs,
		url: "https://developer.mozilla.org/docs/Web/JavaScript",
	},
	{
		name: "Expo",
		icon: SiExpo,
		url: "https://expo.dev/",
	},
	{
		name: "PostgreSQL",
		icon: SiPostgresql,
		url: "https://www.postgresql.org/",
	},
	{
		name: "Tailwind CSS",
		icon: SiTailwindcss,
		url: "https://tailwindcss.com/",
	},
	{
		name: "Vercel",
		icon: SiVercel,
		url: "https://vercel.com/",
	},
	{
		name: "Git",
		icon: FaGitAlt,
		url: "https://git-scm.com/",
	},
];

export interface Experience {
	title: string;
	alt: string;
	/** Optional link to the company or school site. */
	url?: string;
	role: string;
	skills: string[];
	period: string;
	logo: string;
	/** Concrete achievements, shown as a bullet list. */
	highlights?: string[];
	/** Extra links, e.g. app store pages. */
	links?: {label: string; url: string}[];
}

const companies: Experience[] = [
	{
		title: "Traveller: AI walking-route planner",
		alt: "Traveller logo",
		url: 'https://travellerapp.org/',
		role: "Founder & Full-Stack Engineer. Built and launched solo: native iOS and Android apps plus a web app, live in the App Store and Google Play, with paid subscriptions",
		highlights: [
			"Designed a TypeScript monorepo: an Express API with clean architecture (controllers, services, repositories), Prisma and PostgreSQL, Redis, and a shared types package used by the API, web and mobile apps.",
			"Built the AI route-generation pipeline: LLM prompts, output validation, route optimization, caching and cost controls, with graceful handling of empty results.",
			"Shipped a cross-platform mobile app on Expo and React Native to both stores, including store review, release cadence and over-the-air updates with EAS Update.",
			"Integrated paid subscriptions on web and mobile through third-party payment providers, with server-side entitlement sync.",
			"Built the React, Vite and Tailwind web app with Leaflet maps, localized in 9 languages, plus a marketing site with SEO and URL-routed i18n.",
			"Run CI/CD and hosting on Vercel and Railway with a staging environment, Sentry monitoring and an admin panel for support and analytics. Own SEO, content and growth.",
		],
		links: [
			{label: "App Store", url: "https://apps.apple.com/app/traveller-ai-route-planner/id6796854703"},
			{label: "Google Play", url: "https://play.google.com/store/apps/details?id=org.travellerapp.mobile"},
			{label: "travellerapp.org", url: "https://travellerapp.org/"},
		],
		skills: ["TypeScript", "React", "React Native", "Expo", "Node.js", "PostgreSQL", "Redis", "LLM APIs", "Subscriptions", "Vercel"],
		period: "2026 - Present",
		logo: '/traveller-icon.svg'
	},
	{
		title: "GigCalm: booking platform for performing artists",
		alt: "GigCalm logo",
		url: 'https://gigcalm.com/',
		role: "Founder & Full-Stack Engineer. Designed and built the whole platform: a NestJS API and two Next.js apps (public marketplace and artist studio) in one monorepo",
		highlights: [
			"Architected a feature-based NestJS modular monolith with PostgreSQL and Redis: JWT access and refresh auth with Redis-backed sessions, global role-based guards, Redis rate limiting, DTO validation and response serialization, and 36 TypeORM migrations with synchronize turned off.",
			"Eliminated double-booking at the database level with a PostgreSQL exclusion constraint (gist over staff and time range) and handling of the violation error, instead of check-then-insert, so concurrent requests cannot take the same slot.",
			"Wrote the availability engine as a pure, framework-free function: working hours, overrides, buffers, a 15-minute grid, overnight shifts and per-business IANA time zones, unit-tested in isolation.",
			"Built reliable email delivery with a transactional outbox and a BullMQ worker with retry and backoff, so notifications survive Redis or SMTP outages.",
			"Protected personal data with AES-256-GCM field encryption, and secured single sign-in across the main site and the studio with a shared-domain cookie and open-redirect checks.",
			"Built two Next.js 16 / React 19 / Tailwind 4 apps localized in Hebrew (RTL), English, French and Russian. Tested with Jest and Playwright (including mobile viewports), with a pre-push hook and GitHub Actions, and deployed on Railway and Vercel.",
		],
		links: [
			{label: "gigcalm.com", url: "https://gigcalm.com/"},
		],
		skills: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Redis", "BullMQ", "Tailwind CSS", "Playwright"],
		period: "Present",
		logo: '/gigcalm-icon.png'
	},
	{
		title: "Testo Pay Affiliate Program",
		alt: "Testo Pay logo",
		role: "Full Stack Web Developer",
		skills: ["React", "TypeScript", "Node.js", "Redux", "Material UI", "NoSQL"],
		period: "Aug 2020 - 2026",
		logo: '/testopay.png'
	},
	{
		title: "Dimension Booking",
		alt: "Dimension Booking logo",
		role: "Full Stack Developer, building a booking application for DJs",
		skills: ["Node.js", "React", "Redux", "JavaScript", "HTML", "CSS", "Bootstrap", "Stripe API", "SQL"],
		period: "Mar 2021 - Nov 2021",
		logo: '/dimension.svg'
	}
]

const educations: Experience[] = [
	{
		title: "John Bryce College Israel",
		alt: "John Bryce College logo",
		url: 'https://www.johnbryce.co.il/',
		role: "Certificate, Full Stack Web Developer",
		skills: ["JavaScript", "HTML", "CSS", "SQL", "Object-Oriented Programming", "Functional Programming"],
		period: "Jan 2018 - Jan 2019",
		logo: '/jb.png'
	}
]

export {menuLinks, siteConfig, techStacks, companies, educations, resume}
