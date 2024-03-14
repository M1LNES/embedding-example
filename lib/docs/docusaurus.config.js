// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Docs',
	tagline: 'Dinosaurs are cool',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://your-docusaurus-site.example.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: './sidebars.js',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},

				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			image: 'img/emplifi.png',
			navbar: {
				title: 'Docs',
				logo: {
					alt: 'My Site Logo',
					src: 'img/emplifi.png',
				},
				items: [
					{
						label: 'Code on GitLab (prototype)',
						position: 'left',
						href: 'https://git.ccl/x/embedded-screen-prototype',
					},
					// {
					// 	label: 'Examples',
					// 	position: 'left',
					// 	to: '/examples',
					// },
					{
						href: 'https://web-dev-embedded-screen-prototype-x.eks-prod.us-w2.aws.ccl/playground',
						label: 'Playground',
						position: 'right',
					},
				],
			},

			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
}

export default config
