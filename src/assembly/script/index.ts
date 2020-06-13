const fs = require('fs')
const loader = require('@assemblyscript/loader')

Object.defineProperty(module, 'exports', {
	get: () =>
		loader.instantiateSync(fs.readFileSync(`${__dirname}/file.wasm`), {
			env: {
				abort(msg: string, file: any, line: number, column: number) {
					console.error(`abort called at index.ts:${line}:${column}`)
				},
			},
		}).exports,
})
