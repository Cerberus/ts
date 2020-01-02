import 'prototype'

describe.only('index', () => {
	it('test', () => {
		const obj = { a: { b: 'value' } }
		obj.getIn(['a', 'b']) /*?*/
		obj.getIn(['a', 'c']) /*?*/
	})
})
