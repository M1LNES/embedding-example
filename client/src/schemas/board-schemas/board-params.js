export const chart1Params = [
	{
		value: 'P30D/now[sD]',
		name: 'daterange',
		type: 'daterange',
	},
	{
		value: '172196',
		name: 'acl_account_id',
		type: 'string',
	},
	{
		value: '213866',
		name: 'user_acl_id',
		type: 'string',
	},
	{
		value: [
			{
				value: '164929129743',
				title: 'Emplifi',
				picture:
					'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1/355016801_661576652675049_7066463062716805627_n.png?stp=dst-png_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=4da83f&_nc_ohc=h8NnYtetBjIAX-2WJoE&_nc_ht=scontent-sjc3-1.xx&edm=AJdBtusEAAAA&oh=00_AfA21So1OPvnrPQHuIRBXUDKO4aEqubkjbAzYDVyh07i9w&oe=65DD8866',
				link: 'https://www.facebook.com/Emplifi',
				network: 'facebook',
				screenName: 'Emplifi',
			},
		],
		name: 'fbProfiles',
		type: 'array',
	},
]

export const charListeningParams = [
	{
		value: 'P30D/now',
		name: 'daterange',
		type: 'daterange',
	},
	{
		value: 'Europe/Prague',
		name: 'userTimezone',
		type: 'string',
	},
	{
		value: [
			{
				value: 'LNQ_172196_64de627a6b3f096777cfb00b',
				title: 'cz sk pro spike',
				status: 'topic_custom_mention_limit',
			},
		],
		name: 'listeningQueries',
		type: 'array',
	},
]
