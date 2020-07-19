/* globals Docute */

new Docute({
	title: 'Blog',
	target: '#docute',
	sourcePath: './docs/',
	nav: [
		{
			title: 'Javascript基础',
			link: '/'
		},
		{
			title: 'About',
			link: '/about'
		}
	],
	sidebar: [
		{
			title: 'Guide',
			links: [
				{
					title: 'Introduction',
					link: '/introduction'
				},
				{
					title: 'Installation',
					link: '/installation'
				}
			]
		}
	]
})
