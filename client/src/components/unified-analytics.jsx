import React, { useState } from 'react'

import Widget from './widget'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const UnifiedAnalytics = () => {
	const [selectBoxValue, setSelectBoxValue] = useState('P7D/now[sD]')

	const handleChange = (e) => {
		setSelectBoxValue(e.target.value)
	}
	return (
		<div style={containerStyle}>
			{/* Header */}
			<div
				style={{
					...headerStyle,
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div>
					<h1 style={titleStyle}>Unified Analytics charts</h1>
					<p style={subtitleStyle}>Last update: 02/19/2024</p>
				</div>

				<div>
					<FormControl>
						<InputLabel id='demo-simple-select-label'>Period</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={selectBoxValue}
							label='Date Range'
							onChange={handleChange}
						>
							<MenuItem value={'P7D/now[sD]'}>Last Week</MenuItem>
							<MenuItem value={'P10D/now[sD]'}>Last 10 days</MenuItem>
							<MenuItem value={'P30D/now[sD]'}>Last 30 Days</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>

			{/* Body */}
			<main style={bodyStyle}>
				<Widget
					boardID={2197}
					widgetID={35914}
					style={
						'{"backgroundColor": "#f0f0f0", "border": "1px solid #ccc", "borderRadius": "5px", "padding": "20px", "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)", "marginBottom": "20px"}'
					}
					params={`[
								{
									"value": "${selectBoxValue}",
									"name": "daterange",
									"type": "daterange"
								},
								{
									"value": "172196",
									"name": "acl_account_id",
									"type": "string"
								},
								{
									"value": "213866",
									"name": "user_acl_id",
									"type": "string"
								},
								{
									"value": [
									{
										"value": "164929129743",
										"title": "Emplifi",
										"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-1/355016801_661576652675049_7066463062716805627_n.png?stp=dst-png_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=4da83f&_nc_ohc=EChojOEb2rIAX-kZ1fl&_nc_ht=scontent-sea1-1.xx&edm=AJdBtusEAAAA&oh=00_AfClcKsCoiwHD1VU-0AQKK8MAS8j9QHSpoyoO539sAYNpQ&oe=65D799A6",
										"link": "https://www.facebook.com/Emplifi",
										"network": "facebook",
										"screenName": "Emplifi"
									}
									],
									"name": "fbProfiles",
									"type": "array"
								}
								]`}
				/>
				<Widget
					boardID={2197}
					widgetID={35924}
					height={800}
					style={
						'{"backgroundColor": "#f0f0f0", "border": "1px solid #ccc", "borderRadius": "5px", "padding": "20px", "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)", "marginBottom": "20px"}'
					}
					params={`[
								{
									"value": "${selectBoxValue}",
									"name": "daterange",
									"type": "daterange"
								},
								{
									"value": "172196",
									"name": "acl_account_id",
									"type": "string"
								},
								{
									"value": "213866",
									"name": "user_acl_id",
									"type": "string"
								},
								{
									"value": [
									{
										"value": "164929129743",
										"title": "Emplifi",
										"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-1/355016801_661576652675049_7066463062716805627_n.png?stp=dst-png_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=4da83f&_nc_ohc=EChojOEb2rIAX-kZ1fl&_nc_ht=scontent-sea1-1.xx&edm=AJdBtusEAAAA&oh=00_AfClcKsCoiwHD1VU-0AQKK8MAS8j9QHSpoyoO539sAYNpQ&oe=65D799A6",
										"link": "https://www.facebook.com/Emplifi",
										"network": "facebook",
										"screenName": "Emplifi"
									}
									],
									"name": "fbProfiles",
									"type": "array"
								}
								]`}
				/>
				<Widget
					boardID={2197}
					widgetID={35916}
					height={900}
					style={
						'{"backgroundColor": "#f0f0f0", "border": "1px solid #ccc", "borderRadius": "5px", "padding": "20px", "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)", "marginBottom": "20px"}'
					}
					params={`[
								{
									"value": "${selectBoxValue}",
									"name": "daterange",
									"type": "daterange"
								},
								{
									"value": "172196",
									"name": "acl_account_id",
									"type": "string"
								},
								{
									"value": "213866",
									"name": "user_acl_id",
									"type": "string"
								},
								{
									"value": [
									{
										"value": "164929129743",
										"title": "Emplifi",
										"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-1/355016801_661576652675049_7066463062716805627_n.png?stp=dst-png_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=4da83f&_nc_ohc=EChojOEb2rIAX-kZ1fl&_nc_ht=scontent-sea1-1.xx&edm=AJdBtusEAAAA&oh=00_AfClcKsCoiwHD1VU-0AQKK8MAS8j9QHSpoyoO539sAYNpQ&oe=65D799A6",
										"link": "https://www.facebook.com/Emplifi",
										"network": "facebook",
										"screenName": "Emplifi"
									}
									],
									"name": "fbProfiles",
									"type": "array"
								}
								]`}
				/>
				<Widget
					boardID={2197}
					widgetID={35912}
					style={
						'{"backgroundColor": "#f0f0f0", "border": "1px solid #ccc", "borderRadius": "5px", "padding": "20px", "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)", "marginBottom": "20px"}'
					}
					params={`[
								{
									"value": "${selectBoxValue}",
									"name": "daterange",
									"type": "daterange"
								},
								{
									"value": "172196",
									"name": "acl_account_id",
									"type": "string"
								},
								{
									"value": "213866",
									"name": "user_acl_id",
									"type": "string"
								},
								{
									"value": [
									{
										"value": "164929129743",
										"title": "Emplifi",
										"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-1/355016801_661576652675049_7066463062716805627_n.png?stp=dst-png_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=4da83f&_nc_ohc=EChojOEb2rIAX-kZ1fl&_nc_ht=scontent-sea1-1.xx&edm=AJdBtusEAAAA&oh=00_AfClcKsCoiwHD1VU-0AQKK8MAS8j9QHSpoyoO539sAYNpQ&oe=65D799A6",
										"link": "https://www.facebook.com/Emplifi",
										"network": "facebook",
										"screenName": "Emplifi"
									}
									],
									"name": "fbProfiles",
									"type": "array"
								}
								]`}
				/>
			</main>

			{/* Footer */}
			<footer style={footerStyle}>
				<p style={footerTextStyle}>© {new Date().getFullYear()} Emplifi a.s.</p>
			</footer>
		</div>
	)
}

const containerStyle = {
	width: '1000px',
	margin: '0 auto',
	padding: '20px',
	border: '1px solid #ccc',
	borderRadius: '5px',
	boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}

const headerStyle = {
	marginBottom: '20px',
}

const titleStyle = {
	fontSize: '24px',
	fontWeight: 'bold',
	marginBottom: '5px',
}

const subtitleStyle = {
	fontSize: '16px',
	color: '#666',
}

const bodyStyle = {
	marginBottom: '20px',
}

const footerStyle = {
	borderTop: '1px solid #ccc',
	paddingTop: '10px',
	textAlign: 'center',
}

const footerTextStyle = {
	fontSize: '14px',
	color: '#666',
}

export default UnifiedAnalytics
