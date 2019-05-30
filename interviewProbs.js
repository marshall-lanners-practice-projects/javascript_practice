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

#7

Find all duplicates in an Array

*/


// Given an array of integers, find the largest product 
// yielded from three of the integers

let unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

let largestPro = (array) => {
	let sorted = array.sort(function(a, b){return a - b}),
	len = sorted.length - 1, product = 1
	console.log(sorted)
	console.log(30 * 29 * 70)
	
	for (let i = len; i > len - 3; i-- ){
		product *= sorted[i]
	}
	console.log(product)
}

largestPro(unsortedArray)

// Being told that an unsorted array contains (n - 1) of n consecutive numbers 
// (where the bounds are defined), find the missing number in O(n) time

// The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

let findMissing = (array, upper, lower) => {
	let sumOfIntegers = 0

	array.forEach(number => {
		sumOfIntegers += number
	})

	let upperLimitSum = (upperBound * (upperBound + 1) / 2)
	let lowerLimitSum = (lowerBound * (lowerBound - 1) / 2)

	let theoreticalSum = upperLimitSum - lowerLimitSum

	return theoreticalSum - sumOfIntegers

}

findMissing(arrayOfIntegers, upperBound, lowerBound)

//remove duplicates of an array and return an array of only unique elements

let array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

let removeDups = (ar) => {
	let dup = new Set([])
	let newAr = []

	ar.forEach(num => {
		if (!dup.has(num)){
			dup.add(num)
			newAr.push(num)
		}
	})
	console.log(newAr)
}

removeDups(array)

/*
	given an array of integers find the largest 
	difference between two elements
	such that the element of lesser value must
	come before the greater element
*/

let diffar = [7, 8, 4, 9, 9, 15, 3, 1, 10]

let findDiff = (ar) => {
	let max = ar[0], min = ar[0], maxIdx

	ar.forEach((num,i) => {
		num > max && (max = num, maxIdx = i)
	})

	for (let i = 0; i < maxIdx - 1; i++){
		ar[i] < min && (min = ar[i])
	}

	console.log(max - min)
}

findDiff(diffar)

/*
	Given an array of integers, return an output array such that output[i] 
	is equal to the product of all the elements in the array other than itself. 
	(Solve this in O(n) without division)
*/

// productExceptSelf(firstArray); // [8, 8, 4, 16]
// productExceptSelf(secondArray); // [0, 0, 0, 0]
// productExceptSelf(thirdArray); // [12, 12, 8, -12]

var firstArray = [2, 2, 4, 1];
var secondArray = [0, 0, 0, 2];
var thirdArray = [-2, -2, -3, 2];

let selfProduct = (ar) => {
	newAr = []

	let sum = ar.reduce((total, num) => {return total *= num})

	ar.forEach(num => {
		num === 0 ? (newAr.push(0)) : newAr.push(sum / num)		
	})

	console.log(newAr)
}

selfProduct(firstArray)
selfProduct(secondArray)
selfProduct(thirdArray)

/*
	Find the intersection of two arrays. 
	An intersection would be the common elements that exists within both arrays. 
	In this case, these elements should be unique!
*/

// intersection(firstArray, secondArray); // [2, 1]

let ar1 = [2, 2, 4, 1];
let ar2 = [1, 2, 0, 2];

let intersection = (ar1, ar2) => {

	let in2 = new Set(ar2), taken = new Set([]), newAr = [], number

	for (let i = 0; i < ar1.length; i++){
		number = ar1[i]
		if (taken.has(number)){
			continue
		} else if (in2.has(number)) {
			newAr.push(number)
			taken.add(number)
		}
	}

	console.log(newAr)
}

intersection(ar1, ar2)

//find all duplicates in an array

let ardubps = [1, 10, 1, 5, 5, 11, 12, 5, 7, 7]

let findDubs = (array) => {

  let hash = {}, newAr = []

  array.forEach(number => {
    if (hash[number] === false){
      hash[number] = true
      newAr.push(number)
    } else {
      hash[number] = false
    }
  })

  console.log(newAr)
}


findDubs(ardubps)



/*
	Given a string, reverse each word in the sentence 
	"Welcome to this Javascript Guide!" 
	should be become "emocleW ot siht tpircsavaJ !ediuG"
*/

let reverseString = (word) => {
	//reverse the string
	let ar = word.split('').reverse().join('')
	//reverse the string by its words
	ar = ar.split(' ').reverse().join(' ')
	console.log(ar)
}

let string = "Welcome to this Javascript Guide!";
reverseString(string)

//remove all duplicates in an array
let ar = [1, 10, 1, 5, 5, 11, 12, 5, 7, 7]

