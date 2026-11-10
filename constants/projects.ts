export interface Project {
	title: string;
	url: string;
	image: string;
	alt: string;
	summary: string;
	highlights: string[];
	tags: string[];
}

export const projects: Project[] = [
	{
		title: "GigCalm",
		url: "https://gigcalm.com/",
		image: "/projects/gigcalm.jpg",
		alt: "GigCalm – booking marketplace for DJs, musicians, bands and singers",
		summary:
			"A marketplace for booking live music directly. Every artist gets a page with real services, durations and prices, and clients book an open slot straight from the artist's calendar – no agents and no quote forms.",
		highlights: [
			"Artist pages for DJs, musicians, bands and singers",
			"Calendar-based booking that goes straight to the artist",
			"Separate studio app for artists to manage their page",
			"Available in Hebrew, English, French and Russian",
		],
		tags: ["Next.js", "Marketplace", "Booking", "i18n"],
	},
	{
		title: "Traveller",
		url: "https://travellerapp.org/",
		image: "/projects/traveller.jpg",
		alt: "Traveller – AI walking route planner for any city",
		summary:
			"My own product: an AI walking-route planner. Pick a city, a time window and your interests, and Traveller builds a route timed to opening hours and daylight, then guides you stop by stop on GPS. Built and launched solo.",
		highlights: [
			"Native iOS and Android apps plus a web app, live in both stores",
			"AI route pipeline with validation, caching and cost controls",
			"Paid subscriptions on web and mobile",
			"Works offline, with export to Google Maps and GPX",
		],
		tags: ["Expo", "React Native", "TypeScript", "Node.js", "PostgreSQL", "AI"],
	},
	{
		title: "AFink Video",
		url: "https://afink.video/",
		image: "/projects/afink-video.jpg",
		alt: "Anthony Fink – video cinematographer portfolio",
		summary:
			"My cinematography portfolio: commercials, music videos and fashion films shot in Tel Aviv, presented as a grid of selected works with full-screen playback.",
		highlights: [
			"Selected-works grid with full-screen viewing",
			"Hebrew and English versions",
			"Direct contact by WhatsApp and email",
		],
		tags: ["Next.js", "Video", "Portfolio", "i18n"],
	},
	{
		title: "DJ PsyToniK",
		url: "https://psytonik.dj",
		image: "/projects/psytonik-dj.jpg",
		alt: "DJ PsyToniK website",
		summary:
			"A DJ portfolio site that pulls mixes from the Mixcloud API, so the catalogue stays current without manual updates, with a contact form for bookings.",
		highlights: [
			"Mixes loaded live from the Mixcloud API",
			"Booking and contact form via EmailJS",
		],
		tags: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
	},
];
