import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { board_avg } from './board-params'
import Widget from '../../../lib/client/components/widget'
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
					{/* <Widget
						boardID={2197}
						widgetID={35916}
						width={770}
						height={770}
						params={[
							{
								value: 'P30D/now[sD]',
								name: 'daterange',
								type: 'daterange',
							},
							{
								value: '172196',
								name: 'acl_account_id',
								type: 'string',
							},
							{
								value: '213866',
								name: 'user_acl_id',
								type: 'string',
							},
							{
								value: [
									{
										value: '164929129743',
										title: 'Emplifi',
										picture:
											'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-1/355016801_661576652675049_7066463062716805627_n.png?stp=dst-png_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=4da83f&_nc_ohc=EChojOEb2rIAX-kZ1fl&_nc_ht=scontent-sea1-1.xx&edm=AJdBtusEAAAA&oh=00_AfClcKsCoiwHD1VU-0AQKK8MAS8j9QHSpoyoO539sAYNpQ&oe=65D799A6',
										link: 'https://www.facebook.com/Emplifi',
										network: 'facebook',
										screenName: 'Emplifi',
									},
								],
								name: 'fbProfiles',
								type: 'array',
							},
						]}
					/> */}
					<Widget boardID={2198} widgetID={35930} params={board_avg} />
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
