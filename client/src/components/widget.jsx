import React, { useMemo } from 'react'
// import { PreJSONContext, PreJSONType } from '@sbks/prejson'
// import {
// 	fetchWidgetData,
// fetchDataAllRequests,
// fetchBoardFields,
// } from '../scripts/widget-config'
import WidgetVision from './widget-vision'
import { useQuery } from '@tanstack/react-query'
import { Box } from '@mui/material'
import {
	BOARD_WIDGET_FIELD_TYPE_TO_PREJSON_TYPE,
	parseJSON,
} from '../functions/functions'
import { previousSuite } from '../functions/prejson-suite'
import { PreJSONContext, PreJSONType } from '../app'
import {
	fetchWidgetData,
	fetchDataAllRequests,
	fetchBoardFields,
} from '../functions/widget-config'

const Widget = (props) => {
	const { boardID, widgetID, params, className, style, width, height } = props
	const parsedParams = useMemo(() => {
		const parsedData = parseJSON(params)
		if (!Array.isArray(parsedData) || Object.keys(parsedData).length === 0) {
			return {}
		}

		const result = Object.fromEntries(
			parsedData.map(({ value, name }) => [name, value])
		)

		return result
	}, [params])

	const parsedStyle = parseJSON(style)

	const { data: fieldsToDeclare, isLoading: areFieldsLoading } = useQuery({
		queryKey: ['fieldsToDeclare', boardID],
		queryFn: async () => await fetchBoardFields(boardID),
	})
	const context = useMemo(() => {
		const preJsonContext = new PreJSONContext({
			debug: true,
		}).declare('data', PreJSONType.Object, null)

		if (fieldsToDeclare && !areFieldsLoading) {
			fieldsToDeclare.forEach((field) => {
				const { name, type } = field
				preJsonContext.declare(
					name,
					BOARD_WIDGET_FIELD_TYPE_TO_PREJSON_TYPE[type],
					null
				)
			})
		}
		return preJsonContext.addModifier(previousSuite)
	}, [fieldsToDeclare, areFieldsLoading])

	const { data: widgetData, isLoading: isWidgetDataLoading } = useQuery({
		queryKey: ['widget', boardID, widgetID],
		queryFn: async () => await fetchWidgetData(boardID, widgetID),
	})
	const requestsNotExpanded = useMemo(() => {
		if (!isWidgetDataLoading && widgetData.requests) {
			return context.parse(widgetData.requests)
		}
	}, [widgetData, context, isWidgetDataLoading])
	const { expandedRequests, errorExpandedConfig } = useMemo(() => {
		if (widgetData === 'Not found') {
			return {
				expandedRequests: null,
				errorExpandedConfig: `Widget ${widgetID} not found on board ${boardID}!`,
			}
		}
		if (!isWidgetDataLoading && widgetData.requests) {
			if (!requestsNotExpanded.isValid) {
				return {
					expandedRequests: null,
					errorExpandedConfig:
						'Data request expanded config PreJSON is not valid.',
				}
			}
			if (parsedParams === null) {
				return {
					expandedRequests: null,
					errorExpandedConfig: 'Inserted preJSON params are not valid!',
				}
			}

			const undefinedParams = requestsNotExpanded.getUndefinedParameters()
			const areAllKeysInserted = undefinedParams.every(
				(key) => key in parsedParams
			)
			if (!areAllKeysInserted) {
				return {
					expandedRequests: null,
					errorExpandedConfig:
						'Error - you must specify all PreJSON params that widget is depended on!',
				}
			}

			try {
				return {
					expandedRequests: requestsNotExpanded.expand(parsedParams).toJSON(),
					errorExpandedConfig: null,
				}
			} catch (e) {
				return {
					expandedRequests: null,
					errorExpandedConfig: 'Error occured during expanding request.',
				}
			}
		}
		return { expandedRequests: null, errorExpandedConfig: null }
	}, [
		widgetData,
		parsedParams,
		requestsNotExpanded,
		isWidgetDataLoading,
		boardID,
		widgetID,
	])

	const { data, isLoading } = useQuery({
		queryKey: ['data', boardID, widgetID, expandedRequests],
		queryFn: async () => await fetchDataAllRequests(expandedRequests),
		enabled: !!widgetData && !!widgetData.requests && !!expandedRequests,
	})
	const { prejson, errorVisionConfig } = useMemo(() => {
		if (!isWidgetDataLoading && !isLoading && widgetData !== 'Not found') {
			context.setParameterValue('data', data)
			if (!context.parse(widgetData.config).isValid) {
				return { prejson: null, errorVisionConfig: 'PreJSON is not valid' }
			}

			if (parsedParams === null) {
				return {
					expandedRequests: null,
					errorVisionConfig: 'Inserted preJSON params are not valid!',
				}
			}
			return {
				prejson: context.parse(widgetData.config).expand(parsedParams).toJSON(),
				errorVisionConfig: null,
			}
		}
		return { prejson: null, errorVisionConfig: 'Data not loaded' }
	}, [widgetData, parsedParams, data, context, isLoading, isWidgetDataLoading])
	if (isWidgetDataLoading || isLoading) {
		return <h2>Fetching data...</h2>
	} else if (errorVisionConfig !== null || errorExpandedConfig !== null) {
		return <h1>{errorExpandedConfig || errorVisionConfig}</h1>
	} else {
		return (
			<Box
				height={height}
				width={width}
				className={className}
				style={parsedStyle}
				display='flex'
				flexDirection='column'
				overflow='clip'
			>
				{(() => {
					switch (widgetData.type) {
						case 'vision':
							return (
								<WidgetVision
									{...props}
									data={data}
									prejson={prejson}
									dataRequests={requestsNotExpanded}
									expandedDataRequests={expandedRequests}
								/>
							)
						default:
							return <h1>Unknown type of widget</h1>
					}
				})()}
			</Box>
		)
	}
}

export default Widget
