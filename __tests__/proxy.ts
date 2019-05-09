type Proxify<T> = { [P in keyof T]: T[P] }

const handler = {
	get(obj: any, key: any) {
		return obj[key]
	},
}

function proxify<T>(o: T): Proxify<T> {
	return new Proxy(o, handler)
}

const props = {
	a: (test: string) => {},
}

const proxyProps = proxify(props)

proxyProps.a

describe('none', () => {
	it('none', () => {})
})
