export const alert_chart_schema = {
	data: [
		{
			name: 'root',
			source: '$input',
			format: 'omni-full',
			transform: [
				{
					type: 'parse',
					field: 'dim0',
					as: 'datetime',
				},
			],
		},
	],
	scales: [
		{
			type: 'time',
			name: 'x',
			domain: {
				field: 'dim0',
			},
			range: 'width',
		},
		{
			type: 'linear',
			name: 'y',
			domain: {
				field: 'value',
			},
			range: 'height',
		},
	],
	formats: [
		{
			name: 'y',
			type: 'number',
			options: {},
		},
	],
	axes: [
		{
			scale: 'x',
			orientation: 'bottom',
			caption: 'Date range',
			name: 'Date range',
		},
		{
			scale: 'y',
			orientation: 'left',
			caption: 'Doc count',
			name: 'Doc count',
			format: 'y',
			grid: true,
		},
	],
	marks: [
		{
			type: 'line',
			source: 'root',
			encode: {
				x: {
					field: 'dim0',
					scale: 'x',
				},
				y: {
					field: 'value',
					scale: 'y',
				},
				stroke: '#3f51b5',
			},
			name: 'Line',
		},
		{
			type: 'point',
			source: 'root',
			encode: {
				glyph: 'circle',
				x: {
					field: 'dim0',
					scale: 'x',
				},
				y: {
					field: 'value',
					scale: 'y',
				},
				fill: '#3f51b5',
				':hover': {
					stroke: '#3f51b5',
					strokeOpacity: 0.3,
					strokeWidth: 10,
				},
			},
			name: 'Datapoints',
			tooltip: {
				'Date range': {
					field: 'dim0',
				},
				'Doc count': {
					field: 'value',
				},
			},
		},
	],
}

export const ua_schema = {
	data: [
		{
			name: 'current',
			path: [0],
			format: 'omni-full',
			source: '$input',
		},
		{
			name: 'previous',
			path: [1],
			format: 'omni-full',
			source: '$input',
		},
	],
	formats: [
		{
			name: 'value',
			type: 'expr',
			expr: "(isNaN(value) || value === null) ? 'N/A' : ( value < 1000000 ? ((new Intl.NumberFormat('en-US', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(',', ' ') : (new Intl.NumberFormat('en-US', {notation: 'compact',maximumFractionDigits: 2})).format(value))",
		},
		{
			type: 'expr',
			name: 'percentage',
			expr: "(isNaN(value) || value === null) ? 'N/A' : (new Intl.NumberFormat('en-US', {notation: 'compact', maximumFractionDigits: 2, signDisplay: 'exceptZero', style: 'percent'})).format(value)",
		},
	],
	scales: [
		{
			type: 'threshold',
			name: 'color',
			domain: [0],
			range: ['#DA1E28', '#24A148'],
		},
	],
	marks: [
		{
			type: 'text',
			name: 'Current Value',
			source: {
				data: 'current',
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
					expr: "(signal('layout.top') + signal('layout.height') / 2 ) - 15",
				},
				x: {
					expr: "signal('container.width') / 2",
				},
			},
		},
		{
			type: 'text',
			name: 'Relative Change Value',
			source: {
				data: 'previous',
			},
			encode: {
				y: {
					expr: "signal('layout.top') +  ( signal('layout.height') / 2 ) + 30",
				},
				fill: {
					field: 'value',
					expr: "dataset('current')[index].value === null || datum.value === 0 || datum.value === null ? 'black' :scale('color', ((dataset('current')[index].value - datum.value) / Math.abs(datum.value)))",
				},
				text: {
					field: 'value',
					format: 'percentage',
					expr: "dataset('current')[index].value === null || datum.value === 0 || datum.value === null ? 'N/A' : ((dataset('current')[index].value - datum.value) / Math.abs(datum.value))",
				},
				fontSize: 14,
				fontWeight: 'bold',
				anchorX: {
					expr: "signal('container.width') > 300 ? 'end' : 'middle'",
				},
				anchorY: 'middle',
				x: {
					expr: "(signal('container.width') / 2) - (signal('container.width') > 300 ? 45 : 0)",
				},
			},
		},
		{
			type: 'text',
			name: 'Relative Change Text',
			encode: {
				text: 'vs 17 Dec 2023 - 15 Jan 2024',
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
		{
			type: 'text',
			name: 'MetricName',
			source: {
				data: 'current',
			},
			encode: {
				fontSize: 11,
				fill: '#757575',
				x: {
					signal: 'container.width',
					mult: 0.5,
				},
				anchorX: 'middle',
				y: {
					expr: "(signal('layout.top') + signal('layout.height') / 2) + 5",
				},
				anchorY: 'end',
				text: 'Followers',
			},
		},
	],
}
