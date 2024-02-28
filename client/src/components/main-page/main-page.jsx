/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
	return (
		<div style={styles.container}>
			<div style={styles.header}>
				<h1>Embedding example</h1>
			</div>
			<div style={styles.body}>
				<h2>
					Emplifi Page: <Link to='/emplifi'> Emplifi </Link>
				</h2>
				<h2>
					Tour De France Page: <Link to='/tourdefrance'> Tour De France </Link>
				</h2>
			</div>
			<div style={styles.footer}>
				<p style={{ fontSize: '14px', color: '#666' }}>
					© 2024 MyWebpage. All rights reserved.
				</p>
			</div>
		</div>
	)
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
	},
	header: {
		backgroundColor: '#333',
		color: '#fff',
		padding: '20px',
		width: '100%',
		textAlign: 'center',
	},
	body: {
		margin: '20px',
		textAlign: 'center',
	},
	footer: {
		backgroundColor: '#333',
		color: '#fff',
		padding: '20px',
		width: '100%',
		textAlign: 'center',
		marginTop: 'auto',
	},
}

export default MainPage
