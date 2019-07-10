import { useState, useCallback, useRef } from 'react'
import { renderHook, act } from 'react-hooks-testing-library'

export const useBoolean = (initial: boolean = false) => {
	const ref = useRef()
	const [bool, setBool] = useState(initial)

	const setBoolTrue = useCallback(() => {
		setBool(true)
	}, [])

	return {
		bool,
		setBoolTrue,
	}
}

describe('state', () => {
	it('useBoolean', () => {
		const { result } = renderHook(() => useBoolean())
		expect(result.current.bool).toBe(false)
		act(() => result.current.setBoolTrue())
	})
})
