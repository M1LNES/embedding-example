import { expect } from 'chai'

describe('Testing my firts test', function () {
	it('1. Random test', function (done) {
		const alfa = 2
		expect(alfa).to.equal(2)
		done()
	})
})

describe('Testing my second test', function () {
	it('1. Random test', function (done) {
		const alfa = 12
		expect(alfa).to.equal(2)
		done()
	})
})
