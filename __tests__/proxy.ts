describe('proxy', () => {
	it('nested proxy', () => {
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
	})
	it('nested add', () => {
		const req = {
			a: {
				b: (grpcMeta?: number) => {
					grpcMeta /*?*/
					return 1 + (grpcMeta as number)
				},
			},
			grpcMeta: 0,
		}
		const proxy = new Proxy<typeof req>(req, {
			get(req: any, key: any) {
				req[key].grpcMeta = req.grpcMeta

				return new Proxy<any>(req[key], {
					get(req: any, key: any) {
						req[key].grpcMeta = req.grpcMeta

						return new Proxy<any>(req[key], {
							apply(target, thisArg, args) {
								return target.apply(thisArg, [...args, target.grpcMeta])
							},
						})
					},
				})
			},
		})
		proxy.grpcMeta = 1
		proxy.a.b() /*?*/
	})
})
