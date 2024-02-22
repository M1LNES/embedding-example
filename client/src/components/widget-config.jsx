import React from 'react'
import { object } from 'prop-types'

/** Component that shows info about widget */
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
	dataRequests: object,
	prejson: object.isRequired,
}
export default WidgetConfig
