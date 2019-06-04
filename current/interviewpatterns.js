

/* Sliding Window

	how to tell?

	the problem input is a linear data structure such 
	as a linked list, array, or string

	asked to find the longest/shortest substring, subarray, or desired value

	example problems

	Maximum sum subarray of size ‘K’ (easy)

	2 and 1 would be the maximum sub array
	let array = [1,-3,2,1,-1]

	a sub array is like a smaller section of the current array

	could be solved with brute for by doing nested loops O(n^2)

	best to use Kadane's Algorithm

	with this I check the max sub array at each index

	[1, -3, 2, 1, -1]

	at index 0 max sub array is [1]
	at index 1 max sub array is [1, -3] // could be [-3] or [1, -3]
	at index 2 max sub array is [2] // could be [1, -3, 2], [-3, 2] or [2]

	best is [2,1] with a sum of 3

	this is 0 (n^2)


	Kadane's algorithm shoots for 0(n) speed

	[1, -3, 2, 1, -1]

	at index 2 all we need to do is compare the current max sub array
	with the previous max sub array

	[2] and [1, -3, 2] and ignore all other sub arrays

	that will be the local maximum sub array

*/

//what is the largest sum of a sub array?

let ar = [1, -3, 2, 1, -1, 1, 1]

let findMaxSub = (array) => {
	let currentMax = 0
	let max = 0

	for (let i = 0; i < array.length; i++){

		/*
			currentMax will the number added up as long as its greater than 0
			this gives us the ability to add negative numbers in the sub array
			as long as they do not reduce us below 0. That way if the overall
			subarray adds up to something higher than the max we can find it.

			example hight sub array numbers are 
			2, 1, -1, 1, 1 which adds to 4

		*/

		currentMax = Math.max(0, currentMax + array[i])

		/*
			the max only updates when the current 
			max is something higher than the max
			in a way max is kind of like the old max being compared to the new max
		*/

		max = Math.max(max, currentMax)
	}

	console.log(max)

}

findMaxSub(ar)



