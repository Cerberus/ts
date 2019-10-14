const obj = {
	instant: {
		test: 'file.name.word',
	},
	get name() {
		return this.instant
	},
}

describe.only('index', () => {
	it('simple', () => {
		obj.name /*?*/
	})
})
