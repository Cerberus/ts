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
	getStr(test: string) {},
}

let proxyProps = proxify(props)

proxyProps.getStr

const myProps = new Proxy(props, handler)

describe('none', () => {
	it('none', () => {})
})
