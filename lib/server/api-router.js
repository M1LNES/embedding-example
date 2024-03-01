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

/* Rest of the endpoint is right now not needed - they are mainly to Omni Studio API for downloading 
   widgets, or controlling/creating tokens (which is right now not "needed", because Public API token
   is stored in .env, not in local storage because of downloading libraries after npm i
   )
*/
module.exports = apiRouter
