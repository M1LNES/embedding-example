import 'resize-observer-polyfill'
import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
// THIS WidgetVision import is causing error, because it contains component from external library (<Vision>)
import WidgetVison from '../../lib/client/components/widget-vision'
import { visionMock } from './mocking-constants'
import { Vision, VisionContextProvider } from '@sbks/vision'
import 'jest-canvas-mock'

global.ResizeObserver = class ResizeObserver {
	observe() {}
}

describe('testing <WidgetVision/> component', () => {
	// it('Happy day scenario', async () => {
	// 	render(<WidgetVison prejson={visionMock.config} data={visionMock.data} />)
	// 	console.log('NEVIM')
	// }),
	it('Happy day scenario 333', async () => {
		// render(<div>NEVIM UZ ...</div>)
		render(
			<VisionContextProvider>
				{/* <Vision spec={visionMock.config.vision} input={visionMock.data} /> */}
				<Vision
					spec={{
						data: [
							{
								name: 'all',
								path: [0],
								format: 'omni-full',
								source: '$input',
							},
							{
								name: 'onlyok',
								path: [1],
								format: 'omni-full',
								transform: [
									{
										type: 'map',
										as: 'value',
										expr: "( datum.value / (dataset('all')[index].value)) * 100",
									},
								],
								source: '$input',
							},
						],
						formats: [
							{
								name: 'value',
								type: 'expr',
								expr: '(isNaN(value) || value === null) ? \'N/A\' : (new Intl.NumberFormat("en-US", {"notation": "compact","style": "percent", maximumFractionDigits: 2})).format(value / 100)',
							},
							{
								type: 'expr',
								name: 'percentage',
								expr: "isNaN(value) ? 'N/A' : (new Intl.NumberFormat('en-US', {notation: 'compact', maximumFractionDigits: 2, signDisplay: 'exceptZero', style: 'percent'})).format(value)",
							},
						],
						scales: [
							{
								type: 'threshold',
								name: 'color',
								domain: [0],
								range: ['#DA1E28', '#24A148'],
							},
						],
						marks: [
							{
								type: 'text',
								name: 'Text',
								source: {
									data: 'onlyok',
								},
								encode: {
									fontSize: 36,
									fill: {
										field: 'value',
										expr: "dataset('onlyok')[index].value === null || datum.value === 0 || datum.value === null ? 'black' : (datum.value > 90 ? 'green' : 'red')",
									},
									text: {
										field: 'value',
										format: 'value',
									},
									anchorY: 'end',
									fontWeight: 'medium',
									anchorX: 'middle',
									y: {
										expr: "(signal('layout.top') + signal('layout.height') / 2 )",
									},
									x: {
										expr: "signal('container.width') / 2",
									},
								},
							},
							{
								type: 'text',
								name: 'Relative Change Text',
								encode: {
									text: '3 Feb 2024 - 3 Mar 2024',
									x: {
										expr: "(signal('container.width') / 2) - (signal('container.width') > 300 ? 40 : 0)",
									},
									anchorX: {
										expr: "signal('container.width') > 300 ? 'start' : 'middle'",
									},
									anchorY: 'middle',
									fontSize: 11,
									y: {
										expr: "signal('layout.top') +  ( signal('layout.height') / 2 ) + (signal('container.width') > 300 ? 30 : 50) ",
									},
								},
							},
						],
					}}
					input={[
						{
							header: [
								{
									type: 'target',
									rows: ['cardinality'],
								},
							],
							data: [37],
						},
						{
							header: [
								{
									type: 'target',
									rows: ['cardinality'],
								},
							],
							data: [35],
						},
					]}
				/>
			</VisionContextProvider>
		)
	})
})
