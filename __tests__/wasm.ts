// @ts-ignore
import * as script from 'assembly/script'

function doSum(values: number[]) {
	const { sum, __retain, __allocArray, Int32Array_ID, __release } = script
	const arrPtr = __retain(__allocArray(Int32Array_ID, values))
	const value = sum(arrPtr)
	__release(arrPtr)
	return value
}

describe('assembly', () => {
	it('add', () => {
		expect(script.add(1, 2)).toEqual(3)
	})
	it('sub', () => {
		expect(script.sub(2, 1)).toEqual(1)
	})
	it('test', () => {
		doSum([1, 3]) /*?*/
	})
})
