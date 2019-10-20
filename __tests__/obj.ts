const obj = {
	instant: {
		test: 'file.name.word',
	},
	get name() {
		return this.instant
	},
}

describe('obj', () => {
	it('simple', () => {
		obj.name /*?*/
	})
})
