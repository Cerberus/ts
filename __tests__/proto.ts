const person = {
	introduce() {
		return `I'm ${this.name}`
	},
	name: 'test',
}

class Person {
	name: string
	constructor(name: string) {
		this.name = name
	}
	introduce() {
		return 'hello'
	}
}

describe('proto', () => {
	it('simple', () => {
		const sun = new Person('sun')
		const tos = new Person('tos')
		tos.introduce === sun.introduce // ?
	})
})
