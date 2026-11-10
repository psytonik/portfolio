import {IconType} from 'react-icons';
import {TbRobot, TbRoute, TbTerminal2} from 'react-icons/tb';

export interface AiCapability {
	title: string;
	description: string;
	icon: IconType;
	/** Optional proof: a live product that demonstrates the claim. */
	link?: {label: string; url: string};
}

export const aiCapabilities: AiCapability[] = [
	{
		title: 'AI features in production',
		description:
			'Traveller, my own product, plans walking routes with AI, timed around opening hours and daylight, and replans them on the go. I built the whole pipeline: prompts, output validation, route optimization, caching and cost controls. Live on web, iOS and Android.',
		icon: TbRoute,
		link: {label: 'See it in Traveller', url: 'https://travellerapp.org/'},
	},
	{
		title: 'AI integration for clients',
		description:
			'I take AI features from idea to production: picking the right model for the job, designing the prompts, and handling the streaming, failure and cost behaviour that keeps them usable at scale.',
		icon: TbRobot,
	},
	{
		title: 'Agent-assisted development',
		description:
			'I work with coding agents such as Claude Code every day, and treat their output the way I treat my own: reviewed, typed, tested and shipped. This site is built that way.',
		icon: TbTerminal2,
	},
];
