// @ts-ignore
import { add } from 'assembly/script'

describe.only('assembly', () => {
	it('add', () => {
		//
		expect(add(1, 2)).toEqual(3)
	})
})
