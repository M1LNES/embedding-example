import React from 'react'
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/main-page'
import MyCharts from './components/my-charts'
import UnifiedAnalytics from './components/unified-analytics'
import { prejson, vision } from '../../assets/embedding'
export const Vision = vision.Vision
export const VisionContextProvider = vision.VisionContextProvider
export const PreJSON = prejson.PreJSON

const queryClient = new QueryClient()

const App = () => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path='/ua' element={<UnifiedAnalytics />} />
					<Route path='/random' element={<MyCharts />} />

					<Route path='/' element={<MainPage />} />
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	)
}

export default App
