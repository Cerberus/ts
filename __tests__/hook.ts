import { useEffect } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'

let count: number
const fetchAnalytic = (id: string) => {
	count += 1
}

const useAnalytic = (article: Record<string, any>) => {
	useEffect(() => {
		fetchAnalytic(article.id)
	}, [article])
}

// file
describe('state', () => {
	beforeEach(() => {
		count = 0
	})
	it('useAnalytic', () => {
		let article: Record<string, any> = { id: 1, like: false }
		const { rerender } = renderHook(() => useAnalytic(article))

		// console.log('count', count)
		// article = { ...article, like: true }
		// rerender()
		// console.log('count', count)
		// rerender()
		// console.log('count', count)
	})
})
