const express = require('express')
const axios = require('axios')
const apiRouter = express.Router()

/**
 * POST endpoint to fetch data for widgets.
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body containing payload and path.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing widget data or error message.
 */
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

/**
 * GET endpoint to fetch board fields with specified ID.
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Parameters extracted from the URL.
 * @param {string} req.params.boardID - Board ID.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing board fields or error message.
 */
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

/**
 * GET endpoint to fetch widget configuration with specified board ID.
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Parameters extracted from the URL.
 * @param {string} req.params.boardID - Board ID.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing widget configuration or error message.
 */
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
