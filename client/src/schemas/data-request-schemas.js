export const ua_data_request = [
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

export const alert_data_request = {
	path: '/0/omni-api/eslog',
	payload: {
		filters: [
			{
				date_range: {
					field: 'created_time',
					from: '2024-01-17T00:00:00.000+01:00',
					to: '2024-02-16T00:00:00.000+01:00',
				},
			},
			{
				term: {
					field: 'alert_id',
					values: [51],
				},
			},
			{
				term: {
					field: 'result',
					values: ['ok'],
				},
			},
		],
		target: [
			{
				metric: 'doc_count',
				field: 'result',
			},
		],
		dimensions: [
			{
				type: 'date_range',
				field: 'created_time',
				aggregation: 'day',
			},
		],
		options: {
			size: 100,
			eslog_index: 'omni-alert-log',
			eslog_datasource: 'es2',
		},
	},
}
