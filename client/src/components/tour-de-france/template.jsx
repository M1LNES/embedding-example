/* eslint-disable react/prop-types */
import { Box, IconButton } from '@mui/material'
import React, { useState } from 'react'
import picture from '../images/tour.jpg'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SettingsIcon from '@mui/icons-material/Settings'

const Template = ({ children }) => {
	const [isHovered, setIsHovered] = useState(false)

	const headerStyle = {
		position: 'relative',
		margin: 0,
	}

	const controlPanelStyle = {
		position: 'absolute',
		top: '20px',
		left: 0,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between', // Align items to start and end
		backgroundColor: isHovered ? '#FFA500' : '#fff', // Orange background on hover
		padding: '10px',
		borderRadius: '5px',
		boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
		transition: 'background-color 0.3s ease',
	}

	const controlPanelImageStyle = {
		width: '40px',
		height: '40px',
		borderRadius: '50%',
		marginRight: '10px',
	}

	const handleControlPanelHover = () => {
		setIsHovered(true)
	}

	const handleControlPanelLeave = () => {
		setIsHovered(false)
	}

	const bodyStyle = {
		padding: '20px',
	}

	return (
		<Box padding={0} boxSizing='border-box' width='100%'>
			<header style={headerStyle}>
				<img src={picture} alt='Office' style={{ width: '100%' }} />
				<div
					style={controlPanelStyle}
					onMouseEnter={handleControlPanelHover}
					onMouseLeave={handleControlPanelLeave}
				>
					<img
						src={
							'https://seeklogo.com/images/L/le-tour-de-france-logo-FA3B4F291A-seeklogo.com.png'
						}
						alt='Control Panel'
						style={controlPanelImageStyle}
					/>
					<div style={{ marginLeft: 'auto' }}>
						{' '}
						<IconButton>
							<SettingsIcon />
						</IconButton>
					</div>
				</div>
			</header>
			<main style={bodyStyle}>{children}</main>
			<footer
				style={{
					textAlign: 'center',
					marginTop: '20px',
					backgroundColor: '#DDEBF7',
					padding: '10px',
				}}
			>
				<div>
					<a
						href='https://github.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<GitHubIcon
							style={{ fontSize: '24px', margin: '0 10px', color: '#2E86C1' }} // Blue color
						/>
					</a>
					<a
						href='https://twitter.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<XIcon
							style={{ fontSize: '24px', margin: '0 10px', color: '#2E86C1' }} // Blue color
						/>
					</a>
					<a
						href='https://www.linkedin.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<LinkedInIcon
							style={{ fontSize: '24px', margin: '0 10px', color: '#2E86C1' }} // Blue color
						/>
					</a>
				</div>
				<p style={{ fontSize: '14px', color: '#666' }}>
					© 2024 Embedding example. All rights reserved.
				</p>
			</footer>
		</Box>
	)
}

export default Template
