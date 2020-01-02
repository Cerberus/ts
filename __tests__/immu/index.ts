import 'prototype'

describe.only('immut', () => {
	it('getIn', () => {
		const obj = { a: { b: 'value' } }
		expect(obj.getIn(['a', 'b'])).toEqual('value')
		expect(obj.getIn(['a', 'c'])).toEqual(undefined)
		expect(obj.getIn(['a']) === obj.getIn(['a'])).toBeTruthy()
	})
})
