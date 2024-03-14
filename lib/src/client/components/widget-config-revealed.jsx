import React from 'react'
import { object, oneOfType, array } from 'prop-types'

/**
 *  Component used for showing expanded data requests and widget configs.
 *
 * @param {object, array} expandedDataRequests Expanded data requests.
 * @param {object} prejson Expanded vision config.
 * @returns {React.ReactElement} Revealed data requests component.
 */
const WidgetConfigRevealed = (props) => {
	const { prejson, expandedDataRequests } = props

	return (
		<div>
			<h5>Vision config revealed:</h5> {JSON.stringify(prejson)}
			<h5>Requests revealed:</h5> {JSON.stringify(expandedDataRequests)}
		</div>
	)
}

WidgetConfigRevealed.propTypes = {
	expandedDataRequests: oneOfType([object, array]),
	prejson: object.isRequired,
}

export default WidgetConfigRevealed
