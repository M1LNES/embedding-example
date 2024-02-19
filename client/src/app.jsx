import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/main-page'
import MyCharts from './components/my-charts'
import UnifiedAnalytics from './components/unified-analytics'
import { prejson, vision, prejsonTime } from '../../assets/embedding'
import TestPage from './components/test-page'
export const Vision = vision.Vision
export const VisionContextProvider = vision.VisionContextProvider
export const PreJSON = prejson.PreJSON
export const PreJSONType = prejson.PreJSONType
export const getModifierSpecification = prejson.getModifierSpecification
// export const PreDateRange = prejson.PreDateRange
export const PreJSONContext = prejson.PreJSONContext
console.log(prejson, vision, prejsonTime)

const queryClient = new QueryClient()

const App = () => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path='/ua' element={<UnifiedAnalytics />} />
					<Route path='/random' element={<MyCharts />} />
					<Route path='/test' element={<TestPage />} />
					<Route path='/' element={<MainPage />} />
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	)
}

export default App
