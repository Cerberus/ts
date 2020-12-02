import { getName } from '@cerberus/script/user'

getName().then((name: string) => {
	console.log('name', name)
})
