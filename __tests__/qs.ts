import qs from 'qs'

describe('query-string', () => {
	it('qs', () => {
		const { search, searchParams } = new URL(
			'https://starter.xyz/_ugc/test.png?width=1000&height=200',
		)
		qs.parse(search.slice(1)) /*?*/
		searchParams
		search
	})
})
