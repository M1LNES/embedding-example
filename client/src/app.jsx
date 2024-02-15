import React from 'react'
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const queryClient = new QueryClient()

const fetchData = async () => {
	console.log('CEKAM NA DATA')
	const response = await fetch('/zkouska', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})

	if (!response.ok) {
		throw new Error('Failed to fetch data')
	}

	return response.json()
}

const Home = () => {
	const { data: widgetData, isLoading: isWidgetDataLoading } = useQuery({
		queryKey: ['klic123'],
		queryFn: async () => await fetchData(),
	})

	return (
		<>
			State: {isWidgetDataLoading ? 'Loading...' : 'Loaded'} Data:{' '}
			{widgetData ? JSON.stringify(widgetData) : 'No data'}
		</>
	)
}

const App = () => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path='/lukas' element={<Home />} />
					<Route
						path='/'
						element={
							<div>
								<h1>Embedded screen prototype</h1>HUUUUUU
							</div>
						}
					/>
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	)
}

export default App
