let ar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let target = 13

/*
linear Sequential Search
this is where we loop through a list and we check each item one by one
runtime of 0(N)
*/

for (let i = 0; i < ar.length; i++){
	console.log(ar[i])
	if (ar[i] === target){
		break
	}
}

/*
binary search
this only works with sorted data. What we do is we take the middle index of the array
and we check to see if its value is bigger or lower than that of the target value.
*/

let low, middle, high

let binary_search = (ar, target) => {
	low = 0
	high = ar.length - 1
	while (low <= high){
    middle = (low + high) / 2
    if (target < ar[middle]){
      high = middle - 1
    } else if (target > ar[middle]){
      low = middle + 1
    } else {
      console.log(ar[middle])
      return
    }
  }
}

binary_search(ar, target)

/*
bubble sort
The bubble sort algorithm loops through the array and keeps swapping values from left to right
until based on which value is bigger and continues to do some while there is values to swap 
*/

// array to sort
let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap function helper
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSortBasic(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 1; j < array.length; j++) {
      if(array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  console.log(array)
}

bubbleSortBasic(array) // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

/*
	insertion sort takes each item and inserts it into the sorted array
*/

const arraySort = [54, 26, 93, 17, 77, 31, 44, 55, 20]

let insertionSort = (items) => {
	for (let i = 0; i < items.length; i++){
		let value = items[i]
		for (var j = i - 1; j > -1 && items[j] > value; j--){
			items[j + 1] = items[j]
		}
		items[j + 1] = value
	}
	console.log(items)
}

insertionSort(arraySort) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]

/*
	recursion
	recursion takes place when a function calls itself
	a recursive function call needs a base case, and a value that move towards the base case
*/

let factorial = (num) => {
	if (num === 0){
		return 1
	}
	return num * factorial(num - 1)
}

let fact5 = factorial(5)
console.log(fact5)

/*
  two pointer problem
  a two pointer problem is one where you have a starting pointer at the first element
  and another pointer at the last element, and you use those pointers to solve the problem
  below is an example of how to reverse the elements in an array in log n speed
*/

let reverse = (ar) => {
  let i = 0, j = ar.length - 1, temp
  while(i !== j){
    temp = ar[i]
    ar[i] = ar[j]
    ar[j] = temp
    i++
    j--
  }
  console.log(ar)
}
reverse(['h','e','l','l','o'])


Marshall Lanners
(206) 475 - 7021
lanners.marshall@gmail.com
mlanners.com

Dear ENFEC Hiring Manager,

I’m very interested in discussing the possibility of employment at ENFEC Company International. I’m a Full-Stack Web Developer with a focus on front-end technologies (React, JavaScript). In addition, I have over 6 years of customer service and 2 years of office management  experience. I am also an excellent problem solver and dedicated optimizer.

I believe I would be a great fit for ENFEC Company International because ENFEC Company International needs people who deeply care about quality, who are curious to learn all aspects of the tech stack, and who are willing to take ownership of their codebase.  My current web development experience, along with my previous experience in customer service and office management, makes me uniquely qualified. In my most recent project, I took ownership of developing the entire backend in Node, deploying both the backend and frontend, integrating the entire Api, developing several components with React and Redux, to developing the UI. I’m also a collaborator; I communicate effectively and efficiently, and, while I am confident in my abilities, I can recognize when I need to take a step back to ask for assistance from a senior developer. In addition, my experience has allowed me to prioritize my problem solving and critical thinking skills as I overcame increasingly complicated challenges.

I would love to speak further about possible employment at ENFEC Company International sometime this week. If you’re interested, or have any further questions, feel free to reach out by phone or email. Thank you for your time and I look forward to speaking with you soon!

Regards,

Marshall Lanners