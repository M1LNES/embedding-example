import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/main-page/main-page'
import Emplifi from './components/emplifi/emplifi'
import TourDeFrance from './components/tour-de-france/tour-de-france'
import TestPage from './components/test-page'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/emplifi' element={<Emplifi />} />
				<Route path='/tourdefrance' element={<TourDeFrance />} />
				<Route path='/test' element={<TestPage />} />
				<Route path='/' element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
