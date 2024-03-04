import { JSDOM } from 'jsdom'

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
	url: 'http://localhost:5000',
})

const { window } = jsdom
global.window = window
global.ResizeObserver = class ResizeObserver {
	constructor(fn) {
		this.__observeFn = fn
	}

	observe() {}
	unobserve() {}
	disconnect() {}

	__simulateResize(entries) {
		this.__observeFn(entries)
	}
}
global.document = window.document
global.navigator = window.navigator
