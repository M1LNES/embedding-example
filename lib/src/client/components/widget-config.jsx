import React from 'react'
import { object, array, oneOfType } from 'prop-types'

/**
 *  Component used for showing NOT expanded data requests and widget configs.
 *
 * @param {object, array} dataRequests Not expanded data requests.
 * @param {object} prejson Expanded vision config.
 * @returns {React.ReactElement} Not revealed data requests component.
 */
const WidgetConfig = (props) => {
	const { prejson, dataRequests } = props
	return (
		<div>
			<h5>Vision config:</h5> {JSON.stringify(prejson)}
			<h5>Requests:</h5> {JSON.stringify(dataRequests)}
		</div>
	)
}

WidgetConfig.propTypes = {
	dataRequests: oneOfType([object, array]),
	prejson: object.isRequired,
}
export default WidgetConfig
