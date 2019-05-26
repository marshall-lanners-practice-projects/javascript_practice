/*
#1

Given an array of integers, find the largest product 
yielded from three of the integers

#2

Being told that an unsorted array contains (n - 1) of n consecutive numbers 
(where the bounds are defined), find the missing number in O(n) time

#3

Removing duplicates of an array and returning an 
array of only unique elements

#4

Given an array of integers, find the largest difference 
between two elements such that the element of lesser 
value must come before the greater element

#5

Given an array of integers, return an output array such that output[i] is equal to the 
product of all the elements in the array other than itself. (Solve this in O(n) without division)

#6

Find the intersection of two arrays. An intersection would be the 
common elements that exists within both arrays. In this case, 
these elements should be unique!

*/


// Given an array of integers, find the largest product 
// yielded from three of the integers

let unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

let LargestPro = (array) => {
	let sorted = array.sort(function(a, b){return a - b}),
	len = sorted.length - 1, product = 1
	console.log(sorted)
	console.log(30 * 29 * 70)
	
	for (let i = len; i > len - 3; i-- ){
		console.log('sorted[i]', sorted[i])
		console.log('product', product)
		console.log('i', i)
		product *= sorted[i]
	}
	console.log(product)
}

LargestPro(unsortedArray)


