import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WidgetConfigRevealed from '../../lib/client/components/widget-config-revealed'

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

describe('testing <WidgetConfigRevealed/> component', () => {
	it('Showing description', () => {
		render(
			<WidgetConfigRevealed
				prejson={prejson}
				expandedDataRequests={dataRequests}
			/>
		)

		const visionConfigText = screen.getByText('Vision config revealed:')
		expect(visionConfigText).toBeInTheDocument()

		const requestsText = screen.getByText('Requests revealed:')
		expect(requestsText).toBeInTheDocument()
	}),
		it('Showing values added via props (Data request = object)', async () => {
			render(
				<WidgetConfigRevealed
					prejson={prejson}
					expandedDataRequests={dataRequests}
				/>
			)

			const prejsonText = screen.getByText(new RegExp(JSON.stringify(prejson)))
			expect(prejsonText).toBeInTheDocument()

			const dataRequestsText = screen.getByText(
				new RegExp(JSON.stringify(dataRequests))
			)
			expect(dataRequestsText).toBeInTheDocument()
		}),
		it('Showing values added via props (Data request = array)', async () => {
			render(
				<WidgetConfigRevealed
					prejson={prejson}
					expandedDataRequests={arrayRequests}
				/>
			)

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
				<WidgetConfigRevealed
					prejson={prejson}
					invalidProp1={invalidProp1}
					invalidProp2={invalidProp2}
					expandedDataRequests={dataRequests}
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
