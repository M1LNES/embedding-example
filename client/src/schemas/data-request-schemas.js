export const alert_data_request = [
	{
		path: '/0/dev~omni-api/crossplatform-profile',
		payload: {
			accountId: '172196',
			userId: '213866',
			options: {
				auth: true,
			},
			target: [
				{
					metric: 'fans_lifetime',
					aggregation: 'sum',
				},
			],
			filters: [
				{
					date: {
						timeFrom: '2024-01-16T00:00:00.000Z',
						timeTo: '2024-02-14T23:59:59.999Z',
					},
				},
				{
					profile: {
						values: [
							{
								id: '164929129743',
								platform: 'facebook',
							},
						],
					},
				},
			],
			dimensions: [],
		},
	},
	{
		path: '/0/dev~omni-api/crossplatform-profile',
		payload: {
			accountId: '172196',
			userId: '213866',
			options: {
				auth: true,
			},
			target: [
				{
					metric: 'fans_lifetime',
					aggregation: 'sum',
				},
			],
			filters: [
				{
					date: {
						timeFrom: '2023-12-17T00:00:00.000Z',
						timeTo: '2024-01-15T23:59:59.999Z',
					},
				},
				{
					profile: {
						values: [
							{
								id: '164929129743',
								platform: 'facebook',
							},
						],
					},
				},
			],
			dimensions: [],
		},
	},
]
