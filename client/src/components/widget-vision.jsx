import React from 'react'
import { Vision, VisionContextProvider } from '../app'

/** Component that visualises vision widget */
const WidgetVision = (props) => {
	const {
		data,
		prejson,
		// showConfig = false,
		// showConfigRevealed = false,
		// dataRequests,
		// expandedDataRequests,
	} = props

	return (
		<VisionContextProvider>
			{prejson.header.title && <p>Title: {prejson.header.title}</p>}
			{prejson.header.tooltip && <p>Tooltip: {prejson.header.tooltip}</p>}
			{prejson.header.subtitle && <p>Subtitle: {prejson.header.subtitle}</p>}

			{prejson.header.badges && (
				<>
					Badges:
					<br />
					{prejson.header.badges.map((badge, index) => (
						<div key={index}>
							<p>
								Title{index}: {badge.title}
							</p>
							<p>Tooltip: {badge.tooltip}</p>
						</div>
					))}
				</>
			)}
			<Vision spec={prejson.vision} input={data} />
		</VisionContextProvider>
	)
}

export default WidgetVision
