/* globals Docute */

new Docute({
	title: "Li's Blog",
	darkThemeToggler: true,
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
			title: '基本概念',
			links: [
				{
					title: '数据类型',
					link: '/basicConcept/typeOfData'
				},
				{
					title: '操作符',
					link: '/basicConcept/operator'
				}
			],
			TOC: true
		}
	]
})
