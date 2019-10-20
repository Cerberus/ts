const fs = require('fs')

const compiled = new WebAssembly.Module(
	fs.readFileSync(`${__dirname}/file.wasm`),
)

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
