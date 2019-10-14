import { ObjCache } from 'objCache'

describe('cache', () => {
	it.skip('simple', async () => {
		const cache = new ObjCache(1)
		const KEY = 'key'
		const VALUE = 'value'
		cache.put(KEY, VALUE)
		expect(cache.get(KEY)).toEqual(VALUE) /*?*/
		cache.put(KEY, VALUE, -99) // fake it expire
		expect(cache.get(KEY)).toEqual(null) /*?*/
	})
})
