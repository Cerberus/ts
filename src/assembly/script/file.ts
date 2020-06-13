export function add(a: i32, b: i32): i32 {
	return a + b
}

export function sub(a: i32, b: i32): i32 {
	return a - b
}

export function sum(nums: Int32Array): i32 {
	return nums.reduce((acc, num) => acc + num, 0)
}

export const Int32Array_ID = idof<Int32Array>()
