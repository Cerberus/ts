interface Metadata {
	engineSignature: string
}

interface Operation {
	signature: string
	document: string
	metadata: Metadata
}

export interface RootObject {
	version: number
	operations: Operation[]
}

const data: RootObject = require('./white-list.json')

interface Tab {
	query: string
	name: string
	variables: string
}

describe('persisted-query', () => {
	it('simple', () => {
		const nameRegex = /(query|mutation) (\w+)/
		const toTab = (operation: Operation, index: number) => {
			const query = operation.document
			const groupName = query.match(nameRegex)
			const name = groupName ? groupName[2] : `@${index}`

			const variablesRegex = /\((\$[^\)]+)\)/
			const group = query.match(variablesRegex)
			const variablesStrs = group ? group[1] : ''
			const getInitValue = (value: string): string => {
				if (value.startsWith('JSON')) {
					return '{}'
				}
				if (value.startsWith('Float')) {
					return '1.0'
				}
				if (value.startsWith('Number')) {
					return '1'
				}
				if (value.startsWith('Boolean')) {
					return 'true'
				}
				return ''
			}
			const EMPTY = ['', '']
			const variables = variablesStrs
				? JSON.stringify(
						variablesStrs.split(',').reduce(
							(acc, str) => {
								const key = (str.match(/\$(.+):/) || EMPTY)[1]
								const value = getInitValue((str.match(/:(.+)/) || EMPTY)[1])
								acc[key] = value
								return acc
							},
							{} as { [key: string]: string },
						),
						null,
						2,
				  )
				: '{}'
			return { query, name, variables }
		}
		const removeDuplicate = (tab: Tab, index: number, tabs: Tab[]) =>
			tabs.map(tab => tab.name).indexOf(tab.name) === index

		const persistedTab = data.operations
			.reverse()
			.map(toTab)
			.filter(removeDuplicate)

		persistedTab.map(tab => tab.variables) /*?*/
	})
})
