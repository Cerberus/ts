import { getValue } from 'source'

describe.only('index', () => {
	it('test', () => {
		expect(getValue().a).toEqual(1)
	})
})
