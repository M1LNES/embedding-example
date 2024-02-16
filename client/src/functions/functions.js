export async function fetchDataAllRequests(requestsExpanded) {
	const fetchedData = Array.isArray(requestsExpanded)
		? await Promise.all(
				requestsExpanded.map(async (request) => {
					return await fetchDataFromRequest(request.path, request.payload)
				})
		  )
		: await fetchDataFromRequest(
				requestsExpanded.path,
				requestsExpanded.payload
		  )
	if (fetchedData === null) {
		return null
	}

	return fetchedData
}

async function fetchDataFromRequest(path, payload) {
	try {
		const token_response = await fetch('/get-token', {
			method: 'GET',
		})

		const token = await token_response.json()

		const response = await fetch('/api/widget-data', {
			method: 'GET',
			headers: {
				'X-Path': path,
				'X-Payload': JSON.stringify(payload),
				'X-Token': token.token,
			},
		})

		if (!response.ok) {
			throw new Error('CHYBA')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.error('CHYBA:', error)
		return null
	}
}
