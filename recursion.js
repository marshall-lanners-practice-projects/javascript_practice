/*
	recursion needs a base case along with a case that brings it
	closer to the base case. When the base case is it the equation returns

	common example is the factorial problem

	a factorial is every number before a number multipled to add up to a sum

	example

	4! = 4 × 3 × 2 × 1 = 24

*/

const factorial = (number) => {
	if (number === 0){
		return 1
	}
	return number * factorial(number - 1)
}

let newNum = factorial(4)
console.log(newNum)

/*
	when to use recursion,
	compute the nth term of something
	list of the first n terms of 
	generate all possible permutations
*/

/* Fibonacci number problem
	a fibonacci is a series of numbers in which each number
	is the sum of the two proceding numbers

	example

0 + 1 = 1, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
	1, 1, 2, 3, 5, 8
*/

const loopFib = (number) => {
	let a = 0, b = 1, temp

	for (let i = 0; i <= number + 1; i++ ){
		temp = a
		a = a + b
		b = temp
	}
	console.log(b)
}

loopFib(6)

let resursFib = (number) => {
	if (number <= 1) return 1;

	return resursFib(number - 1) + resursFib(number - 2);
}

console.log(resursFib(6))

let memo
let memFib = (number) => {
	memo = memo || {};

	if (memo[number]) return memo[number];
	if (number <= 1) return 1;

	return memo[number] = memFib(number - 1, memo) + memFib(number - 2, memo);

}

console.log(memFib(6))

/*
	counting steps problem

	say we wanted to climb a staircase in different combinations of 1 or 2 steps
	how many different ways could we climb the staircase? 

	example

	if it was a staircase of 4 steps the different combinations would be 5

	1) 1, 1, 1, 1
	2) 1, 1, 2
	3) 1, 2, 1
	4) 2, 1, 1
	5) 2, 2
*/

let countSteps = (number) => {
	if (number < 3) {return number}
	return countSteps(number - 1) + countSteps(number - 2);

}

console.log(countSteps(4))

//with memoization to improved speed

let countPaths = (steps) => {
	return countPaths(steps, steps + 1);
}

let countStepsMemo = (steps, memo) => {
	if (steps < 0){
		return 0;
	} else if (steps === 0){
		return 1;
	}

	if (memo[steps] === 0){
		memo[steps] = countPaths(steps - 1, memo) + countPathMemo(steps - 2, memo)
	}
	return memo[steps]

}

let paths
let countStepsDpI = (steps) => {

	if (steps < 0){
		return 0
	} else if (steps == 0){
		return 1
	}

	paths = [1, 1, 2]

	for (i = 3; i <= steps; i++){
		paths[i] = paths[i - 1] + paths[i - 2] + paths[i - 3]
	}
	
}



