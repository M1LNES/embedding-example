import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/main-page/main-page'
import { prejson, vision } from '../../assets/embedding'
import Emplifi from './components/emplifi/emplifi'
import TourDeFrance from './components/tour-de-france/tour-de-france'
import TestPage from './components/test-page'
export const Vision = vision.Vision
export const VisionContextProvider = vision.VisionContextProvider
export const PreJSON = prejson.PreJSON
export const PreJSONType = prejson.PreJSONType
export const getModifierSpecification = prejson.getModifierSpecification
export const PreJSONContext = prejson.PreJSONContext

const queryClient = new QueryClient()

const App = () => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path='/emplifi' element={<Emplifi />} />
					<Route path='/tourdefrance' element={<TourDeFrance />} />
					<Route path='/test' element={<TestPage />} />
					<Route path='/' element={<MainPage />} />
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	)
}

export default App
