/*
	ALL INTERVIEW QUESTINOS FROM HATCHWAYS INTERVIEW PREP
*/

/*
  determin if a string is a palindrome
  e.g same forward as backward
*/

let isPalindrome = (str) => {
  let j = str.length - 1
  let i = 0

  while (i < j){
    if (str[i] !== str[j]) return false
    i++
    j--
  }
  return true
}
console.log(isValidrome('aabbaa')) //true
console.log(isValidrome('aabaa')) // true
console.log(isValidrome('aabba')) // false


/*
	Find all consecutive groups
  input: [1,2,3,5,6,7,10,11,12,15,25,26,27]
	output: ['1-3', '5-7', '10-12', '15-15', '25-27']
*/

const findConsecutive = ar => {
  const result = [];
  let start = ar[0]
  for (let i = 0; i < ar.length; i++){
    if (ar[i + 1] !== ar[i] + 1){
      result.push(`${start}-${ar[i]}`)
      start = ar[i + 1]
    }
  }
  return result
}
const ar = [1,2,3,5,6,7,10,11,12,15,25,26,27]
console.log(findConsecutive(ar))



var longestWord = function(ar) {
    ar.sort()
    let set = new Set(ar)
    let current = ''
    ar.forEach(w => {
        let valid = true
        let key = ''
        for (let i = 0; i < w.length; i++){
            key += w[i]
           !set.has(key) && (valid = false)
        }
        valid && (w.length > current.length) && (current = w)
    })
    return current
};

/*
	Given a list of strings words representing an English Dictionary, 
	find the longest word in words that can be built one character at 
	a time by other words in words. If there is more than one possible answer, 
	return the longest word with the smallest lexicographical order.

	Input: words = ["w","wo","wor","worl", "world"]
	Output: "world"
*/

var longestWord = function(ar) {
    ar.sort()
    let set = new Set(ar)
    let current = ''
    ar.forEach(w => {
        let valid = true
        let key = ''
        for (let i = 0; i < w.length; i++){
            key += w[i]
           !set.has(key) && (valid = false)
        }
        valid && (w.length > current.length) && (current = w)
    })
    return current
};

/*
A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin. 
*/

var toGoatLatin = function(S) {
    S = S.split(" ")
    let a = ''
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    
    for (let i = 0; i < S.length; i++){
        a += 'a'
        if (vowels.has(S[i][0].toLowerCase())){
            S[i] += `ma${a}`
        } else {
            let first = S[i][0]
            S[i] = S[i].substring(1)
            S[i] += `${first}ma${a}`
        }
    }
    return S.join(" ")
};

/* 
  Input : arr = [2, 3, 10, 6, 4, 8, 1]
  Output : 8
  Explanation : The maximum difference is between 10 and 2
  Given an array arr[] of integers, find out the maximum difference between any two elements such that larger element appears after the smaller number.
*/

const findMin = () => {
  let max = 0
  let min = ar[0]
  for (let i = 0; i < ar.length; i++){
    ar[i] - min > max && (max = ar[i] - min)
    ar[i] < min && (min = ar[i])
  }
  console.log(max)
}

let ar = [2, 3, 10, 6, 4, 8, 1]
findMin(ar)

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
  Example - Two Sum
  Write a function that returns true if a pair of integers in the input array adds up to a certain target. 
  input: [3, 5, 2, -4, 8, 11], 7
  output: true // 11 + -4 = 7, 5 + 2 = 7
*/

const twoSum = (ar, target) => {
  const lookup = {}
  for (let i = 0; i < ar.length; i++){
    lookup[target - ar[i]] = true
    if (lookup[ar[i]]) return true
  }
  return false
}

twoSum([3, 5, 5, -4, 8, 11], 7)


/*
  1 of the numbers in the array is a duplicate
  find the duplicate, assume there is only one duplicate
*/

const findDup = (ar) => {
  const lookup = {}
  for (let i = 0; i < ar.length; i++){
    if (lookup[ar[i]]) return ar[i]
    lookup[ar[i]] = true
  }
}

findDup([1,2,3,5,11,1,24,7])

/*
  You're given strings J representing the types of stones that are 
  jewels, and S representing the stones you have.  
  Each character in S is a type of stone you have.  
  You want to know how many of the stones you have are also jewels.

  The letters in J are guaranteed distinct, and all characters 
  in J and S are letters. Letters are case sensitive, so "a" is 
  considered a different type of stone from "A".
*/


var numJewelsInStones = function(J, S) {
    const set = new Set(J.split(''))
    let count = 0
    for (let i = 0; i < S.length; i++){
        if (set.has(S[i])) count++
    }
    return count
};

/*
  write a function that checks if two strings are an anagram
  same letters just scrambled
*/

var isAnagram = function(s, t) {
    
    const hash1 = {}, hash2 = {}
    if (s.length != t.length) return false
    
    for (let i = 0; i < s.length; i++){
        hash1[s[i]] ? hash1[s[i]]++ : hash1[s[i]] = 1
        hash2[t[i]] ? hash2[t[i]]++ : hash2[t[i]] = 1
    }
    
    for (let i = 0; i < s.length; i++){
        if (hash1[s[i]] !== hash2[s[i]]) return false
    }
    
    return true
    
};

/*
  Given a string containing just the characters 
  '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Note that an empty string is also considered valid.

  Example 1:

  Input: "()"
  Output: true
*/

var isValid = function(s) {
    let map = { ")": "(", "]": '[', "}": "{"}
    let stack = []
    for (let i = 0; i < s.length; i++){
        if (s[i] === "(" || s[i] === "[" || s[i] === "{"){
            stack.push(s[i])
        } else {
            if (stack.pop() !== map[s[i]]){
                return false
            }
        }
    }
    return stack.length === 0
};

/*
  implement a Queue using two stacks
*/

var MyQueue = function() {
    this.stack = []
    this.revStack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
   while(this.stack.length){
       this.revStack.push(this.stack.pop())
   }
   let first = this.revStack.pop()
   while(this.revStack.length){
       this.stack.push(this.revStack.pop())
   }
   return first
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
   return this.stack.length === 0
};


/*
  You are given a sorted array of N integers from 1 to N 
  with one number missing. For example, you are given 
  {1, 3, 4, 5}, and N = 5, the missing number is 2. 
  Find the missing number.
*/

const findMissingNumber = (arr, n) => {

  let start = 0, end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (
      (arr[mid + 1] && arr[mid] + 1 !== arr[mid + 1]) ||
      (mid === arr.length - 1 && arr[mid] !== n)
    ) {
      return mid + 2;
    }

    if (
      arr[mid] - 1 !== arr[mid - 1] ||
      (mid == 0 && arr[mid] !== 1)
    ) {
      return mid + 1;
    }

    if (arr[mid] != mid + 1) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return null;
};

findMissingNumber([1,2,3,4,5,6,7,9,10], 10)


