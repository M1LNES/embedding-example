const express = require('express')
const cors = require('cors')
const path = require('path')

const historyApiFallback = require('express-history-api-fallback')
const devHistoryApiFallback = require('./dev-history-api-fallback')

const app = express()
app.use(cors())
app.use(express.json())
const axios = require('axios')

require('dotenv').config()

const port = process.env.PORT || 5000
const DIST_DIR = path.resolve(__dirname, '../dist')

const start = () => {
	let wdMiddleware = null

	if (process.env.NODE_ENV === 'production') {
		app.use('/vendor', express.static(path.resolve(DIST_DIR, 'vendor')))
		app.use(express.static(DIST_DIR))
		app.use(
			historyApiFallback('index.html', {
				root: DIST_DIR,
			})
		)
	} else {
		const webpackDevMiddleware = require('webpack-dev-middleware')
		const config = require('../webpack.config.dev')
		const compiler = require('webpack')(config)
		wdMiddleware = webpackDevMiddleware(compiler)

		app.use(require('webpack-hot-middleware')(compiler))
		app.use(wdMiddleware)
		app.use(devHistoryApiFallback(wdMiddleware, config))
	}

	return new Promise((resolve) => {
		app.listen(port, function () {
			console.log(`listening on port http://localhost:${port}`)
			resolve(this)
		})
	})
}

app.post('/api/widget-data', async (req, res) => {
	const { payload, path } = req.body
	const url = process.env.PUBLIC_API_URL + '/3/omni/metrics'
	try {
		const response = await axios.post(url, payload, {
			headers: {
				Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
				'content-type': `application/json`,
				'x-sbks-token': `oauth`,
				'x-sbks-data-endpoint': `POST ${path}`,
			},
		})
		res.json(response.data)
	} catch (error) {
		res.status(500).json({ error: error })
	}
})

app.get('/api/get-token', (req, res) => {
	const token = process.env.ACCESS_TOKEN
	res.status(200).json({ token })
})

start().catch((e) => {
	console.log(e)
})

app.use('/healthcheck', (req, res) => res.sendStatus(200))
