import React, { useEffect, useState } from 'react'
import { Vision, VisionContextProvider, PreJSON } from '../app'
import { alert_chart_schema } from '../schemas/widget-schemas'
import { fetchDataAllRequests } from '../functions/functions'
import { alert_data_request } from '../schemas/data-request-schemas'

const MyCharts = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchDataAllRequests(alert_data_request)

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
			<h1>Random Charts from Omni studio</h1>
			Alert 51 success executions
			<VisionContextProvider>
				<Vision spec={alert_chart_schema} input={data} />
			</VisionContextProvider>
		</>
	)
}

export default MyCharts
