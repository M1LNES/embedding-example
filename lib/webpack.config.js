const path = require('path')

module.exports = [
	{
		entry: './src/index.js',
		mode: 'production',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					options: { presets: ['@babel/env', '@babel/preset-react'] },
				},
			],
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json'],
		},
		output: {
			path: path.resolve(__dirname, './dist'),
			publicPath: '/',
			filename: 'empli-embed.js',
			library: 'EmpliEmbed',
			libraryTarget: 'umd',
		},
		externals: {
			react: {
				commonjs: 'react',
				commonjs2: 'react',
				root: 'React',
			},
			'react-dom': {
				commonjs: 'react-dom',
				commonjs2: 'react-dom',
				root: 'ReactDOM',
			},
		},
	},
	{
		mode: 'production',
		entry: './src/backend.js',
		output: {
			path: path.join(__dirname, 'dist'),
			publicPath: '/',
			filename: 'empli-embed-backend.js',
			library: 'EmpliEmbedBackend',
			libraryTarget: 'umd',
		},
		target: 'node',
	},
]
