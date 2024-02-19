import board1684 from '../schemas/board-schemas/board1684'
import board2197 from '../schemas/board-schemas/board2197'
const boards = {
	1684: board1684,
	2197: board2197,
}

/* eslint-disable no-mixed-spaces-and-tabs */
async function fetchWidgetData(boardID, widgetID) {
	try {
		const board = boards[boardID]
		const widgets = board.widgets
		const result = widgets.find((item) => item.id === widgetID)
		return result ? result : 'Not found'
	} catch (error) {
		console.error('Error fetching board fields:', error)
		return null
	}
	// try {
	// 	const response = await fetch(`/api/widget-config/${boardID}`, {
	// 		method: 'GET',
	// 		headers: {
	// 			'X-OSToken': localStorage.getItem('omni-studio-api-access-token'),
	// 		},
	// 	})

	// 	if (!response.ok) {
	// 		throw new Error('OMNI_STUDIO_FETCHING_WIDGET_ERROR')
	// 	}
	// 	const data = await response.json()
	// const result = data.find((item) => item.id === widgetID)
	// return result ? result : 'Not found'
	// } catch (error) {
	// 	console.error('OMNI_STUDIO_FETCHING_WIDGET_ERROR')
	// 	return null
	// }
}

async function fetchDataFromRequest(path, payload) {
	try {
		const response = await fetch('/api/widget-data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				path: path,
				payload: payload,
			}),
		})

		if (!response.ok) {
			throw new Error('PUBLIC_API_DATA_FETCHING_ERROR')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.error('PUBLIC_API_DATA_FETCHING_ERROR')
		return null
	}
}

async function fetchDataAllRequests(requestsExpanded) {
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

async function fetchBoardFields(boardID) {
	try {
		const board = boards[boardID]
		return board.fields
	} catch (error) {
		console.error('Error fetching board fields:', error)
		return null
	}

	// try {
	// 	const response = await fetch(`/api/board-fields/${boardID}`, {
	// 		method: 'GET',
	// 		headers: {
	// 			'X-OSToken': localStorage.getItem('omni-studio-api-access-token'),
	// 		},
	// 	})

	// 	if (!response.ok) {
	// 		throw new Error('Error during fetching fields from board.')
	// 	}
	// 	const data = await response.json()
	// 	return data
	// } catch (error) {
	// 	console.error('Error during fetching fields from board.')
	// 	return null
	// }
}

export {
	fetchWidgetData,
	fetchDataFromRequest,
	fetchDataAllRequests,
	fetchBoardFields,
}
