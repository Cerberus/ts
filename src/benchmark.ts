import Immu from './immu'
import Immutable from 'immutable'
// import { store } from './fixtures'

import * as Benchmark from 'benchmark'

const store = {
	city: {
		id: 1,
		name: 'กรุงเทพมหานคร',
		welcomeUrl: 'bangkok',
		coverPicture: {
			thumbnailUrl:
				'https://img.wongnai.com/p/100x100/2018/10/03/a35611d6d86145d19f8e2925a2b709c3.jpg',
			width: 416,
			height: 552,
			smallUrl:
				'https://img.wongnai.com/p/400x0/2018/10/03/a35611d6d86145d19f8e2925a2b709c3.jpg',
			photoId: 'a35611d6d86145d19f8e2925a2b709c3',
			url: 'photos/a35611d6d86145d19f8e2925a2b709c3',
			largeUrl:
				'https://img.wongnai.com/p/1920x0/2018/10/03/a35611d6d86145d19f8e2925a2b709c3.jpg',
			contentUrl:
				'https://img.wongnai.com/p/_-x_/2018/10/03/a35611d6d86145d19f8e2925a2b709c3.jpg',
			description: 'กรุงเทพมหานคร',
			photoUrl: 'photos/a35611d6d86145d19f8e2925a2b709c3',
		},
		viewGroup: {
			id: 9681,
			name: 'กรุงเทพและปริมณฑล',
			welcomeUrl:
				'9681-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%93%E0%B8%91%E0%B8%A5',
		},
	},
	city2: {
		id: 1,
		name: 'กรุงเทพมหานคร',
		welcomeUrl: 'bangkok',
		coverPicture: {
			thumbnailUrl:
				'https://img.wongnai.com/p/100x100/2018/10/03/a35611d6d86145d19f8e2925a2b709c3.jpg',
			width: 416,
			height: 552,
			smallUrl:
				'https://img.wongnai.com/p/400x0/2018/10/03/a35611d6d86145d19f8e2925a2b709c3.jpg',
			photoId: 'a35611d6d86145d19f8e2925a2b709c3',
			url: 'photos/a35611d6d86145d19f8e2925a2b709c3',
			largeUrl:
				'https://img.wongnai.com/p/1920x0/2018/10/03/a35611d6d86145d19f8e2925a2b709c3.jpg',
			contentUrl:
				'https://img.wongnai.com/p/_-x_/2018/10/03/a35611d6d86145d19f8e2925a2b709c3.jpg',
			description: 'กรุงเทพมหานคร',
			photoUrl: 'photos/a35611d6d86145d19f8e2925a2b709c3',
		},
		viewGroup: {
			id: 9681,
			name: 'กรุงเทพและปริมณฑล',
			welcomeUrl:
				'9681-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%93%E0%B8%91%E0%B8%A5',
		},
	},
}

// @ts-ignore
Benchmark.Suite('Constructor')
	.add('new immu', () => {
		// @ts-ignore
		Immu.Map(store)
	})
	.add('new immutable', () => {
		Immutable.Map(store)
	})
	.on('cycle', (event: any) => {
		console.log(String(event.target))
	})
	.run()

const immu = Immu.Map(store)
const immutable = Immutable.Map(store)

// @ts-ignore
Benchmark.Suite('getIn')
	.add('getIn immu', () => {
		// @ts-ignore
		immu.getIn(['city', 'coverPicture', 'contentUrl'], 1)
	})
	.add('getIn immutable', () => {
		immutable.getIn(['city', 'coverPicture', 'contentUrl'], 1)
	})
	.on('cycle', (event: any) => {
		console.log(String(event.target))
	})
	.run()

// @ts-ignore
Benchmark.Suite('setIn')
	.add('setIn immu', () => {
		// @ts-ignore
		immu.setIn(['city', 'coverPicture', 'contentUrl'], 1)
	})
	.add('setIn immutable', () => {
		immutable.setIn(['city', 'coverPicture', 'contentUrl'], 1)
	})
	.on('cycle', (event: any) => {
		console.log(String(event.target))
	})
	.run()
