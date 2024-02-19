import { prejson } from './../../../assets/embedding'
const PreJSONType = prejson.PreJSONType

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

// async function fetchDataFromRequest(path, payload) {
// 	try {
// 		const token_response = await fetch('/api/get-token', {
// 			method: 'GET',
// 		})

// 		const token = await token_response.json()

// 		const response = await fetch('/api/widget-data', {
// 			method: 'GET',
// 			headers: {
// 				'X-Path': path,
// 				'X-Payload': JSON.stringify(payload),
// 				'X-Token': token.token,
// 			},
// 		})

// 		if (!response.ok) {
// 			throw new Error('CHYBA')
// 		}
// 		const data = await response.json()
// 		return data
// 	} catch (error) {
// 		console.error('CHYBA:', error)
// 		return null
// 	}
// }

export const parseJSON = (str) => {
	try {
		return JSON.parse(str)
	} catch (e) {
		return null
	}
}

const BOARD_WIDGET_FIELD_TYPE = {
	STRING: 'string',
	NUMBER: 'number',
	BOOLEAN: 'boolean',
	ENUM: 'enum',
	OBJECT_ENUM: 'object_enum',
	LIST: 'list',
	DATETIME: 'datetime',
	DATERANGE: 'daterange',
	BISTATE: 'bistate',
	SLIDER: 'slider',
	TIMER: 'timer',
}

export const BOARD_WIDGET_FIELD_TYPE_TO_PREJSON_TYPE = {
	[BOARD_WIDGET_FIELD_TYPE.STRING]: PreJSONType.String,
	[BOARD_WIDGET_FIELD_TYPE.NUMBER]: PreJSONType.Number,
	[BOARD_WIDGET_FIELD_TYPE.BOOLEAN]: PreJSONType.Boolean,
	[BOARD_WIDGET_FIELD_TYPE.ENUM]: PreJSONType.String,
	[BOARD_WIDGET_FIELD_TYPE.OBJECT_ENUM]: PreJSONType.Object,
	[BOARD_WIDGET_FIELD_TYPE.LIST]: PreJSONType.Array,
	[BOARD_WIDGET_FIELD_TYPE.BISTATE]: PreJSONType.String,
	[BOARD_WIDGET_FIELD_TYPE.DATETIME]: PreJSONType.DateTime,
	[BOARD_WIDGET_FIELD_TYPE.DATERANGE]: PreJSONType.DateRange,
	[BOARD_WIDGET_FIELD_TYPE.SLIDER]: PreJSONType.Number,
	[BOARD_WIDGET_FIELD_TYPE.TIMER]: PreJSONType.Object,
}
