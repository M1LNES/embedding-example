export const visionMock = {
	config: {
		hammer: {
			type: 'evolution_stacked_bar',
			config: {
				title: 'Impressions trend',
				daterange: 'daterange',
				metric: {
					name: 'Content impressions',
				},
				dimension0: {
					title: 'Date',
					field: 'dim0',
				},
				dimension1: {
					title: 'Platform',
					field: 'dim1',
					mapping: '{{organic.dimension.platform.mapping}}',
					colorMapping: '{{organic.dimension.platform.colorMapping}}',
				},
				fill: '#1877F2',
				tooltip:
					'An overview of the number of times a content piece published during the selected date range was viewed during its lifetime, or of video views where impressions do not apply. Data is segregated by publication date. This metric does not count user-generated content.',
				badges: [
					{
						title: 'Post Level',
						tooltip:
							'Post-level metrics show data for posts published during a selected date range. Regardless of when an engagement happened, all post data is aggregated and displayed for the day the post was published. This means it can include data about engagement that occurred even after the selected date range.',
					},
				],
				ticksAxisX: 10,
				useAggregationFormatters: true,
				manualDateBucket: true,
			},
		},
		header: {
			title: 'Impressions trend',
			subtitle: 'P30D/now[sD] • Aggregated by day',
			tooltip:
				'An overview of the number of times a content piece published during the selected date range was viewed during its lifetime, or of video views where impressions do not apply. Data is segregated by publication date. This metric does not count user-generated content.',
			badges: [
				{
					title: 'Post Level',
					tooltip:
						'Post-level metrics show data for posts published during a selected date range. Regardless of when an engagement happened, all post data is aggregated and displayed for the day the post was published. This means it can include data about engagement that occurred even after the selected date range.',
				},
			],
		},
		container: {
			padding: '0px',
			visionPadding: '12px',
		},
		vision: {
			data: [
				{
					name: 'root',
					format: 'omni-full',
					transform: [
						{
							type: 'parse',
							field: 'dim0',
							as: 'datetime',
						},
					],
					source: '$input',
				},
				{
					name: 'stacked',
					format: 'set',
					transform: [
						{
							type: 'filter',
							predicate: "datum['value'] != 0 && datum['value'] != null",
						},
						{
							type: 'map',
							as: 'dim1',
							expr: '{"facebook":"Facebook","instagram":"Instagram","linkedin":"LinkedIn","pinterest":"Pinterest","snapchat":"Snapchat","tiktok":"TikTok","twitter":"Twitter","youtube":"YouTube"}[datum[\'dim1\']] || datum[\'dim1\']',
						},
						{
							type: 'stack',
							field: 'value',
							groupBy: ['dim0'],
						},
					],
					source: 'root',
				},
			],
			formats: [
				{
					name: 'y',
					type: 'expr',
					expr: "(isNaN(value) || value === null) ? 'N/A' : ( value < 10000 ? ((new Intl.NumberFormat('en-US', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(',', ' ') : (new Intl.NumberFormat('en-US', {notation: 'compact',maximumFractionDigits: 2})).format(value))",
				},
				{
					type: 'number',
					name: 'axisY',
					options: {
						notation: 'compact',
					},
				},
				{
					type: 'expr',
					name: 'tooltip',
					expr: "((new Intl.NumberFormat('en-US', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(',', ' ')",
				},
				{
					name: 'date-day',
					type: 'datetime',
					options: {
						month: 'short',
						day: 'numeric',
					},
				},
				{
					name: 'date-week',
					type: 'datetime',
					options: {
						month: 'short',
						day: 'numeric',
					},
				},
				{
					name: 'date-month',
					type: 'datetime',
					options: {
						year: 'numeric',
						month: 'short',
					},
				},
				{
					name: 'date-quarter',
					type: 'expr',
					expr: "'Q' + value.toFormat('q yyyy')",
				},
				{
					name: 'date-year',
					type: 'datetime',
					options: {
						year: 'numeric',
					},
				},
				{
					type: 'number',
					name: 'axisY',
					options: {
						notation: 'compact',
					},
				},
			],
			scales: [
				{
					type: 'linear',
					name: 'y',
					domain: {
						data: 'stacked',
						fields: ['value0', 'value1'],
					},
					range: 'height',
					domainMin: 0,
				},
				{
					type: 'band',
					name: 'x',
					domain: {
						field: 'dim0',
						data: 'root',
					},
					range: 'width',
				},
				{
					type: 'ordinal',
					name: 'color',
					range: [
						'#1877F2',
						'#D73676',
						'#1078B3',
						'#BB0F23',
						'#DFDD00',
						'#000000',
						'#59ADEB',
						'#f00',
					],
					domain: [
						'Facebook',
						'Instagram',
						'LinkedIn',
						'Pinterest',
						'Snapchat',
						'TikTok',
						'Twitter',
						'YouTube',
					],
				},
				{
					type: 'ordinal',
					name: 'dim1Ordinals',
					domain: {
						field: 'dim1',
						data: 'stacked',
					},
					range: {
						palette: 'pastel1',
					},
				},
			],
			axes: [
				{
					orientation: 'bottom',
					scale: 'x',
					format: 'date-day',
					size: 25,
					ticks: {
						expr: "Math.floor(signal('layout.width') / (60 * 2))",
					},
					name: 'Date',
				},
				{
					orientation: 'left',
					scale: 'y',
					caption: 'Content impressions',
					format: 'axisY',
					name: 'Content impressions',
					grid: true,
					size: 55,
					ticks: 5,
					encode: {
						stroke: 'none',
					},
				},
			],
			legends: [
				{
					orientation: 'bottom',
					name: 'Content impressions',
					scale: 'dim1Ordinals',
					'encode:symbol': {
						fill: {
							scale: 'color',
						},
					},
				},
			],
			marks: [
				{
					type: 'rect',
					name: 'Columns',
					source: {
						data: 'stacked',
					},
					tooltip: {
						Date: {
							field: 'dim0',
							format: 'date-day',
						},
						Platform: {
							field: 'dim1',
						},
						'Content impressions': {
							field: 'value',
							format: 'tooltip',
						},
					},
					encode: {
						y: {
							field: 'value0',
							scale: 'y',
							offset: -1,
						},
						y2: {
							field: 'value1',
							scale: 'y',
							offset: 1,
						},
						x: {
							field: 'dim0',
							scale: 'x',
						},
						width: {
							band: 1,
							scale: 'x',
						},
						fill: {
							field: 'dim1',
							scale: 'color',
						},
						fillOpacity: 1,
						radius: 3,
						':hover': {
							fillOpacity: 1,
						},
					},
				},
			],
		},
	},
	data: {
		header: [
			{
				type: 'date',
				rows: [
					'2024-01-31',
					'2024-02-01',
					'2024-02-02',
					'2024-02-03',
					'2024-02-04',
					'2024-02-05',
					'2024-02-06',
					'2024-02-07',
					'2024-02-08',
					'2024-02-09',
					'2024-02-10',
					'2024-02-11',
					'2024-02-12',
					'2024-02-13',
					'2024-02-14',
					'2024-02-15',
					'2024-02-16',
					'2024-02-17',
					'2024-02-18',
					'2024-02-19',
					'2024-02-20',
					'2024-02-21',
					'2024-02-22',
					'2024-02-23',
					'2024-02-24',
					'2024-02-25',
					'2024-02-26',
					'2024-02-27',
					'2024-02-28',
					'2024-02-29',
				],
			},
			{
				type: 'platform',
				rows: ['facebook'],
			},
			{
				type: 'target',
				rows: ['insights_impressions'],
			},
		],
		data: [
			[[720]],
			[[16077]],
			[[6237]],
			[[null]],
			[[null]],
			[[6315]],
			[[5051]],
			[[6429]],
			[[1773]],
			[[251]],
			[[3187]],
			[[null]],
			[[4970]],
			[[329]],
			[[1030]],
			[[1949]],
			[[2180]],
			[[null]],
			[[null]],
			[[409]],
			[[2099]],
			[[2613]],
			[[2416]],
			[[5401]],
			[[null]],
			[[null]],
			[[325]],
			[[3058]],
			[[2024]],
			[[6111]],
		],
		platformResponses: {
			facebook: {
				header: [
					{
						rows: [
							'2024-01-31',
							'2024-02-01',
							'2024-02-02',
							'2024-02-03',
							'2024-02-04',
							'2024-02-05',
							'2024-02-06',
							'2024-02-07',
							'2024-02-08',
							'2024-02-09',
							'2024-02-10',
							'2024-02-11',
							'2024-02-12',
							'2024-02-13',
							'2024-02-14',
							'2024-02-15',
							'2024-02-16',
							'2024-02-17',
							'2024-02-18',
							'2024-02-19',
							'2024-02-20',
							'2024-02-21',
							'2024-02-22',
							'2024-02-23',
							'2024-02-24',
							'2024-02-25',
							'2024-02-26',
							'2024-02-27',
							'2024-02-28',
							'2024-02-29',
						],
					},
					{
						type: 'target',
						rows: [
							{
								metric: 'insights_impressions',
								aggregation: 'sum',
							},
						],
					},
				],
				data: [
					[[720, 1]],
					[[16077, 2]],
					[[6237, 1]],
					[[0, 0]],
					[[0, 0]],
					[[6315, 2]],
					[[5051, 2]],
					[[6429, 2]],
					[[1773, 2]],
					[[251, 1]],
					[[3187, 1]],
					[[0, 0]],
					[[4970, 1]],
					[[329, 1]],
					[[1030, 1]],
					[[1949, 1]],
					[[2180, 1]],
					[[0, 0]],
					[[0, 0]],
					[[409, 1]],
					[[2099, 1]],
					[[2613, 2]],
					[[2416, 1]],
					[[5401, 1]],
					[[0, 0]],
					[[0, 0]],
					[[325, 1]],
					[[3058, 2]],
					[[2024, 1]],
					[[6111, 3]],
				],
				index: ['fb_posts_v5_2024_01', 'fb_posts_v5_2024_02'],
			},
		},
		explain: [
			{
				tag: 'scope_ScopeCrossplatformPostsService',
				timers: {
					'search::startTime': {
						value: 274100595801334,
					},
					'search::endTime': {
						value: 274101605173843,
					},
				},
				query: {
					query: {
						query:
							'query ($auth: Auth!, $facebookProfileIds: [String]) { fbProfiles (auth: $auth, ids: $facebookProfileIds) { id, network, timezone { name }, tags { isOwned, sentiment, localPage, insights { enabled, tokenValid } } } }',
						variables: {
							auth: {
								userId: '213866',
								accountId: '172196',
							},
							facebookProfileIds: ['164929129743'],
						},
						queryRaw: [
							{
								operation: 'fbProfiles',
								fields: [
									'id',
									'network',
									{
										timezone: ['name'],
									},
									{
										tags: [
											'isOwned',
											'sentiment',
											'localPage',
											{
												insights: ['enabled', 'tokenValid'],
											},
										],
									},
								],
								variables: {
									auth: {
										type: 'Auth',
										value: {
											userId: '213866',
											accountId: '172196',
										},
										required: true,
									},
									facebookProfileIds: {
										list: true,
										type: 'String',
										value: ['164929129743'],
										required: false,
										name: 'ids',
									},
								},
							},
						],
					},
					__type: 'graphql',
				},
				rawData: {
					fbProfiles: [
						{
							id: '164929129743',
							network: 'facebook',
							timezone: {
								name: 'Europe/Prague',
							},
							tags: {
								isOwned: true,
								sentiment: 'manual-auto',
								localPage: false,
								insights: {
									enabled: true,
									tokenValid: true,
								},
							},
						},
					],
				},
				data: {
					profile_id: [
						{
							id: '164929129743',
							pageLabels: [],
							platform: 'facebook',
							sentiment: 'manual-auto',
							timezone: 'Europe/Prague',
							tags: ['insights'],
						},
					],
					created_time: {
						ts: 1709247599999,
						_zone: {
							zoneName: 'Europe/Prague',
							valid: true,
						},
						loc: {
							locale: 'en-US',
							numberingSystem: null,
							outputCalendar: null,
							intl: 'en-US',
							weekdaysCache: {
								format: {},
								standalone: {},
							},
							monthsCache: {
								format: {},
								standalone: {},
							},
							meridiemCache: null,
							eraCache: {},
							specifiedLocale: null,
							fastNumbersCached: null,
						},
						invalid: null,
						weekData: null,
						c: {
							year: 2024,
							month: 2,
							day: 29,
							hour: 23,
							minute: 59,
							second: 59,
							millisecond: 999,
						},
						o: 60,
						isLuxonDateTime: true,
					},
					account_id: '172196',
				},
			},
			{
				tag: 'crossPlatformNextService',
				timers: {
					'search::startTime': {
						value: 274101605773917,
					},
					'dataFetch::startTime': {
						value: 274101606004814,
					},
					'dataFetch::endTime': {
						value: 274101626344898,
					},
					'search::endTime': {
						value: 274101628517309,
					},
				},
				payload: {
					filters: [
						{
							'Symbol(CP_CREATED_TIME)': {
								timeFrom: '2024-01-31T00:00:00.000',
								timeTo: '2024-02-29T23:59:59.999',
							},
						},
						{
							'Symbol(CP_PROFILE)': {
								op: 'any',
								values: [
									{
										id: '164929129743',
										platform: 'Symbol(FACEBOOK)',
									},
								],
							},
						},
						{
							'Symbol(CP_ORIGIN)': {
								values: ['outgoing'],
							},
						},
						{
							'Symbol(CP_SPAM_POST)': {
								value: false,
							},
						},
						{
							'Symbol(CP_DELETED_POST)': {
								value: false,
							},
						},
					],
					target: [
						{
							metric: 'Symbol(CP_INSIGHTS_IMPRESSIONS)',
							aggregation: 'Symbol(SUM)',
						},
					],
					dimensions: [
						{
							type: 'Symbol(Date)',
							aggregation: {
								type: 'Symbol(Daily)',
								value: null,
							},
							rows: null,
							specifyRows: null,
							group: null,
						},
						{
							type: 'Symbol(Platform)',
							group: {
								sort: {
									key: 'value',
									order: 'desc',
								},
							},
							rows: null,
							specifyRows: null,
							aggregation: {
								type: null,
								value: null,
							},
						},
					],
					scope: {
						profile_id: [
							{
								pageLabels: [],
								id: '164929129743',
								platform: 'Symbol(FACEBOOK)',
								sentiment: 'manual-auto',
								timezone: 'Europe/Prague',
								tags: ['insights'],
							},
						],
						page_labels: [],
						'sbks.labels': [],
						platforms: [],
						origin: [
							{
								id: 'outgoing',
								sortIndex: 0,
							},
						],
						accountId: '172196',
						userId: '213866',
						options: {
							output: ['data', 'raw', 'payload', 'query'],
							withLimit: true,
							auth: true,
							explain: true,
							toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
						},
						published_status: [],
						content_type: [],
						media_type: [],
						ppd_status: [],
						sentiment_type: null,
						sentiment: null,
						reaction_type: null,
						gained_lost: null,
						custom_metrics: {},
						searchScope: {
							accountId: '172196',
							profile_id: [
								{
									pageLabels: [],
									id: '164929129743',
									platform: 'Symbol(FACEBOOK)',
									sentiment: 'manual-auto',
									timezone: 'Europe/Prague',
									tags: ['insights'],
								},
							],
							'timezone>platform>profiles': {},
							'pageLabel>platform>profiles': {},
							'platform>profiles>sentiment': {},
							'platform>profiles>pageLabels': {},
							'platform>profiles>tags': {},
							'platform>profiles': {},
							postLabels: {},
							pageLabels: {},
							sentiment: {
								accountId: {},
							},
							platforms: {},
							createdTime: {
								timeFrom: '2024-01-31T00:00:00.000',
								timeTo: '2024-02-29T23:59:59.999',
							},
							options: {
								output: ['data', 'raw', 'payload', 'query'],
								withLimit: true,
								auth: true,
								explain: true,
								toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
							},
							'platform>customMetrics': {},
							contentType: {},
							publishedStatus: {},
							origin: {},
							mediaType: {},
							ppdStatus: {},
							responseTime: {},
							sentimentType: {},
							gainedLost: {},
						},
						parsedScope: {
							profile_id: [
								{
									pageLabels: [],
									id: '164929129743',
									platform: 'Symbol(FACEBOOK)',
									sentiment: 'manual-auto',
									timezone: 'Europe/Prague',
									tags: ['insights'],
								},
							],
							page_labels: [],
							'sbks.labels': [],
							platforms: [],
							origin: [],
							accountId: '172196',
							userId: '213866',
							options: {
								output: ['data', 'raw', 'payload', 'query'],
								withLimit: true,
								auth: true,
								explain: true,
								toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
							},
							published_status: [],
							content_type: [],
							media_type: [],
							ppd_status: [],
							sentiment_type: null,
							sentiment: null,
							reaction_type: null,
							gained_lost: null,
							custom_metrics: {},
						},
					},
					options: {
						output: ['data', 'raw', 'payload', 'query'],
						withLimit: true,
						auth: true,
						explain: true,
						toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
					},
					toggles: {
						_enabledToggles: {},
						feature: {
							tw_retweet_count: {
								id: 'tw_retweet_count',
								name: 'TP141144 Filter out Retweets',
							},
							no_ig_ads: {
								id: 'no_ig_ads',
								name: 'Filter out IG Ads content',
							},
							ig_org_paid_split: {
								id: 'ig_org_paid_split',
								name: 'Respect Organic/Paid split IG feature',
							},
							cs_2451_fb_groups: {
								id: 'cs_2451_fb_groups',
								name: 'Enabling facebook_group message type',
							},
						},
					},
					rawScope: {
						profile_id: [
							{
								id: '164929129743',
								pageLabels: [],
								platform: 'facebook',
								sentiment: 'manual-auto',
								timezone: 'Europe/Prague',
								tags: ['insights'],
							},
						],
						created_time: {
							ts: 1709247599999,
							_zone: {
								zoneName: 'Europe/Prague',
								valid: true,
							},
							loc: {
								locale: 'en-US',
								numberingSystem: null,
								outputCalendar: null,
								intl: 'en-US',
								weekdaysCache: {
									format: {},
									standalone: {},
								},
								monthsCache: {
									format: {},
									standalone: {},
								},
								meridiemCache: null,
								eraCache: {},
								specifiedLocale: null,
								fastNumbersCached: null,
							},
							invalid: null,
							weekData: null,
							c: {
								year: 2024,
								month: 2,
								day: 29,
								hour: 23,
								minute: 59,
								second: 59,
								millisecond: 999,
							},
							o: 60,
							isLuxonDateTime: true,
						},
						account_id: '172196',
					},
				},
				query: {
					'Symbol(FACEBOOK)': {
						filters: [
							{
								created_time: {
									timeFrom: '2024-01-31T00:00:00.000',
									timeTo: '2024-02-29T23:59:59.999',
								},
							},
							{
								profile_id: {
									op: 'any',
									values: {},
								},
							},
							{
								origin: {
									values: ['outgoing'],
								},
							},
							{
								spam_post: {
									value: false,
								},
							},
							{
								deleted_post: {
									value: false,
								},
							},
						],
						target: [
							{
								metric: 'Symbol(FB_INSIGHTS_IMPRESSIONS)',
								aggregation: 'Symbol(SUM)',
							},
						],
						dimensions: [
							{
								type: 'Symbol(Date)',
								aggregation: {
									type: 'Symbol(Daily)',
									value: null,
								},
							},
						],
						scope: {},
						filtersSymbol: [
							{
								'Symbol(FB_CREATED_TIME)': {
									timeFrom: '2024-01-31T00:00:00.000',
									timeTo: '2024-02-29T23:59:59.999',
								},
							},
							{
								'Symbol(FB_PROFILE)': {
									op: 'any',
									values: {},
								},
							},
							{
								'Symbol(FB_ORIGIN)': {
									values: ['outgoing'],
								},
							},
							{
								'Symbol(FB_SPAM_POST)': {
									value: false,
								},
							},
							{
								'Symbol(FB_DELETED_POST)': {
									value: false,
								},
							},
						],
						omniDataServiceScope: {
							profile_id: [
								{
									pageLabels: [],
									id: '164929129743',
									platform: 'Symbol(FACEBOOK)',
									sentiment: 'manual-auto',
									timezone: 'Europe/Prague',
									tags: ['insights'],
								},
							],
							page_labels: [],
							'sbks.labels': [],
							platforms: [],
							origin: [
								{
									id: 'outgoing',
									sortIndex: 0,
								},
							],
							accountId: '172196',
							userId: '213866',
							options: {
								output: ['data', 'raw', 'payload', 'query'],
								withLimit: true,
								auth: true,
								explain: true,
								toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
							},
							published_status: [],
							content_type: [],
							media_type: [],
							ppd_status: [],
							sentiment_type: null,
							sentiment: null,
							reaction_type: null,
							gained_lost: null,
							custom_metrics: {},
							searchScope: {
								accountId: '172196',
								profile_id: [
									{
										pageLabels: [],
										id: '164929129743',
										platform: 'Symbol(FACEBOOK)',
										sentiment: 'manual-auto',
										timezone: 'Europe/Prague',
										tags: ['insights'],
									},
								],
								'timezone>platform>profiles': {},
								'pageLabel>platform>profiles': {},
								'platform>profiles>sentiment': {},
								'platform>profiles>pageLabels': {},
								'platform>profiles>tags': {},
								'platform>profiles': {},
								postLabels: {},
								pageLabels: {},
								sentiment: {
									accountId: {},
								},
								platforms: {},
								createdTime: {
									timeFrom: '2024-01-31T00:00:00.000',
									timeTo: '2024-02-29T23:59:59.999',
								},
								options: {
									output: ['data', 'raw', 'payload', 'query'],
									withLimit: true,
									auth: true,
									explain: true,
									toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
								},
								'platform>customMetrics': {},
								contentType: {},
								publishedStatus: {},
								origin: {},
								mediaType: {},
								ppdStatus: {},
								responseTime: {},
								sentimentType: {},
								gainedLost: {},
							},
							parsedScope: {
								profile_id: [
									{
										pageLabels: [],
										id: '164929129743',
										platform: 'Symbol(FACEBOOK)',
										sentiment: 'manual-auto',
										timezone: 'Europe/Prague',
										tags: ['insights'],
									},
								],
								page_labels: [],
								'sbks.labels': [],
								platforms: [],
								origin: [],
								accountId: '172196',
								userId: '213866',
								options: {
									output: ['data', 'raw', 'payload', 'query'],
									withLimit: true,
									auth: true,
									explain: true,
									toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
								},
								published_status: [],
								content_type: [],
								media_type: [],
								ppd_status: [],
								sentiment_type: null,
								sentiment: null,
								reaction_type: null,
								gained_lost: null,
								custom_metrics: {},
							},
						},
					},
				},
				rawData: {
					options: {
						output: ['data', 'raw', 'payload', 'query'],
						withLimit: true,
						auth: true,
						explain: true,
						toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
					},
					'Symbol(FACEBOOK)': {
						header: [
							{
								type: 'Symbol(Date)',
								rows: [
									'2024-01-31',
									'2024-02-01',
									'2024-02-02',
									'2024-02-03',
									'2024-02-04',
									'2024-02-05',
									'2024-02-06',
									'2024-02-07',
									'2024-02-08',
									'2024-02-09',
									'2024-02-10',
									'2024-02-11',
									'2024-02-12',
									'2024-02-13',
									'2024-02-14',
									'2024-02-15',
									'2024-02-16',
									'2024-02-17',
									'2024-02-18',
									'2024-02-19',
									'2024-02-20',
									'2024-02-21',
									'2024-02-22',
									'2024-02-23',
									'2024-02-24',
									'2024-02-25',
									'2024-02-26',
									'2024-02-27',
									'2024-02-28',
									'2024-02-29',
								],
							},
							{
								type: 'target',
								rows: [
									{
										metric: 'insights_impressions',
										aggregation: 'sum',
									},
								],
							},
						],
						data: [
							[[720, 1]],
							[[16077, 2]],
							[[6237, 1]],
							[[0, 0]],
							[[0, 0]],
							[[6315, 2]],
							[[5051, 2]],
							[[6429, 2]],
							[[1773, 2]],
							[[251, 1]],
							[[3187, 1]],
							[[0, 0]],
							[[4970, 1]],
							[[329, 1]],
							[[1030, 1]],
							[[1949, 1]],
							[[2180, 1]],
							[[0, 0]],
							[[0, 0]],
							[[409, 1]],
							[[2099, 1]],
							[[2613, 2]],
							[[2416, 1]],
							[[5401, 1]],
							[[0, 0]],
							[[0, 0]],
							[[325, 1]],
							[[3058, 2]],
							[[2024, 1]],
							[[6111, 3]],
						],
						index: ['fb_posts_v5_2024_01', 'fb_posts_v5_2024_02'],
					},
				},
				header: [
					{
						type: 'Symbol(Date)',
						rows: [
							'2024-01-31',
							'2024-02-01',
							'2024-02-02',
							'2024-02-03',
							'2024-02-04',
							'2024-02-05',
							'2024-02-06',
							'2024-02-07',
							'2024-02-08',
							'2024-02-09',
							'2024-02-10',
							'2024-02-11',
							'2024-02-12',
							'2024-02-13',
							'2024-02-14',
							'2024-02-15',
							'2024-02-16',
							'2024-02-17',
							'2024-02-18',
							'2024-02-19',
							'2024-02-20',
							'2024-02-21',
							'2024-02-22',
							'2024-02-23',
							'2024-02-24',
							'2024-02-25',
							'2024-02-26',
							'2024-02-27',
							'2024-02-28',
							'2024-02-29',
						],
					},
					{
						type: 'Symbol(Platform)',
						rows: ['facebook'],
					},
					{
						type: 'target',
						rows: [
							{
								metric: 'insights_impressions',
								aggregation: 'sum',
							},
						],
					},
				],
				data: [
					[[720]],
					[[16077]],
					[[6237]],
					[[null]],
					[[null]],
					[[6315]],
					[[5051]],
					[[6429]],
					[[1773]],
					[[251]],
					[[3187]],
					[[null]],
					[[4970]],
					[[329]],
					[[1030]],
					[[1949]],
					[[2180]],
					[[null]],
					[[null]],
					[[409]],
					[[2099]],
					[[2613]],
					[[2416]],
					[[5401]],
					[[null]],
					[[null]],
					[[325]],
					[[3058]],
					[[2024]],
					[[6111]],
				],
			},
			{
				tag: 'facebookPostsNextService',
				timers: {
					'search::startTime': {
						value: 274101607051418,
					},
					'dataFetch::startTime': {
						value: 274101609773645,
					},
					'dataFetch::endTime': {
						value: 274101623408046,
					},
					'search::endTime': {
						value: 274101625150864,
					},
				},
				payload: {
					filters: [
						{
							'Symbol(FB_CREATED_TIME)': {
								timeFrom: '2024-01-31T00:00:00.000',
								timeTo: '2024-02-29T23:59:59.999',
							},
						},
						{
							'Symbol(FB_PROFILE)': {
								op: 'any',
								values: {},
							},
						},
						{
							'Symbol(FB_ORIGIN)': {
								values: ['outgoing'],
							},
						},
						{
							'Symbol(FB_SPAM_POST)': {
								value: false,
							},
						},
						{
							'Symbol(FB_DELETED_POST)': {
								value: false,
							},
						},
					],
					target: [
						{
							metric: 'Symbol(FB_INSIGHTS_IMPRESSIONS)',
							aggregation: 'Symbol(SUM)',
						},
					],
					dimensions: [
						{
							type: 'Symbol(Date)',
							aggregation: {
								type: 'Symbol(Daily)',
								value: null,
							},
						},
					],
					scope: {
						profile_id: [
							{
								pageLabels: [],
								id: '164929129743',
								platform: 'Symbol(FACEBOOK)',
								sentiment: 'manual-auto',
								timezone: 'Europe/Prague',
								tags: ['insights'],
							},
						],
						page_labels: [],
						'sbks.labels': [],
						platforms: [],
						origin: [
							{
								id: 'outgoing',
								sortIndex: 0,
							},
						],
						accountId: '172196',
						userId: '213866',
						options: {
							output: ['data', 'raw', 'payload', 'query', 'weights'],
							withLimit: true,
							auth: true,
							explain: true,
							toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
						},
						published_status: [],
						content_type: [],
						media_type: [],
						ppd_status: [],
						sentiment_type: null,
						sentiment: null,
						reaction_type: null,
						gained_lost: null,
						custom_metrics: {},
						searchScope: {
							accountId: '172196',
							profile_id: [
								{
									pageLabels: [],
									id: '164929129743',
									platform: 'Symbol(FACEBOOK)',
									sentiment: 'manual-auto',
									timezone: 'Europe/Prague',
									tags: ['insights'],
								},
							],
							'timezone>platform>profiles': {},
							'pageLabel>platform>profiles': {},
							'platform>profiles>sentiment': {},
							'platform>profiles>pageLabels': {},
							'platform>profiles>tags': {},
							'platform>profiles': {},
							postLabels: {},
							pageLabels: {},
							sentiment: {
								accountId: {},
							},
							platforms: {},
							createdTime: {
								timeFrom: '2024-01-31T00:00:00.000',
								timeTo: '2024-02-29T23:59:59.999',
							},
							options: {
								output: ['data', 'raw', 'payload', 'query', 'weights'],
								withLimit: true,
								auth: true,
								explain: true,
								toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
							},
							customMetrics: {},
						},
						parsedScope: {
							profile_id: [
								{
									pageLabels: [],
									id: '164929129743',
									platform: 'Symbol(FACEBOOK)',
									sentiment: 'manual-auto',
									timezone: 'Europe/Prague',
									tags: ['insights'],
								},
							],
							page_labels: [],
							'sbks.labels': [],
							platforms: [],
							origin: [],
							accountId: '172196',
							userId: '213866',
							options: {
								output: ['data', 'raw', 'payload', 'query'],
								withLimit: true,
								auth: true,
								explain: true,
								toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
							},
							published_status: [],
							content_type: [],
							media_type: [],
							ppd_status: [],
							sentiment_type: null,
							sentiment: null,
							reaction_type: null,
							gained_lost: null,
							custom_metrics: {},
						},
						wrapSearchScope: {
							accountId: '172196',
							profile_id: [
								{
									pageLabels: [],
									id: '164929129743',
									platform: 'Symbol(FACEBOOK)',
									sentiment: 'manual-auto',
									timezone: 'Europe/Prague',
									tags: ['insights'],
								},
							],
							'timezone>platform>profiles': {},
							'pageLabel>platform>profiles': {},
							'platform>profiles>sentiment': {},
							'platform>profiles>pageLabels': {},
							'platform>profiles>tags': {},
							'platform>profiles': {},
							postLabels: {},
							pageLabels: {},
							sentiment: {
								accountId: {},
							},
							platforms: {},
							createdTime: {
								timeFrom: '2024-01-31T00:00:00.000',
								timeTo: '2024-02-29T23:59:59.999',
							},
							options: {
								output: ['data', 'raw', 'payload', 'query', 'weights'],
								withLimit: true,
								auth: true,
								explain: true,
								toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
							},
							customMetrics: {},
						},
					},
					filtersSymbol: [
						{
							'Symbol(FB_CREATED_TIME)': {
								timeFrom: '2024-01-31T00:00:00.000',
								timeTo: '2024-02-29T23:59:59.999',
							},
						},
						{
							'Symbol(FB_PROFILE)': {
								op: 'any',
								values: {},
							},
						},
						{
							'Symbol(FB_ORIGIN)': {
								values: ['outgoing'],
							},
						},
						{
							'Symbol(FB_SPAM_POST)': {
								value: false,
							},
						},
						{
							'Symbol(FB_DELETED_POST)': {
								value: false,
							},
						},
					],
					options: {
						output: ['data', 'raw', 'payload', 'query', 'weights'],
						withLimit: true,
						auth: true,
						explain: true,
						toggles: ['tw_retweet_count', 'PAID1719_fb_reels_enabled'],
					},
					toggles: {
						_enabledToggles: {},
						feature: {
							tw_retweet_count: {
								id: 'tw_retweet_count',
								name: 'TP141144 Filter out Retweets',
							},
							no_ig_ads: {
								id: 'no_ig_ads',
								name: 'Filter out IG Ads content',
							},
							ig_org_paid_split: {
								id: 'ig_org_paid_split',
								name: 'Respect Organic/Paid split IG feature',
							},
							cs_2451_fb_groups: {
								id: 'cs_2451_fb_groups',
								name: 'Enabling facebook_group message type',
							},
						},
					},
				},
				query: {
					query: {
						size: 0,
						track_total_hits: true,
						query: {
							bool: {
								filter: {
									bool: {
										must: [
											{
												bool: {
													should: [
														{
															bool: {
																must: [
																	{
																		terms: {
																			profile_id: ['164929129743'],
																		},
																	},
																	{
																		term: {
																			'facebook.is_published': true,
																		},
																	},
																],
															},
														},
														{
															bool: {
																must: [
																	{
																		terms: {
																			profile_id: ['164929129743'],
																		},
																	},
																	{
																		term: {
																			'facebook.is_published': false,
																		},
																	},
																	{
																		range: {
																			'insights.impressions_by_paid_non_paid_unique.total':
																				{
																					gt: 0,
																				},
																		},
																	},
																],
															},
														},
													],
												},
											},
											{
												bool: {
													should: [
														{
															bool: {
																must_not: [
																	{
																		term: {
																			'sbks.subtypes': 'reel',
																		},
																	},
																],
															},
														},
														{
															bool: {
																must: [
																	{
																		terms: {
																			profile_id: ['164929129743'],
																		},
																	},
																	{
																		term: {
																			'sbks.subtypes': 'reel',
																		},
																	},
																],
															},
														},
													],
												},
											},
											{
												bool: {
													should: [
														{
															bool: {
																must: [
																	{
																		terms: {
																			profile_id: ['164929129743'],
																		},
																	},
																	{
																		range: {
																			created_time: {
																				to: '2024-02-29T23:59:59.999+01:00',
																				from: '2024-01-31T00:00:00.000+01:00',
																			},
																		},
																	},
																],
															},
														},
													],
												},
											},
											{
												bool: {
													must_not: {
														term: {
															'sbks.is_deleted': true,
														},
													},
												},
											},
											{
												term: {
													'facebook.is_admin_post': true,
												},
											},
											{
												term: {
													'facebook.is_spam': false,
												},
											},
											{
												bool: {
													must_not: {
														term: {
															'facebook.is_deleted': true,
														},
													},
													minimum_should_match: 1,
												},
											},
										],
										should: [
											{
												terms: {
													profile_id: ['164929129743'],
												},
											},
										],
									},
								},
							},
						},
						aggs: {
							agg_filter_timezone_0: {
								filter: {
									terms: {
										profile_id: ['164929129743'],
									},
								},
								aggs: {
									date: {
										date_histogram: {
											field: 'created_time',
											format: '8uuuu-MM-dd',
											calendar_interval: 'day',
											time_zone: 'Europe/Prague',
										},
										aggs: {
											filter_insights_impressions_0: {
												filter: {
													bool: {
														must: [
															{
																term: {
																	'facebook.is_admin_post': true,
																},
															},
															{
																terms: {
																	profile_id: ['164929129743'],
																},
															},
														],
													},
												},
												aggs: {
													insights_impressions_0: {
														sum: {
															field: 'insights.impressions',
														},
													},
												},
											},
										},
									},
								},
							},
						},
					},
				},
				rawData: {
					body: {
						took: 11,
						timed_out: false,
						_shards: {
							total: 6,
							successful: 6,
							skipped: 0,
							failed: 0,
						},
						hits: {
							total: {
								value: 32,
								relation: 'eq',
							},
							max_score: null,
							hits: [],
						},
						aggregations: {
							agg_filter_timezone_0: {
								doc_count: 32,
								date: {
									buckets: [
										{
											key_as_string: '2024-01-31',
											key: 1706655600000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 720,
												},
											},
										},
										{
											key_as_string: '2024-02-01',
											key: 1706742000000,
											doc_count: 2,
											filter_insights_impressions_0: {
												doc_count: 2,
												insights_impressions_0: {
													value: 16077,
												},
											},
										},
										{
											key_as_string: '2024-02-02',
											key: 1706828400000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 6237,
												},
											},
										},
										{
											key_as_string: '2024-02-03',
											key: 1706914800000,
											doc_count: 0,
											filter_insights_impressions_0: {
												doc_count: 0,
												insights_impressions_0: {
													value: 0,
												},
											},
										},
										{
											key_as_string: '2024-02-04',
											key: 1707001200000,
											doc_count: 0,
											filter_insights_impressions_0: {
												doc_count: 0,
												insights_impressions_0: {
													value: 0,
												},
											},
										},
										{
											key_as_string: '2024-02-05',
											key: 1707087600000,
											doc_count: 2,
											filter_insights_impressions_0: {
												doc_count: 2,
												insights_impressions_0: {
													value: 6315,
												},
											},
										},
										{
											key_as_string: '2024-02-06',
											key: 1707174000000,
											doc_count: 2,
											filter_insights_impressions_0: {
												doc_count: 2,
												insights_impressions_0: {
													value: 5051,
												},
											},
										},
										{
											key_as_string: '2024-02-07',
											key: 1707260400000,
											doc_count: 2,
											filter_insights_impressions_0: {
												doc_count: 2,
												insights_impressions_0: {
													value: 6429,
												},
											},
										},
										{
											key_as_string: '2024-02-08',
											key: 1707346800000,
											doc_count: 2,
											filter_insights_impressions_0: {
												doc_count: 2,
												insights_impressions_0: {
													value: 1773,
												},
											},
										},
										{
											key_as_string: '2024-02-09',
											key: 1707433200000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 251,
												},
											},
										},
										{
											key_as_string: '2024-02-10',
											key: 1707519600000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 3187,
												},
											},
										},
										{
											key_as_string: '2024-02-11',
											key: 1707606000000,
											doc_count: 0,
											filter_insights_impressions_0: {
												doc_count: 0,
												insights_impressions_0: {
													value: 0,
												},
											},
										},
										{
											key_as_string: '2024-02-12',
											key: 1707692400000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 4970,
												},
											},
										},
										{
											key_as_string: '2024-02-13',
											key: 1707778800000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 329,
												},
											},
										},
										{
											key_as_string: '2024-02-14',
											key: 1707865200000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 1030,
												},
											},
										},
										{
											key_as_string: '2024-02-15',
											key: 1707951600000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 1949,
												},
											},
										},
										{
											key_as_string: '2024-02-16',
											key: 1708038000000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 2180,
												},
											},
										},
										{
											key_as_string: '2024-02-17',
											key: 1708124400000,
											doc_count: 0,
											filter_insights_impressions_0: {
												doc_count: 0,
												insights_impressions_0: {
													value: 0,
												},
											},
										},
										{
											key_as_string: '2024-02-18',
											key: 1708210800000,
											doc_count: 0,
											filter_insights_impressions_0: {
												doc_count: 0,
												insights_impressions_0: {
													value: 0,
												},
											},
										},
										{
											key_as_string: '2024-02-19',
											key: 1708297200000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 409,
												},
											},
										},
										{
											key_as_string: '2024-02-20',
											key: 1708383600000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 2099,
												},
											},
										},
										{
											key_as_string: '2024-02-21',
											key: 1708470000000,
											doc_count: 2,
											filter_insights_impressions_0: {
												doc_count: 2,
												insights_impressions_0: {
													value: 2613,
												},
											},
										},
										{
											key_as_string: '2024-02-22',
											key: 1708556400000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 2416,
												},
											},
										},
										{
											key_as_string: '2024-02-23',
											key: 1708642800000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 5401,
												},
											},
										},
										{
											key_as_string: '2024-02-24',
											key: 1708729200000,
											doc_count: 0,
											filter_insights_impressions_0: {
												doc_count: 0,
												insights_impressions_0: {
													value: 0,
												},
											},
										},
										{
											key_as_string: '2024-02-25',
											key: 1708815600000,
											doc_count: 0,
											filter_insights_impressions_0: {
												doc_count: 0,
												insights_impressions_0: {
													value: 0,
												},
											},
										},
										{
											key_as_string: '2024-02-26',
											key: 1708902000000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 325,
												},
											},
										},
										{
											key_as_string: '2024-02-27',
											key: 1708988400000,
											doc_count: 2,
											filter_insights_impressions_0: {
												doc_count: 2,
												insights_impressions_0: {
													value: 3058,
												},
											},
										},
										{
											key_as_string: '2024-02-28',
											key: 1709074800000,
											doc_count: 1,
											filter_insights_impressions_0: {
												doc_count: 1,
												insights_impressions_0: {
													value: 2024,
												},
											},
										},
										{
											key_as_string: '2024-02-29',
											key: 1709161200000,
											doc_count: 3,
											filter_insights_impressions_0: {
												doc_count: 3,
												insights_impressions_0: {
													value: 6111,
												},
											},
										},
									],
								},
							},
						},
					},
					statusCode: 200,
					headers: {
						'x-opaque-id': '#search_facebookPostsNextService<hera_omni-api',
						'x-elastic-product': 'Elasticsearch',
						'content-type': 'application/json; charset=UTF-8',
						'content-length': '4866',
					},
					meta: {
						context: null,
						request: {
							params: {
								method: 'POST',
								path: '/fb_posts_v5_2024_01%2Cfb_posts_v5_2024_02/_search',
								body: '{"size":0,"track_total_hits":true,"query":{"bool":{"filter":{"bool":{"must":[{"bool":{"should":[{"bool":{"must":[{"terms":{"profile_id":["164929129743"]}},{"term":{"facebook.is_published":true}}]}},{"bool":{"must":[{"terms":{"profile_id":["164929129743"]}},{"term":{"facebook.is_published":false}},{"range":{"insights.impressions_by_paid_non_paid_unique.total":{"gt":0}}}]}}]}},{"bool":{"should":[{"bool":{"must_not":[{"term":{"sbks.subtypes":"reel"}}]}},{"bool":{"must":[{"terms":{"profile_id":["164929129743"]}},{"term":{"sbks.subtypes":"reel"}}]}}]}},{"bool":{"should":[{"bool":{"must":[{"terms":{"profile_id":["164929129743"]}},{"range":{"created_time":{"to":"2024-02-29T23:59:59.999+01:00","from":"2024-01-31T00:00:00.000+01:00"}}}]}}]}},{"bool":{"must_not":{"term":{"sbks.is_deleted":true}}}},{"term":{"facebook.is_admin_post":true}},{"term":{"facebook.is_spam":false}},{"bool":{"must_not":{"term":{"facebook.is_deleted":true}},"minimum_should_match":1}}],"should":[{"terms":{"profile_id":["164929129743"]}}]}}}},"aggs":{"agg_filter_timezone_0":{"filter":{"terms":{"profile_id":["164929129743"]}},"aggs":{"date":{"date_histogram":{"field":"created_time","format":"8uuuu-MM-dd","calendar_interval":"day","time_zone":"Europe/Prague"},"aggs":{"filter_insights_impressions_0":{"filter":{"bool":{"must":[{"term":{"facebook.is_admin_post":true}},{"terms":{"profile_id":["164929129743"]}}]}},"aggs":{"insights_impressions_0":{"sum":{"field":"insights.impressions"}}}}}}}}}}',
								querystring: 'ignore_unavailable=true',
								headers: {
									'user-agent':
										'elasticsearch-js/7.17.0 (linux 5.15.0-1026-aws-x64; Node.js v18.19.1)',
									'x-elastic-client-meta':
										'es=7.17.0,js=18.19.1,t=7.17.0,hc=18.19.1',
									'x-opaque-id':
										'#search_facebookPostsNextService<hera_omni-api',
									'content-type': 'application/json',
									'content-length': '1472',
								},
								timeout: 30000,
							},
							options: {
								opaqueId: '#search_facebookPostsNextService<hera_omni-api',
							},
							id: 2238,
						},
						name: 'elasticsearch-js',
						connection: {
							url: 'http://es14-client2.us-w2.aws.ccl:9200/',
							id: 'http://es14-client2.us-w2.aws.ccl:9200/',
							headers: {},
							deadCount: 0,
							resurrectTimeout: 0,
							_openRequests: 0,
							status: 'alive',
							roles: {
								master: true,
								data: true,
								ingest: true,
								ml: false,
							},
						},
						attempts: 0,
						aborted: false,
					},
				},
				header: [
					{
						type: 'Symbol(Date)',
						rows: [
							'2024-01-31',
							'2024-02-01',
							'2024-02-02',
							'2024-02-03',
							'2024-02-04',
							'2024-02-05',
							'2024-02-06',
							'2024-02-07',
							'2024-02-08',
							'2024-02-09',
							'2024-02-10',
							'2024-02-11',
							'2024-02-12',
							'2024-02-13',
							'2024-02-14',
							'2024-02-15',
							'2024-02-16',
							'2024-02-17',
							'2024-02-18',
							'2024-02-19',
							'2024-02-20',
							'2024-02-21',
							'2024-02-22',
							'2024-02-23',
							'2024-02-24',
							'2024-02-25',
							'2024-02-26',
							'2024-02-27',
							'2024-02-28',
							'2024-02-29',
						],
					},
					{
						type: 'target',
						rows: [
							{
								metric: 'insights_impressions',
								aggregation: 'sum',
							},
						],
					},
				],
				data: [
					[[720, 1]],
					[[16077, 2]],
					[[6237, 1]],
					[[0, 0]],
					[[0, 0]],
					[[6315, 2]],
					[[5051, 2]],
					[[6429, 2]],
					[[1773, 2]],
					[[251, 1]],
					[[3187, 1]],
					[[0, 0]],
					[[4970, 1]],
					[[329, 1]],
					[[1030, 1]],
					[[1949, 1]],
					[[2180, 1]],
					[[0, 0]],
					[[0, 0]],
					[[409, 1]],
					[[2099, 1]],
					[[2613, 2]],
					[[2416, 1]],
					[[5401, 1]],
					[[0, 0]],
					[[0, 0]],
					[[325, 1]],
					[[3058, 2]],
					[[2024, 1]],
					[[6111, 3]],
				],
			},
		],
	},
}

