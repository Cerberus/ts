class Stacker<T> {
	items = new Set<T>()
	cb: Function
	constructor(cb: (items: T[]) => any) {
		this.cb = cb
	}
	runCb = () => {
		const { items } = this
		this.cb([...items])
		items.clear()
	}
	add = (id: T) => {
		const { items } = this
		items.size === 0 && setTimeout(this.runCb, 60_000)
		items.add(id)
	}
}

jest.useFakeTimers()

describe('stacker', () => {
	it('index', async () => {
		const callback = jest.fn()
		const reviewStacker = new Stacker<string>(callback)
		jest.runAllTimers()
		expect(callback).not.toBeCalled()
		reviewStacker.add('1')
		reviewStacker.add('1')
		reviewStacker.add('2')
		expect(reviewStacker.items).toEqual(new Set(['1', '2']))
		jest.runAllTimers()
		expect(reviewStacker.items).toEqual(new Set([]))
		expect(callback).toBeCalledWith(['1', '2'])
	})
})
