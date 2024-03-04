import 'resize-observer-polyfill'
import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
// THIS WidgetVision import is causing error, because it contains component from external library (<Vision>)
// import WidgetVison from '../../lib/client/components/widget-vision'
import { nevim, visionMock } from './mocking-constants'
global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
}))

describe('testing <WidgetVision/> component', () => {
	it('Happy day scenario', async () => {
		render(<WidgetVison prejson={visionMock.config} data={visionMock.data} />)
		console.log('NEVIM')
	}),
		it('Happy day scenario 333', async () => {
			render(<div>NEVIM UZ ...</div>)
		})
})
