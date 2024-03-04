import 'resize-observer-polyfill'
import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
// import WidgetVison from '../../lib/client/components/widget-vision'
import { nevim, visionMock } from './mocking-constants'
// import { VisionContextProvider, Vision } from '@sbks/vision'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
}))

describe('testing <WidgetVision/> component', () => {
	it('Happy day scenario', async () => {
		// render(
		// 	<div>
		// 		<VisionContextProvider>
		// 			<Vision spec={nevim.config} input={nevim.data} />
		// 		</VisionContextProvider>
		// 	</div>
		// )
		render(<WidgetVison prejson={visionMock.config} data={visionMock.data} />)
		// render(<div>NEVIM UZ ...</div>)
		console.log('NEVIM')
	})
})
