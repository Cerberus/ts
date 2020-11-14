describe('sw-cloudflaare', () => {
	it('simple', async () => {
		type CacheValue = string | string[] | null

		type Store = {
			[key: string]: CacheValue
		}

		type Request = {
			clone: () => {
				text: () => Promise<string>
			}
			url: string
			method: string
			headers: string
		}

		type FetchEvent = {
			request: Request
		}

		const store = {} as Store

		const caches = {
			default: {
				put: async (cacheKey: string, value: CacheValue) => {
					store[cacheKey] = value
				},
				match: async (cacheKey: string) => {
					return store[cacheKey]
				},
				delete: async (cacheKey: string) => {
					delete store[cacheKey]
				},
			},
		}

		type Body = {
			variables: { id?: string }
			query: string
		}

		const newRequest = (url: URL, object: Object) => `r${url.pathname}`

		const mockFetch = async (request: Request) => `json${request.url}`

		const sha256 = async (query: string) => `h${query}`

		const isQuery = (query: string) => query.includes('query')

		const isMutation = (query: string) => query.includes('mutation')

		const getHashs = async (id: string) => {
			const cache = caches.default
			return ((await cache.match(id)) || []) as string[]
		}
		const getBodyJs = (body: string): Body => JSON.parse(body)

		const handlerRequest = async (event: FetchEvent) => {
			const { request } = event
			const body = await request.clone().text()
			const { query, variables } = getBodyJs(body)
			const { id } = variables
			const cache = caches.default

			if (isQuery(query)) {
				const hash = await sha256(body)
				const url = new URL(request.url)
				url.pathname = `/graphql${hash}`
				const cacheKey = newRequest(url, {
					headers: request.headers,
					method: 'GET',
				})

				if (typeof id === 'string') {
					const hashs = await getHashs(id)
					const newhashs = hashs.concat(cacheKey)
					cache.put(id, newhashs)
				}
				if (typeof id === 'string' || Object.keys(variables).length === 0) {
					const cacheResult = await cache.match(cacheKey)
					if (cacheResult) {
						return cacheResult
					}
					const result = await mockFetch(request)
					cache.put(cacheKey, result)
					return result
				}
			} else if (isMutation(query) && typeof id === 'string') {
				const hashs = await getHashs(id)
				await Promise.all(hashs.map(async hash => cache.delete(hash)))
				await cache.delete(id)
			}
			return mockFetch(request)
		}
		const mockEvent = (query: string, id?: string) => {
			return {
				request: {
					clone: () => ({
						text: async () =>
							JSON.stringify({
								query,
								operationName: null,
								variables: { id },
							}),
					}),
					url: 'https://com',
					method: 'POST',
					headers: '',
				},
			}
		}
		await handlerRequest(mockEvent('query1', 'id1')) /*?*/
		store
		await handlerRequest(mockEvent('query1', 'id2')) /*?*/
		store
		await handlerRequest(mockEvent('query2', 'id1')) /*?*/
		store
		await handlerRequest(mockEvent('query2', 'id1')) /*?*/
		store
		await handlerRequest(mockEvent('mutation1', 'id1')) /*?*/
		store
		await handlerRequest(mockEvent('mutation2', 'id2')) /*?*/
		store
		await handlerRequest(mockEvent('subscription2', 'xx')) /*?*/
		store
		await handlerRequest(mockEvent('query1')) /*?*/
		store
	})
})
