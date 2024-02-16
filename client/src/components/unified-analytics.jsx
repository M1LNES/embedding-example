import React, { useEffect, useState } from 'react'
import { Vision, VisionContextProvider, PreJSON } from '../app'
import { ua_schema } from '../schemas/widget-schemas'
import { fetchDataAllRequests } from '../functions/functions'
import { ua_data_request } from '../schemas/data-request-schemas'

const UnifiedAnalytics = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchDataAllRequests(ua_data_request)
				setData(response)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])

	if (data === null) {
		return <h3>LOADING DATA</h3>
	}
	console.log(data)
	return (
		<>
			<h1>Random Charts from UA</h1>
			<h3> This is chart of profile performance</h3>
			<VisionContextProvider>
				<Vision spec={ua_schema} input={data} />
			</VisionContextProvider>
		</>
	)
}

export default UnifiedAnalytics
