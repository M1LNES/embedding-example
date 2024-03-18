import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Widget from './client/components/widget'

const queryClient = new QueryClient()

const WidgetWithQueryClient = (props) => (
	<QueryClientProvider client={queryClient}>
		<Widget {...props} />
	</QueryClientProvider>
)

export { WidgetWithQueryClient as Widget }
export { default as WidgetVision } from './client/components/widget-vision'
