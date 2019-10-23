// @ts-ignore
import { add, sub } from 'assembly/script'

describe.only('assembly', () => {
	it('add', () => {
		Math.random() /*?*/
		expect(add(1, 2)).toEqual(3)
	})
	it('sub', () => {
		Math.random() /*?*/
		expect(sub(2, 1)).toEqual(1)
	})
})
