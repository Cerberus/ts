const nextEvent = <T extends EventTarget>(target: T, name: string) =>
	new Promise<Event>(res => {
		target.addEventListener(name, res, { once: true })
	})

describe('nextEvent', () => {
	xit('index', async () => {
		const event = await nextEvent(window, 'round')
		console.log(`${event.type} happen`)
	})
})
