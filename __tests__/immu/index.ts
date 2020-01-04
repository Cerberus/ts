import { Map, List, fromJS, Record } from 'immu'
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
			const obj = { a: 'value', b: {}, c: [0] }
			expect(obj.get('a')).toEqual('value')
			expect(obj.get('b')).toEqual({})
			expect(obj.get('b') === obj.get('b')).toBeTruthy()
			// expect(obj.get('c').size).toEqual(1)
		})

		it('getIn', () => {
			const obj = { a: { b: 'value', c: [0] } }
			expect(obj.getIn(['a', 'b'])).toEqual('value')
			expect(obj.getIn(['a', 'd'])).toEqual(undefined)
			expect(obj.getIn(['a', 'b', 'c'])).toEqual(undefined)
			expect(obj.getIn(['a']) === obj.getIn(['a'])).toBeTruthy()
			// expect(obj.getIn(['a', 'c']).size).toEqual(1)
		})

		it('merge', () => {
			const obj = { c: 1, s: { d: 1 } }
			expect(obj.merge({ s: { d: 2 } })).toEqual({ c: 1, s: { d: 2 } })
		})

		it('isEmpty', () => {
			expect({}.isEmpty()).toBeTruthy()
			expect({ a: 1 }.isEmpty()).toBeFalsy()
		})

		it('update', () => {
			const obj = { c: 0, a: 1 }
			expect(obj.update('a', value => value + 1)).toEqual({ c: 0, a: 2 })
		})

		it('updateIn', () => {
			const obj = { c: 0, s: { d: 1, c: 0 } }
			expect(obj.updateIn(['s', 'd'], value => value + 1)).toEqual({
				c: 0,
				s: { d: 2, c: 0 },
			})
			expect({ c: 0 }.updateIn(['a', 'a'], value => 1)).toEqual({
				c: 0,
				a: { a: 1 },
			})
			expect(
				{ s: { d: [1] } }.updateIn(['s', 'd', '0'], value => value + 1),
			).toEqual({ s: { d: [2] } })
		})

		it('set', () => {
			const obj = { c: 0, a: 1 }
			expect(obj.set('a', () => 2)).toEqual({ c: 0, a: 2 })
		})

		it('setIn', () => {
			const obj = { c: 0, s: { d: 1, c: 0 } }
			expect(obj.setIn(['s', 'd'], () => 2)).toEqual({
				c: 0,
				s: { d: 2, c: 0 },
			})
			expect({ c: 0 }.setIn(['a', 'a'], () => 1)).toEqual({
				c: 0,
				a: { a: 1 },
			})
			expect({ s: { d: [1] } }.setIn(['s', 'd', '0'], () => 2)).toEqual({
				s: { d: [2] },
			})
		})
	})
	describe('List', () => {
		it('constructor', () => {
			const list: any[] = []
			expect(List()).toBe(List())
			expect(List(list)).toBe(List(list))
			expect(List(list)).toBe(list)
			// expect(List().size).toEqual(0)
			// expect(List([1]).size).toEqual(1)
		})

		it('size', () => {
			const list = [1, 2, 3]
		})

		it('first', () => {
			expect([1].first()).toEqual(1)
		})

		it('isEmpty', () => {
			expect([].isEmpty()).toBeTruthy()
			expect([1].isEmpty()).toBeFalsy()
		})

		it('update', () => {
			const arr = [0, 1]
			expect(arr.update('0', value => value + 1)).toEqual([1, 1])
		})

		it('updateIn', () => {
			const arr = [{ a: 1 }]
			expect(arr.updateIn(['0', 'a'], value => value + 1)).toEqual([{ a: 2 }])
			expect([].updateIn(['0', 'a'], () => 1)).toEqual([{ a: 1 }])
			expect(
				[{ a: [1] }].updateIn(['0', 'a', '0'], value => value + 1),
			).toEqual([{ a: [2] }])
			// List([1]).update(0, () => 2).size /*?*/
		})

		it('remove', () => {
			expect([1, 2, 3].remove(1)).toEqual([1, 3])
		})
	})

	describe('fromJS', () => {
		it('it should return a same result', () => {
			const obj = {}
			expect(fromJS(obj)).toBe(obj)
		})
	})

	describe('Record', () => {
		it('general', () => {
			// tslint:disable-next-line
			const MyRecord = Record({ id: 1, none: 0 })
			const record = MyRecord({ id: 2 })
			expect(record.get('id')).toEqual(2)

			const newRecord = record.merge({ id: 3 })
			expect(newRecord.get('none')).toEqual(0)
			expect(newRecord.get('id')).toEqual(3)
		})
	})

	// it('OrderedSet', () => {
	// 	const s = new Set()
	// 	s
	// 	const a = OrderedSet([1, 2])
	// 	a.add(3) /*?*/
	// 	a.map(a => {
	// 		a /*?*/
	// 	}) /*?*/
	// 	const set = OrderedSet(['b', 'a'])
	// 	set.add('a') /*?*/
	// 	set.map(a => a).toList() /*?*/
	// })
})
