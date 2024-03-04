import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WidgetConfig from '../../lib/client/components/widget-config'

const prejson = { a: 10, f: 20, l0: 'amefnm' }
const dataRequests = { f: '10', e: '11' }
const arrayRequests = [
	[
		{
			a: [{ a: 7, b: 20 }, { k: 10, luk: 0 }, [{ j: 10 }]],
		},
		{ b: 19 },
		{ u: { u: { o: { alfa: 'o' } } } },
		{ a: 10000 },
		{ abc: 'pes' },
	],
	{ dddd: 'ls' },
]

describe('testing <WidgetConfig/> component', () => {
	it('Showing description', () => {
		render(<WidgetConfig prejson={prejson} dataRequests={dataRequests} />)

		const visionConfigText = screen.getByText('Vision config:')
		expect(visionConfigText).toBeInTheDocument()

		const requestsText = screen.getByText('Requests:')
		expect(requestsText).toBeInTheDocument()
	}),
		it('Showing values added via props (Data request = object)', async () => {
			render(<WidgetConfig prejson={prejson} dataRequests={dataRequests} />)

			const prejsonText = screen.getByText(new RegExp(JSON.stringify(prejson)))
			expect(prejsonText).toBeInTheDocument()

			const dataRequestsText = screen.getByText(
				new RegExp(JSON.stringify(dataRequests))
			)
			expect(dataRequestsText).toBeInTheDocument()
		}),
		it('Showing values added via props (Data request = array)', async () => {
			render(<WidgetConfig prejson={prejson} dataRequests={arrayRequests} />)

			const prejsonText = screen.getByText(new RegExp(JSON.stringify(prejson)))
			expect(prejsonText).toBeInTheDocument()

			const requestElements = screen.queryAllByText((content, element) => {
				return arrayRequests.every((request) =>
					content.includes(JSON.stringify(request))
				)
			})

			expect(requestElements.length).toBe(1)
		}),
		it('Does not rendering invalid props', async () => {
			const invalidProp1 = 'bbsehkbekhb84388nfsf;[//'
			const invalidProp2 = 32030000

			render(
				<WidgetConfig
					prejson={prejson}
					invalidProp1={invalidProp1}
					invalidProp2={invalidProp2}
					dataRequests={dataRequests}
				/>
			)

			expect(
				screen.getByText(new RegExp(JSON.stringify(prejson)))
			).toBeInTheDocument()
			expect(await screen.queryByText(invalidProp1)).toBeNull()
			expect(await screen.queryByText(invalidProp2)).toBeNull()
			expect(
				screen.getByText(new RegExp(JSON.stringify(dataRequests)))
			).toBeInTheDocument()
		})
})
