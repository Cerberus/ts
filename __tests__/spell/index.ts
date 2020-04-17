import * as op from 'utils'

describe('immu', () => {
	describe('Map op', () => {
		it('getIn', () => {
			const obj = { a: { b: 'value', c: [0] } }
			expect(op.getIn(obj, ['a', 'b'])).toEqual('value')
			expect(op.getIn(obj, ['a', 'd'])).toEqual(undefined)
			expect(op.getIn(obj, ['a', 'b', 'c'])).toEqual(undefined)
			expect(op.getIn(obj, ['a']) === op.getIn(obj, ['a'])).toBeTruthy()
		})

		it('merge', () => {
			expect(op.merge({ c: 1, s: { d: 1 } }, { s: { d: 2 } })).toEqual({
				c: 1,
				s: { d: 2 },
			})
		})

		it('isEmpty', () => {
			expect(op.isEmpty({})).toBeTruthy()
			expect(op.isEmpty({ a: 1 })).toBeFalsy()
		})

		it('updateOn', () => {
			expect(op.updateOn({ c: 0, a: 1 }, 'a', value => value + 1)).toEqual({
				c: 0,
				a: 2,
			})
		})

		it('updateIn', () => {
			expect(
				op.updateIn(
					{ c: 0, s: { d: 1, c: 0 } },
					['s', 'd'],
					value => value + 1,
				),
			).toEqual({
				c: 0,
				s: { d: 2, c: 0 },
			})
			expect(op.updateIn({ c: 0 }, ['a', 'a'], value => 1)).toEqual({
				c: 0,
				a: { a: 1 },
			})
			expect(
				op.updateIn({ s: { d: [1] } }, ['s', 'd', '0'], value => value + 1),
			).toEqual({
				s: { d: [2] },
			})
		})

		it('setIn', () => {
			expect(op.setIn({ c: 0, s: { d: 1, c: 0 } }, ['s', 'd'], 2)).toEqual({
				c: 0,
				s: { d: 2, c: 0 },
			})
			expect(op.setIn({ c: 0 }, ['a', 'a'], 1)).toEqual({
				c: 0,
				a: { a: 1 },
			})
			expect(op.setIn({ s: { d: [1] } }, ['s', 'd', '0'], 2)).toEqual({
				s: { d: [2] },
			})
		})

		it('deleteKey', () => {
			const obj = { a: 1 }
			expect(op.deleteKey(obj, 'a')).toEqual({})
		})

		it('deleteIn', () => {
			expect(op.deleteIn({ a: 1 }, ['a'])).toEqual({})
			expect(op.deleteIn({ a: { b: 1, c: 0 } }, ['a', 'b'])).toEqual({
				a: { c: 0 },
			})
			expect(op.deleteIn({ a: [1, 2, 3] }, ['a', 1])).toEqual({ a: [1, 3] })
		})

		it('includes', () => {
			expect(op.includes({ a: 1, b: 0 }, 0)).toBeTruthy()
		})
	})
	describe('List op', () => {
		it('isEmpty', () => {
			expect(op.isEmpty([])).toBeTruthy()
			expect(op.isEmpty([1])).toBeFalsy()
		})

		it('updateOn', () => {
			expect(op.updateOn([0, 1], '0', value => value + 1)).toEqual([1, 1])
		})

		it('updateIn', () => {
			expect(op.updateIn([{ a: 1 }], ['0', 'a'], value => value + 1)).toEqual([
				{ a: 2 },
			])
			expect(op.updateIn([], ['0', 'a'], () => 1)).toEqual([{ a: 1 }])
			expect(
				op.updateIn([{ a: [1] }], ['0', 'a', '0'], value => value + 1),
			).toEqual([{ a: [2] }])
		})

		it('setIn', () => {
			expect(op.setIn([], [0, 'a'], 3)).toEqual([{ a: 3 }])
		})

		it('insert', () => {
			expect(op.insert([1, 3], 1, 2)).toEqual([1, 2, 3])
		})

		it('remove', () => {
			expect(op.remove([1, 2, 3], 1)).toEqual([1, 3])
		})
	})
})
