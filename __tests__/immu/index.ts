import { OrderedSet, Record } from 'immutable'
import { Map, List, fromJS } from 'immu'
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
		it('merge', () => {
			const obj = Map({ c: 1, s: { d: 1 } })
			expect(obj.merge({ s: { d: 2 } })).toEqual({ c: 1, s: { d: 2 } })
		})
		it('isEmpty', () => {
			expect(Map().isEmpty()).toBeTruthy()
			expect(Map({ a: 1 }).isEmpty()).toBeFalsy()
		})
		// update that support index
		//
	})
	describe('List', () => {
		it('constructor', () => {
			const list: any[] = []
			expect(List()).toBe(List())
			expect(List(list)).toBe(List(list))
			expect(List(list)).toBe(list)
		})
		it('size', () => {
			// proxy size to length instead
		})
		it('first', () => {})
	})
	describe('fromJS', () => {
		it('it return the same parameter', () => {
			const obj = {}
			expect(fromJS(obj)).toBe(obj)
		})
	})

	it('Record', () => {
		const Re = Record({ id: 1 })
		const r = new Re({ id: 2 })
		const newR = r.merge({ id: 3 })
		newR.get('id') /*?*/
	})
	it('OrderedSet', () => {
		const a = OrderedSet([
			['b', 'va'],
			['a', 1],
		])
		a.add(['a', 2]) /*?*/
		a.toList().toJS() /*?*/
		const set = OrderedSet(['b', 'a'])
		set.add('a') /*?*/
		set.map(a => a).toList() /*?*/
	})
	it('Set', () => {
		const set = new Set()
		set.add('1')
		set.add('0')
		set.add('2')
	})
})
