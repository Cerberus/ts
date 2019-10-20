const fs = require('fs')

const path = `${__dirname}/file.wasm`

const compiled = new WebAssembly.Module(fs.readFileSync(path))

const imports = {
	env: {
		abort(msg: string, file: any, line: number, column: number) {
			console.error(`abort called at index.ts:${line}:${column}`)
		},
	},
}

Object.defineProperty(module, 'exports', {
	get: () => new WebAssembly.Instance(compiled, imports).exports,
})