export const nevim = {
	config: {
		data: [
			{
				name: 'root',
				format: 'omni-full',
				source: '$input',
			},
		],
		formats: [
			{
				name: 'format',
				type: 'number',
			},
			{
				name: 'value',
				type: 'expr',
				expr: "(isNaN(value) || value === null) ? 'N/A' : ( value < 1000000 ? ((new Intl.NumberFormat('en-US', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(',', ' ') : (new Intl.NumberFormat('en-US', {notation: 'compact',maximumFractionDigits: 2})).format(value))",
			},
		],
		marks: [
			{
				type: 'text',
				name: 'Values',
				source: {
					data: 'root',
				},
				encode: {
					fontSize: 36,
					fill: '#444',
					text: {
						field: 'value',
						format: 'value',
					},
					anchorY: 'end',
					fontWeight: 'medium',
					anchorX: 'middle',
					y: {
						expr: "(signal('layout.top') + signal('layout.height') / 2 )",
					},
					x: {
						expr: "signal('container.width') / 2",
					},
				},
			},
			{
				type: 'text',
				name: 'Relative Change Text',
				encode: {
					text: '3 Feb 2024 - 3 Mar 2024',
					x: {
						expr: "(signal('container.width') / 2) - (signal('container.width') > 300 ? 40 : 0)",
					},
					anchorX: {
						expr: "signal('container.width') > 300 ? 'start' : 'middle'",
					},
					anchorY: 'middle',
					fontSize: 11,
					y: {
						expr: "signal('layout.top') +  ( signal('layout.height') / 2 ) + (signal('container.width') > 300 ? 30 : 50) ",
					},
				},
			},
		],
	},

	data: {
		header: [
			{
				type: 'target',
				rows: ['cardinality'],
			},
		],
		data: [37],
	},
}
