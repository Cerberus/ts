import { TextEncoder } from 'util'

describe('text-encoder', () => {
	it('index', () => {
		new TextEncoder().encode('').length /*?*/
	})
})
