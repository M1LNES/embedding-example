import React from 'react'
import WidgetConfig from './widget-config'
import WidgetConfigRevealed from './widget-config-revealed'
import { object, bool, array, oneOfType } from 'prop-types'
import { Box, Divider, Tooltip } from '@mui/material'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { vision } from '../../../assets/embedding'
const Vision = vision.Vision
const VisionContextProvider = vision.VisionContextProvider

/** Component that visualises vision widget */
const WidgetVision = (props) => {
	const {
		data,
		prejson,
		showConfig = false,
		showConfigRevealed = false,
		dataRequests,
		expandedDataRequests,
	} = props

	return (
		<VisionContextProvider>
			<Box>
				<Box display='flex' alignItems='center'>
					{prejson.header.title && (
						<Box marginRight={1}>
							<h3 style={{ fontSize: 'medium' }}>{prejson.header.title}</h3>
						</Box>
					)}
					{prejson.header.tooltip && (
						<Tooltip title={prejson.header.tooltip}>
							<div>
								<QuestionMarkIcon fontSize='small' />
							</div>
						</Tooltip>
					)}
				</Box>

				{prejson.header.subtitle && (
					<Box fontSize='small'>{prejson.header.subtitle}</Box>
				)}
			</Box>
			<Divider textAlign='right'>
				<Box>
					{prejson.header.badges && (
						<>
							{prejson.header.badges.map((badge, index) => (
								<Tooltip title={badge.tooltip} key={index} marginRight={1}>
									<Box
										display='inline-block'
										padding='5px'
										borderRadius='20px'
										border='1px solid #ccc'
										backgroundColor='#f0f0f0'
										fontSize='small'
									>
										{badge.title}
									</Box>
								</Tooltip>
							))}
						</>
					)}
				</Box>
			</Divider>

			<Vision spec={prejson.vision} input={data} />
			<Box
				alignItems='center'
				display='flex'
				padding={1}
				color='#000'
				justifyContent='center'
			>
				© Data by Emplifi
			</Box>
			{showConfig && (
				<WidgetConfig prejson={prejson} dataRequests={dataRequests} />
			)}
			{showConfigRevealed && (
				<WidgetConfigRevealed
					prejson={prejson}
					expandedDataRequests={expandedDataRequests}
				/>
			)}
		</VisionContextProvider>
	)
}

WidgetVision.propTypes = {
	data: oneOfType([object, array]),
	prejson: object.isRequired,
	showConfig: bool,
	showConfigRevealed: bool,
	dataRequests: object,
	expandedDataRequests: oneOfType([object, array]),
}

export default WidgetVision
