import { Map, List, fromJS, Record } from 'immu'

describe('immu', () => {
	describe('Map', () => {
		it('constructor', () => {
			expect(Map()).toEqual({})
			expect(Map({ a: 1 })).toEqual({ a: 1 })
		})

		it('getIn', () => {
			const obj = { a: { b: 'value', c: [0] } }
			expect(obj.getIn(['a', 'b'])).toEqual('value')
			expect(obj.getIn(['a', 'd'])).toEqual(undefined)
			expect(obj.getIn(['a', 'b', 'c'])).toEqual(undefined)
			expect(obj.getIn(['a']) === obj.getIn(['a'])).toBeTruthy()
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

		it('setIn', () => {
			const obj = { c: 0, s: { d: 1, c: 0 } }
			expect(obj.setIn(['s', 'd'], 2)).toEqual({
				c: 0,
				s: { d: 2, c: 0 },
			})
			expect({ c: 0 }.setIn(['a', 'a'], 1)).toEqual({
				c: 0,
				a: { a: 1 },
			})
			expect({ s: { d: [1] } }.setIn(['s', 'd', '0'], 2)).toEqual({
				s: { d: [2] },
			})
		})

		it('delete', () => {
			const obj = { a: 1 }
			expect(obj.delete('a')).toEqual({})
		})

		it('deleteIn', () => {
			expect({ a: 1 }.deleteIn(['a'])).toEqual({})
			expect({ a: { b: 1, c: 0 } }.deleteIn(['a', 'b'])).toEqual({
				a: { c: 0 },
			})
			expect({ a: [1, 2, 3] }.deleteIn(['a', 1])).toEqual({ a: [1, 3] })
		})
	})
	describe('List', () => {
		it('constructor', () => {
			expect(List()).toEqual([])
			expect(List([1])).toEqual([1])
		})

		it('size', () => {
			const list = [1, 2]
			expect(list.size).toEqual(2)
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
		})

		it('setIn', () => {
			expect([].setIn([0, 'a'], 3)).toEqual([{ a: 3 }])
		})

		it('remove / delete', () => {
			expect([1, 2, 3].remove(1)).toEqual([1, 3])
			expect([1, 2, 3].delete(1)).toEqual([1, 3])
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
			expect(record.getIn(['id'])).toEqual(2)

			const newRecord = record.merge({ id: 3 })
			expect(newRecord.getIn(['none'])).toEqual(0)
			expect(newRecord.getIn(['id'])).toEqual(3)
		})
	})
})
