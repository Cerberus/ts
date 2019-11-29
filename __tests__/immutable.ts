import { Map, List, fromJS } from 'immutable'

describe('immutable', () => {
	it('index', () => {
		const map = List([1, 2, 3])
		map.find(i => false, undefined, 5) /*?*/
	})
})
