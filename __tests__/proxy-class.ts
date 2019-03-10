class Test {
	pub = 'txt'
	getText() {
		return this.pub
	}
	mutate() {
		this.pub = 'mutated txt'
	}
}

const t1 = new Proxy<Test>(new Test(), {
	get(obj, key: keyof Test) {
		obj.mutate()
		const value = obj[key]
		return value
	},
})

describe('proxy-class', () => {
	it('simple', () => {
		t1.getText() // ?
	})
})
