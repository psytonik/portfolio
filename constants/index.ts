import {
	FaLinkedin,
	FaGithub,
	FaGitAlt,
	FaJs,
	FaNodeJs,
	FaAngular
} from "react-icons/fa";
import { SiGmail, SiNestjs, SiReact, SiTypescript} from 'react-icons/si';
import {TbBrandNextjs} from "react-icons/tb";
import {CgAlbum} from "react-icons/cg";

const menuLinks = [
	{ name: "About Me", route: "/about" },
	{ name: 'Github', route: '/github' },
	{ name: "Portfolio", route: "/portfolio" },
	{ name: "Contact", route: "/contact" },
]

const siteConfig = {
	copyright: `© ${new Date().getFullYear()} Anthony Fink.`,
	author: {
		name: "Anthony Fink",
		accounts: [
			{
				url: "https://github.com/psytonik",
				icon: FaGithub,
				name: "Github",
				type: "gray"
			},
			{
				url: "https://linkedin.com/in/anthony-fink/",
				icon: FaLinkedin,
				name: "Linkedin",
				type: "linkedin"
			},
			{
				url: "mailto:anthonyfink1985@gmail.com",
				icon: SiGmail,
				name: "Gmail",
				type: "red"
			}
		]
	}
}

const resume = {
	url: "/CV_AnthonyFink.pdf",
	icon: CgAlbum,
	name: "Resume"
}

const techStacks = [
	{
		name: "React",
		icon: SiReact,
		url: "https://reactjs.org/",
	},
	{
		name: "Angular",
		icon: FaAngular,
		url: "https://angular.io/",
	},
	{
		name: "Next Js",
		icon: TbBrandNextjs,
		url: "https://nextjs.org/",
	},
	{
		name: "NodeJs",
		icon:FaNodeJs,
		url: "https://nodejs.org/"
	},
	{
		name: "Nest Js",
		icon: SiNestjs,
		url: "https://nestjs.com/",
	},
	{
		name: "TypeScript",
		icon:SiTypescript,
		url:"https://www.typescriptlang.org/"
	},
	{
		name: "JavaScript",
		icon: FaJs,
		url: "https://www.javascript.com/",
	},
	{
		name: "Github",
		icon: FaGitAlt,
		url: "https://www.github.com/",
	},
];

const companies = [
	{
		title: "Testo Pay Affiliate Program",
		alt: "testopay image",
		url: 'https://google.com',
		role: "Full Stack Web Developer",
		skills: ["React Js","TypeScript","Node Js","Redux","Material Ui","NoSQL"],
		period: "Aug 2020 - Present",
		logo: '/testopay.png'
	},
	{
		title: "Dimension Booking",
		alt: "dimension image",
		url: "https://google.com",
		role: "Full Stack Developer: Developing application for Booking DJ’s",
		skills: ["Node JS", "React Js", "Redux", "JavaScript", "Html","Css3","Bootstrap","Stripe Api","SQL"],
		period: "Mar 2021 - Nov 2021",
		logo: '/dimension.svg'
	}
]

const educations = [
	{
		title: "John Bryce College Israel",
		alt: "jb image",
		url: 'https://www.johnbryce.co.il/',
		role: "CERTIFICATE - Full Stack Web Developer",
		skills: ["Java Script", "Html", "Css3", "Sql","Object Oriented Programming","Functional Programming"],
		period: "Jan 2018 - Jan 2019",
		logo: '/jb.png'
	}
]

export {menuLinks,siteConfig,techStacks,companies,educations,resume}
