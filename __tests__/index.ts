import { TextEncoder } from 'util'

describe('simple', () => {
	it.only('index', () => {
		new TextEncoder().encode('').length /*?*/
	})
})
