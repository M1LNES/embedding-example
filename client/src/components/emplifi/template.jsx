/* eslint-disable react/prop-types */
import { Box } from '@mui/material'
import React from 'react'
import picture from '../images/Wallpaper_3.png'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Template = ({ children }) => {
	const headerStyle = {
		position: 'relative',
		margin: 0,
	}

	const bodyStyle = {
		padding: '20px',
	}

	return (
		<Box padding={0} margin={-2} boxSizing='border-box'>
			<header style={headerStyle}>
				<img src={picture} alt='Office' style={{ width: '100%' }} />
			</header>
			<main style={bodyStyle}>{children}</main>
			<footer
				style={{
					textAlign: 'center',
					marginTop: '20px',
					backgroundColor: '#E0E8F9',
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
							style={{ fontSize: '24px', margin: '0 10px', color: '#000' }}
						/>
					</a>
					<a
						href='https://twitter.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<XIcon
							style={{ fontSize: '24px', margin: '0 10px', color: '#000' }}
						/>
					</a>
					<a
						href='https://www.linkedin.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<LinkedInIcon
							style={{ fontSize: '24px', margin: '0 10px', color: '#000' }}
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
