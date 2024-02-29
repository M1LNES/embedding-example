import React from 'react'
import WidgetConfig from './widget-config'
import WidgetConfigRevealed from './widget-config-revealed'
import { object, bool, array, oneOfType } from 'prop-types'
import { Box, Stack, Tooltip } from '@mui/material'
import { vision } from '../../../assets/embedding'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const Vision = vision.Vision
const VisionContextProvider = vision.VisionContextProvider

/**
 * @param {object, array} data Fetched data (array for multiple request, object for only one).
 * @param {object} prejson Expanded vision config.
 * @param {boolean} showConfig Not revealed config showed in visualization.
 * @param {boolean} showConfigRevealed Revealed config showed in visualization.
 * @param {object, array} dataRequests Not expanded data requests.
 * @param {Array|Object} requestsExpanded - Expanded request(s) (if only one request - object, otherwise array).
 * @returns {React.ReactElement} Vision component.
 */
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
			<Stack
				direction='row'
				alignItems='center'
				spacing={1}
				marginTop={0.5}
				marginLeft={1}
			>
				{prejson.header.title && (
					<Box
						variant='h3'
						fontWeight='bold'
						fontFamily='sans-serif'
						fontSize='large'
					>
						{prejson.header.title}
					</Box>
				)}
				{prejson.header.tooltip && (
					<Tooltip title={prejson.header.tooltip}>
						<div>
							<HelpOutlineIcon fontSize='small' />
						</div>
					</Tooltip>
				)}
			</Stack>
			<Stack
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				marginTop={0.5}
				marginLeft={1}
			>
				{prejson.header.subtitle && (
					<Box
						variant='subtitle1'
						color='textSecondary'
						fontFamily='sans-serif'
						fontSize='small'
					>
						{prejson.header.subtitle}
					</Box>
				)}
				<Stack direction='row' alignItems='center'>
					{prejson.header.badges?.map((badge, index) => (
						<Tooltip
							title={badge.tooltip}
							key={index}
							marginRight={1}
							padding='1px 8px 1px'
						>
							<Box borderRadius='10px' border='1px solid #ccc' fontSize='small'>
								{badge.title}
							</Box>
						</Tooltip>
					))}
				</Stack>
			</Stack>

			<Vision spec={prejson.vision} input={data} />
			<Box
				align='center'
				display='flex'
				padding={1}
				color='#000'
				fontFamily='sans-serif'
				justifyContent='center'
				fontSize='small'
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
