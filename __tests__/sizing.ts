const objectSizeof = require('object-sizeof')

import { List } from 'immutable'

describe('sizing', () => {
	it('simple', () => {
		const a = '1234'
		// map 93252
		const getValue = (num: number) =>
			[...Array(num)].map(() => ({ name: '123', name2: { test: '123' } }))
		const value = getValue(20)
		objectSizeof(List([value])) /*?*/
		objectSizeof(value) /*?*/
	})
})
