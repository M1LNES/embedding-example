/* eslint-disable no-mixed-spaces-and-tabs */
import board1684 from '../board-configs/board1684'
import board2197 from '../board-configs/board2197'
import board795 from '../board-configs/board795'
import { PUBLIC_API_DATA_FETCHING_ERROR } from '../constants/api-messages'
import board2198 from '../board-configs/board2198'
const boards = {
	795: board795,
	2198: board2198,
	1684: board1684,
	2197: board2197,
}

/**
 *  Fetching widget config from Omni API.
 *
 * @param {number} boardID - ID of the board.
 * @param {number} widgetID - ID of the widget.
 * @returns {object|null|string} - Widget config if widget on that board is found,
 * 								   or 'Not found' if widget is not found on that board,
 * 								   or null if error occured during fetching.
 */
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

/**
 *  Fetching data from Emplifi Public API.
 *
 * @param {string} path - Endpoint in Emplifi Public API that returns data.
 * @param {object} payload - Request payload (structure).
 * @returns {object|null} - Fetched object if request was successfull,
 * 							or null if error occured during fetching.
 */
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
			throw new Error(PUBLIC_API_DATA_FETCHING_ERROR)
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.error(PUBLIC_API_DATA_FETCHING_ERROR)
		return null
	}
}

/**
 * Fetches all data requests from expanded data request.
 * @param {Array|Object} requestsExpanded - Expanded request(s) (if only one request - object, otherwise array).
 * @returns {Promise<Array|Object>} A promise with fetched data (for multiple requests array, for onee request object).
 */
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

	return fetchedData
}

/**
 * Fetches the widgets fields of a board from Omni API.
 * @param {string} boardID - ID of the board.
 * @returns {Promise<Object|null>} A promise with an object containing the fields of the board,
 *                                  or null if an error occurs during fetching.
 */
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
