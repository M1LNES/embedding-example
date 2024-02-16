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

		if (token_response.ok) {
			const token = await token_response.json()
			console.log('Token:', token)
		} else {
			console.error('Failed to fetch token:', token_response.statusText)
		}

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
