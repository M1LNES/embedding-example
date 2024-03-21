import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import { board_avg } from './board-params'
import { Widget } from 'empli-embed'

// import { community_comands } from './board-params'

const TestPage = () => {
	return (
		<div
			style={{
				maxWidth: '800px',
				margin: '0 auto',
				padding: '20px',
				fontFamily: 'Arial, sans-serif',
				width: 800,
				height: 800,
			}}
		>
			{/* Header */}
			<header style={{ textAlign: 'center', marginBottom: '20px' }}>
				<h1>Welcome to Testing Webpage</h1>
				<p>This is some text on the webpage.</p>
			</header>

			{/* Main content */}
			<main
				style={{
					padding: '20px',
					backgroundColor: '#f0f0f0',
					borderRadius: '5px',
				}}
			>
				{/* Text */}
				<section style={{ marginBottom: '20px' }}>
					<h2>About Me</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						ullamcorper leo ac risus hendrerit consectetur...
					</p>
				</section>

				{/* Image/Chart */}
				<section style={{ marginBottom: '20px' }}>
					<h2>My Image/Chart</h2>
					{/* <Widget boardID={2198} widgetID={35938} params={board_avg} /> */}
					<Widget
						boardID={1684}
						widgetID={25675}
						params={[
							{
								value: 'P30D/now[sD]',
								name: 'cas',
								type: 'daterange',
							},
						]}
					/>
				</section>
			</main>

			{/* Footer */}
			<footer style={{ textAlign: 'center', marginTop: '20px' }}>
				<div style={{ marginBottom: '10px' }}>
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
					© 2024 MyWebpage. All rights reserved.
				</p>
			</footer>
		</div>
	)
}

export default TestPage
