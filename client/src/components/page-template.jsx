import React from 'react'

const PageTemplate = ({ title, children }) => {
	return (
		<div>
			{/* Header */}
			<div
				style={{
					backgroundColor: '#333', // Example background color
					padding: '20px',
					textAlign: 'center',
					color: '#fff', // Text color
				}}
			>
				<h1>{title}</h1>
			</div>

			{/* Body */}
			<div
				style={{
					padding: '20px',
					textAlign: 'center',
				}}
			>
				{children}
			</div>
		</div>
	)
}

export default PageTemplate
