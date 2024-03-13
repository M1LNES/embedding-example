const express = require('express')
const axios = require('axios')
const apiRouter = express.Router()

apiRouter.post('/widget-data', async (req, res) => {
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

apiRouter.get('/board-fields/:boardID', async (req, res) => {
	const { boardID } = req.params

	try {
		const public_url = process.env.PUBLIC_API_URL + '/3/omni-studio'
		const pathUrl = `/api/0/boards/${boardID}/fields`

		const payload = {
			method: 'GET',
			path: pathUrl,
			headers: {
				authorization: `Bearer ${process.env.OMNI_API_TOKEN}`,
			},
		}

		const response = await axios.post(public_url, payload, {
			headers: {
				Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
				'content-type': `application/json`,
				'x-sbks-token': `oauth`,
			},
		})

		res.json(response.data)
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Error during fetching data from the Omni Studio API' })
	}
})

apiRouter.get('/widget-config/:boardID', async (req, res) => {
	const { boardID } = req.params

	try {
		const public_url = process.env.PUBLIC_API_URL + '/3/omni-studio'
		const pathUrl = `/api/0/boards/${boardID}/widgets`
		const payload = {
			method: 'GET',
			path: pathUrl,
			headers: {
				authorization: `Bearer ${process.env.OMNI_API_TOKEN}`,
			},
		}

		const response = await axios.post(public_url, payload, {
			headers: {
				Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
				'content-type': `application/json`,
				'x-sbks-token': `oauth`,
			},
		})
		res.json(response.data)
	} catch (error) {
		res
			.status(500)
			.json({ error: 'Error during fetching data from the Omni Studio API' })
	}
})

module.exports = apiRouter
