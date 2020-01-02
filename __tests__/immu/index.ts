import { Map } from 'immu'
require('prototype')

describe('immu', () => {
	describe('Map', () => {
		it('constrcutor', () => {
			const obj = {}
			expect(Map()).toBe(Map())
			expect(Map(obj)).toBe(Map(obj))
			expect(Map(obj)).toBe(obj)
		})
		it('get', () => {
			const obj = { a: 'value', b: {} }
			expect(obj.get('a')).toEqual('value')
			expect(obj.get('b')).toEqual({})
			expect(obj.get('b') === obj.get('b')).toBeTruthy()
		})
		it('getIn', () => {
			const obj = { a: { b: 'value' } }
			expect(obj.getIn(['a', 'b'])).toEqual('value')
			expect(obj.getIn(['a', 'c'])).toEqual(undefined)
			expect(obj.getIn(['a', 'b', 'c'])).toEqual(undefined)
			expect(obj.getIn(['a']) === obj.getIn(['a'])).toBeTruthy()
		})
	})
	describe('List', () => {
		it('size', () => {
			// single of truth of empty map
			// proxy size to length instead
		})
	})
})
