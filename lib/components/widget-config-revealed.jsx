import React from 'react'
import { object } from 'prop-types'

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
	expandedDataRequests: object.isRequired,
	prejson: object.isRequired,
}

export default WidgetConfigRevealed