let noDubs = (array) => {

  let hash = {}, newAr = [], number

  for (let i = 0; i < array.length; i++){
    number = ar[i]
    if (hash[number] === true){
      i++
    } else {
      hash[number] = true
      newAr.push(number)
    }
  }

  console.log(newAr)
}

noDubs(ar)


/*
Given two strings, return true if they are anagrams 
of one another "Mary" is an anagram of "Army"
var firstWord = "Mary";
var secondWord = "Army";
isAnagram(firstWord, secondWord); // true
*/

let word1 = "Mary"
let word2 = "Army"

let isAnagram = (word1, word2) => {

	//is true if the word2 contains all and only the letters of word 1

	//I need to check off each letter and make sure its in the string
	//I also need to make sure the occuance of each letter is the same

	//I need to make sure the length of the string is the same

	if (word1.length !== word2.length){
		return false
	}

	let hash1 = {}, hash2 = {}, letter

	for (let i = 0; i < word1.length; i++){
		letter = word1[i]
		if (hash1[letter] === 1){
			hash1[letter]++
		} else {
			hash1[letter] = 1
		}
	}

	for (let i = 0; i < word2.length; i++){
		letter = word2[i]
		if (hash2[letter] === 1){
			hash1[letter]++
		} else {
			hash2[letter] = 1
		}
	}

	for (let i in hash1){
		if (hash1[i] !== hash2[i]){
			return false
		}
	}

	return true

}

isAnagram(word1, word2)


let isAnagram2 = (word1, word2) => { 
	let a = word1, b = word2

  a = a.toLowerCase()
  b = b.toLowerCase()

	a = a.split("").sort().join("")
	b = b.split("").sort().join("")

  console.log(a, b)

  return a === b
}

isAnagram2(word1, word2)

/*
Check if a given string is a palindrome "racecar" is a palindrome. 
"race car" should also be considered a palindrome. 
Case sensitivity should be taken into account
*/

let isPalindrome = (word) => {
  let j = word.length - 1

  for(let i = 0; i < word.length; i++){

    if (word[i] === ' '){
      i++
    } else if (word[j] === ' '){
      j--
    }

    if (word[i].toLowerCase() !== word[j].toLowerCase()){
      return false
    }
    
    j--
  }

  return true
}

isPalindrome("racecar"); // true
isPalindrome("race Car"); // true

// Implement enqueue and dequeue using only two stacks
// var inputStack = []; // First stack
// var outputStack = []; // Second stack

/*
	Implement enqueue and dequeue using only two stacks
*/

let inputStack = [];
let outputStack = [];

let enqueue = () => (stackInput, item){
	return stackInput.push(item);
}

let dequeue = (stackInput, stackOutput) => {
	if (stackOutput.length <= 0) {
		while(stackInput.length > 0){
			let elementToOutput = stackInput.pop();
			stackOutput.push(elementToOutput)
		}
	}
	return stackOutput.pop()
}

/*
3.2 Create a function that will evaluate if a given expression 
has balanced parentheses -- Using stacks
In this example, we will only consider "{}" as valid parentheses {}{} would be considered 
balancing. {{{}} is not balanced
*/

var expression = "{{}}{}{}"
var expressionFalse = "{}{{}";

isBalanced(expression); // true
isBalanced(expressionFalse); // false
isBalanced(""); // true

function isBalanced(expression) {
  var checkString = expression;
  var stack = [];

  // If empty, parentheses are technically balanced
  if (checkString.length <= 0) return true;

  for (var i = 0; i < checkString.length; i++) {
    if(checkString[i] === '{') {
      stack.push(checkString[i]);
    } else if (checkString[i] === '}') {
      // Pop on an empty array is undefined
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  // If the array is not empty, it is not balanced
  if (stack.pop()) return false;
  return true;
}

/*
	Write a recursive function that returns the binary 
	string of a given decimal number Given 4 as the 
	decimal input, the function should return 100
*/

decimalToBinary(3); //11
decimalToBinary(8); //1000
decimalToBinary(1000); //1111101000

let decimalToBinary = (digit) => {
	if(digit >= 1){
		if(digit % 2){
			return decimalToBinary((digit - 1)/2) + 1;
		} else {
			return decimalToBinary(digit/2) + 0;
		} else {
			return '';
		}
	}
}

/*
Write a recursive function that performs a binary search
*/

let target = 8
let ar = [1,2,3,4,5,6,7,8,9]

let bSearch = (array, target) => {
  let check = Math.floor((array.length) / 2)
  console.log(array, check, target)

  if (array[check] === target){
    return target
  }

  if (array[check] !== target){
    if (target > array[check]){
      bSearch(array.slice(check, array.length), target)
    }
    if (target < array[check]){
      bSearch(array.slice(0, array.length), target)
    }
  }

  console.log(target)
}







