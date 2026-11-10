import React from 'react';
import Head from 'next/head';
import {siteConfig} from '../../constants';

interface SeoProps {
	title?: string;
	description?: string;
	path?: string;
	/** Schema.org graph for this page, rendered as JSON-LD. */
	jsonLd?: object;
}

const Seo: React.FC<SeoProps> = ({title, description = siteConfig.description, path = '/', jsonLd}) => {
	const fullTitle = title ? `${title} | ${siteConfig.author.name}` : siteConfig.title;
	const url = `${siteConfig.url}${path === '/' ? '' : path}`;

	return (
		<Head>
			<title>{fullTitle}</title>
			<meta name="description" content={description}/>
			<link rel="canonical" href={url}/>

			<meta property="og:type" content="website"/>
			<meta property="og:site_name" content={siteConfig.author.name}/>
			<meta property="og:url" content={url}/>
			<meta property="og:title" content={fullTitle}/>
			<meta property="og:description" content={description}/>
			<meta property="og:image" content={siteConfig.ogImage}/>

			<meta name="twitter:card" content="summary_large_image"/>
			<meta name="twitter:title" content={fullTitle}/>
			<meta name="twitter:description" content={description}/>
			<meta name="twitter:image" content={siteConfig.ogImage}/>

			{jsonLd && (
				<script
					type="application/ld+json"
					// Built from our own constants, never from user input
					dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
				/>
			)}
		</Head>
	);
};

export default Seo;
