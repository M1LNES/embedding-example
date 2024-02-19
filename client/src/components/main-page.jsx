import React from 'react'
import PageTemplate from './page-template'

const MainPage = () => {
	return (
		<PageTemplate title='Welcome to DEMO Embedding Web Application'>
			<p>
				If you wanna see charts from Unified Analytics, redirect to URL "/ua".
			</p>
			<p>
				If you wanna see charts created by Milan Janoch, redirect to URL
				"/random".
			</p>
			<p>If you wanna see test page, redirect to URL "/test".</p>
		</PageTemplate>
	)
}

export default MainPage
