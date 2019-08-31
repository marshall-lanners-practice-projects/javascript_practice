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
  Given an array arr[] of integers, find out the maximum 
  difference between any two elements such that 
  larger element appears after the smaller number.
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
  The bubble sort algorithm loops through the 
  array and keeps swapping values from left to right
  until based on which value is bigger and 
  continues to do some while there is values to swap 
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

insertionSort(arraySort) 

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

/*
  flatten an object
  input:  { a: "b", c: { d: "e"}}
  output: { a: "b", "c.d": "e"}
*/

let obj = { a: "b", c: { d: {e: 'f'}, q: {w: 'z'}} }

const flatten = (obj, key, output = {}) => {
  for (let k in obj){
    const builtKey = key ?  `${key}.${k}` : k
    if (typeof obj[k] === 'string'){
      output[builtKey] = obj[k]
    } else {
      flatten(obj[k], builtKey, output)
    }
  }
  return output
}

flatten(obj)

/*
  given a number n 
  find its value in the Fibonacci sequence
  1,1,2,3,5,8,13,21,34 . . . 
*/

const fib = (n) => {
  if (n <= 1) {return n}
  return fib(n - 1) + fib(n - 2)
}

fib(9)

/*
  given a number n 
  find its value in the Fibonacci sequence
  1,1,2,3,5,8,13,21,34 . . . 
*/

// array solution

const fib = (n) => {
  const ar = []
  ar[0] = 1
  ar[1] = 1
  for (let i = 2; i < n; i++){
    ar[i] = ar[i - 1] + ar[i - 2]
  }
  return ar[n - 1]
}

fib(9)


/*
  find the minimum sum path of items leading up to the bottom
  right corner of the graph
*/

var minPathSum = function(grid) {

    //get min path sum for first row
    
    for (let i = 1; i < grid[0].length; i++){
        grid[0][i] += grid[0][i - 1]
    }
    
    //get min path for first column
    
    for (let i = 1; i < grid.length; i++){
        grid[i][0] += grid[i - 1][0]
    }
    
    //use this to build out the rest of the grid
    
    for (let i = 1; i < grid.length; i++){
        for (let j = 1; j < grid[i].length; j++){
            grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j])
        }
    }
    
    //return item in bottom right corner of grid
    
    return grid[grid.length - 1][grid[0].length - 1]
    
};

/*
  You are a robber planning to rob houses along a street. 
  Each house has a certain amount of money stashed. 
  However, you cannot rob any two adjacent houses.
*/

const rob = function(nums) {
    
  let previous = 0
  let beforePrev = 0
  
  for (let i = 0; i < nums.length; i++){
      let tmp = previous;
      previous = Math.max(nums[i] + beforePrev, previous)
      beforePrev = tmp;
      console.log(previous, beforePrev)
  }
  return previous  
};

/* 
  Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
  Output: 3 (1-> 3 -> 8 ->9)

  First element is 1, so can only go to 3. Second element is 3, so can make at most 3 steps eg to 5 or 8 or 9.
*/

const ar = [1, 3, 1, 1, 6, 1, 1, 1, 1, 1, 1]


function jump(nums) {
    var max = 0;
    var nextMax = 0;
    var jumps = 0;

    nums.some((v, i) => {
        if (max >= nums.length - 1) {
            return true;
        }

        nextMax = Math.max(i + v, nextMax);
        
        if (i === max) {
            max = nextMax;
            jumps++;
        }
    });
    
    return jumps;
}

jump(ar)

/*
  Given a non-empty 2D array grid of 0's and 1's, an island 
  is a group of 1's (representing land) connected 4-directionally 
  (horizontal or vertical.) You may assume all four edges of the 
  grid are surrounded by water. Count the number of 
  islands in the given 2D array.
*/

const matrix = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];

const maxArea = (matrix) => {

  const dfs = (matrix, i, j) => {

    if (
      i < 0 ||
      i > matrix.length - 1 ||
      j < 0 ||
      j > matrix[i].length - 1 ||
      matrix[i][j] === 0
    ){
      return 0
    }
    
    matrix[i][j] = 0
    let count = 1
    count += dfs(matrix, i + 1, j)
    count += dfs(matrix, i - 1, j)
    count += dfs(matrix, i, j + 1)
    count += dfs(matrix, i, j - 1)
    return count
  }

  let max = 0
  for (let i = 0; i < matrix.length - 1; i++){
    for (let j = 0; j < matrix[i].length - 1; j++){
      if (matrix[i][j] === 1){
        max = Math.max(max, dfs(matrix, i, j))
      }
    }
  }
  return max
}

maxArea(matrix)


/*
  find the longest common prefix in a list of words in an array
  if there might be more than one common prefix
*/

const ar = ['canadian', 'electricity', 'electrician', 'canada']

const longestCommonPrefix = strs => {

  if (strs.length === 0) return ''
  let current = ''
  let prefix = ''
  strs = strs.sort()

  for (let i = 0; i < ar.length - 1; i++){
    for (let j = 0; j < ar[i].length; j++){
      if (ar[i][j] === ar[i + 1][j]){
        current += ar[i][j]
      } else {
        current.length > prefix.length && (prefix = current)
        current = ''
      }
    }
  }
  return prefix   
};

longestCommonPrefix(ar)

/*
  find the common prefix in a list of words if there is only
  one common prefix
*/

const ar = ["flower","flow","flight"]

const longestCommonPrefix = strs => {
    if (strs.length === 0) return ''
    let prefix = ''
    
    for (let i = 0; i < strs[0].length; i++){
        const character = strs[0][i]
        for (let j = 0; j < strs.length; j++){
            if (strs[j][i] !== character) return prefix
        } 
        prefix = prefix + character
    }
    return prefix
};

longestCommonPrefix(ar)

const comments = [
  { id: 1, body: "Comment 1", parent: 3 },
  { id: 2, body: "Comment 2", parent: 1 },
  { id: 3, body: "Comment 3", parent: null },
  { id: 4, body: "Comment 4", parent: 5 },
  { id: 5, body: "Comment 5", parent: null },
  { id: 6, body: "Comment 6", parent: 5 },
  { id: 7, body: "Comment 7", parent: 1 }
];

/*
  Comment 3
    Comment 1
      Comment 2
      Comment 7
  Comment 5
    Comment 4
    Comment 6
*/


const printComments = comments => {
  const mapping = restructureComments(comments);
  // go through all the comments without a parent
  for (let c of mapping[null].children) {
    printComment(mapping[c], mapping, "");
  }
};

// recursively print the comments
const printComment = (comment, mapping, tab) => {
  console.log(`${tab}${comment.body}`);
  for (let child of mapping[comment.id].children) {
    printComment(mapping[child], mapping, tab + "  ");
  }
};

const restructureComments = comments => {
  const commentsMapping = {};
  for (let comment of comments) {
    if (commentsMapping[comment.id]) {
      commentsMapping[comment.id].body = comment.body;
      commentsMapping[comment.id].parent = comment.parent;
    } else {
      commentsMapping[comment.id] = comment;
      commentsMapping[comment.id].children = [];
    }

    if (commentsMapping[comment.parent]) {
      commentsMapping[comment.parent].children.push(comment.id);
    } else {
      commentsMapping[comment.parent] = {
        id: comment.parent,
        children: [comment.id]
      };
    }
  }
  return commentsMapping;
};

/*
  make a linked list with array like functionality
  and with the ability to be reversed
*/

class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }

  push(val){
    const node = new Node(val)
    if (this.size === 0) {
      this.head = node
      this.size++
    } else {
      let current = this.head, prev
      while(current){
        prev = current
        current = current.next
      }
      prev.next = node
      this.size++
    }
  }

  unshift(val){
    const node = new Node(val)
    if (this.size === 0){
      this.head = node
    } else {
      let temp = this.head
      node.next = temp
      this.head = node
      this.size++
    }
  }

  log(){
    if (this.size === 0) {
      return 'No Nodes'
    } else {
      let str = ''
      let current = this.head
      while(current){
        str += `${current.val} -> `
        current = current.next
      }
      str += 'null'
      console.log(str)
    }
  }

  insert(val, index){
    if (index < 0 || index > this.size){
      console.log('index outside linked list')
      return
    }
    let i = 1
    let current = this.head, prev
    while (i < index){
      prev = current
      current = current.next
      i++
    }
    const node = new Node(val)
    prev.next = node
    node.next = current
    this.size++
  }

  pop(){
    if (this.size === 0) return 'empty'
    if (this.size === 1){
      let popped = this.head.val
      this.head = null
      this.size--
      return popped
    }

    let current = this.head, prev
    while(current.next){
      prev = current
      current = current.next
    }

    let popped = current.val
    prev.next = null
    this.size--
    return popped
  }

  shift(){
    if (this.size === 0) return 'empty'
    let shifted = this.head.val
    this.head = this.head.next
    this.size--
    return shifted
  }

  deleteAt(index){
    if (index < 0 || index > this.size) {
      return 'outside linked List'
    }

    if (index === 1){
      this.head = this.head.next
      this.size--
      return
    }
    let i = 1
    let current = this.head, prev
    while(i < index){
      prev = current
      current = current.next
      i++
    }

    prev.next = current.next
    this.size--
  }

  reverse(){
    if (this.size === 0) return 'empty'
    let current = this.head, prev = null, next
    while(current){
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
  }
}

class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}


class TreeNode {
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
}

let root = new TreeNode(20)
root.left = new TreeNode(15)
root.right = new TreeNode(32)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(17)
root.right.left = new TreeNode(25)
root.right.right = new TreeNode(40)
/*
        BST TREE
          20
        /    \
      15      32
    /   \    /   \
   9    17  25   40
*/

/*
  If you know you need to explore the roots before inspecting any leaves, 
  you pick pre-order because you will encounter all the roots before all 
  of the leaves.

  If you know you need to explore all the leaves before any nodes,
  you select post-order because you don't waste any time inspecting
  roots in search for leaves.

  If you know that the tree has an inherent sequence in the nodes,
  and you want to flatten the tree back into its original sequence, 
  than an in-order traversal should be used. The tree would be flattened
  in the same way it was created. A pre-order or post-order traversal
  might not unwind the tree back into the sequence which was used to create it.
*/

/*
  - Pre-order -
  read data, go left, go right
  root, left, right
  20, 15, 9, 17, 32, 25, 40
*/


const preDFS = (root, stack = []) => {
  if (!root) return stack
  stack.push(root.val)
  preDFS(root.left, stack)
  preDFS(root.right, stack)
  return stack
}

/*
  - In-order - 
  go left, read data, go right
  In-order  left, root, right
  9, 15, 17, 20, 25, 32, 40
*/

const inOrderDFS = (root, stack = []) => {
  if (!root) return stack
  if (root.left) inOrderDFS(root.left, stack)
  stack.push(root.val)
  if (root.right) inOrderDFS(root.right, stack)
  return stack
}

/*
  - Post-order -
  go left, go right, read data
  left, right, root
  9, 17, 15, 25, 40, 32, 20
*/

const postOrderDFS = (root, stack = []) => {
  if (!root) return stack
  if (root.left) postOrderDFS(root.left, stack)
  if (root.left) postOrderDFS(root.right, stack)
  stack.push(root.val)
  return stack
}

/*
  level order traversal
  also know as breath first search
  goes down one level at a time
  20, 15, 32, 9, 17, 25, 40
*/

const bfs = (root) => {
  if (!root) return
  let q = []
  q.push(root)
  let str = ''
  while(q.length > 0){
    let current = q[0]
    str += `${q[0].val} `
    if (current.left) q.push(current.left)
    if (current.right) q.push(current.right)
    q.shift()
  }
  return str
}

console.log('bfs: ', bfs(root))
console.log('preDFS: ', preDFS(root))
console.log('inOrderDFS: ', inOrderDFS(root))
console.log('postOrderDFS: ', postOrderDFS(root))


/*
  The tilt of a tree node is defined as the 
  absolute difference between the sum of all left subtree 
  node values and the sum of all right 
  subtree node values. Null node has tilt 0.
*/

var findTilt = function(root){
  let total = 0
  const getTotal = (root) => {
    if (!root) return 0;
    let left = getTotal(root.left)
    let right = getTotal(root.right)
    total += Math.abs(left - right)
    return root.val + left + right
  }
  getTotal(root)
  return total
}

/*
  A binary tree is univalued if every node in the tree has the same value.
  Return true if and only if the given tree is univalued.
*/

var isUnivalTree = function(root) {
  if(!root) return true;
  if(root.left && root.val !== root.left.val) return false;
  if(root.right && root.val !== root.right.val) return false;
  return isUnivalTree(root.left) && isUnivalTree(root.right);
};

/*
  Given a Binary Search Tree (BST), convert it to a Greater 
  Tree such that every key of the original BST is changed to 
  the original key plus sum of all keys greater than the original key in BST.
*/

var convertBST = (root) => {
  if (root === null) return root;
  let curSum = 0;
  var dfs = (node) => {
      if (node === null) return;
      dfs(node.right)
      curSum += node.val;
      node.val = curSum;
      dfs(node.left);
  }
  dfs(root)
  return root;
}

/*
  Given a binary tree, check whether it is a mirror of itself 
  (ie, symmetric around its center).
    1
   / \
  2   2
 / \ / \
3  4 4  3

*/

var isSymmetric = function(root) {
  if (root === null) return true;
  
  const checkSym = (left, right) => {
    if (left === null || right === null) return left === right
    if (left.val !== right.val) return false
    return checkSym(left.left, right.right) && checkSym(left.right, right.left)
  }  
  
 return checkSym(root.left, root.right); 
};


/*

  Given two binary trees, write a 
  function to check if they are the same or not.

  Two binary trees are considered the same if they 
  are structurally identical and the nodes have the same value

   1         1
  / \       / \
 2   3     2   3

*/


var isSameTree = function(p, q) {
  if (!p && !q){return true}
  if (!p && q || p && !q){return false}
  if (p.val !== q.val){return false}
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

/*

  Given two non-empty binary trees s and t, check whether tree t 
  has exactly the same structure and node values with a subtree of s. 
  A subtree of s is a tree consists of a node in s and all of 
  this node's descendants. The tree s could also be considered as a subtree of itself.

    s:

     3
    / \
   4   5
  / \
 1   2

  t:

   4 
  / \
 1   2

*/

var isSubtree = function(s, t) {

  if (!s) return false
  
  let isSame = (s, t) => {
      if (!s && !t) return true;
      if (!s || !t) return false;
      return s.val === t.val && isSame(s.left, t.left) && isSame(s.right, t.right)
  }

  return isSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)

};

/*

invert a binary tree

     4
   /   \
  2     7
 / \   / \
1   3 6   9

     4
   /   \
  7     2
 / \   / \
9   6 3   1

*/

var invertTree = function(root) {
  if (!root) return null
  const invert = (root) => {
    if (!root){return}
    let left = root.left
    root.left = root.right
    root.right = left
    invert(root.left)
    invert(root.right)
    return root
  }
  
  root = invert(root)
  return root
};

/*
  Given two binary trees and imagine that when you put one of them to cover the other, 
  some nodes of the two trees are overlapped while the others are not.

  You need to merge them into a new binary tree. 
  The merge rule is that if two nodes overlap, then sum 
  node values up as the new value of the merged node. 
  Otherwise, the NOT null node will be used as the node of new tree.
*/

var mergeTrees = function(t1, t2, root) {
  if (!t1) return t2    
  if (!t2) return t1
  root = new TreeNode(t1.val + t2.val)
  root.left = mergeTrees(t1.left, t2.left, root)
  root.right = mergeTrees(t1.right, t2.right, root)
  return root
};

/*
  Given a binary tree, find its maximum depth.
  The maximum depth is the number of nodes along the 
  longest path from the root node down to the farthest leaf node.
*/

var maxDepth = function(root, counter = 0, max = 0) {
  if (!root) return counter
  counter += 1
  if (counter > max) max = counter
  let maxLeft = maxDepth(root.left, counter)
  let maxRight = maxDepth(root.right, counter)
  return maxLeft >= maxRight ? maxLeft : maxRight
};

/*
  Given the root node of a binary search tree, 
  return the sum of values of all nodes with value between L and R (inclusive).
  The binary search tree is guaranteed to have unique values.
*/

var rangeSumBST = function(root, L, R) {
  let sum = 0;
  if (!root){
      return sum;
  }
  if (root.val >= L && root.val <= R){
      sum += root.val;
  }
  
  return  sum + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
};

/*
  In a binary tree, the root node is at depth 0, and children of each depth k 
  node are at depth k+1.

  Two nodes of a binary tree are cousins if they have the same depth, 
  but have different parents.

  We are given the root of a binary tree with unique values, 
  and the values x and y of two different nodes in the tree.

  Return true if and only if the nodes 
  corresponding to the values x and y are cousins.
*/

var isCousins = function(root, x, y) {
  let parents = [];
  let depths = [];
  
  const dfs = function(node, parent, depth, val) {
      if (!node) return;
      
      if (node.val == val) {
          parents.push(parent);
          depths.push(depth);
      }
      
      dfs(node.left, node, depth + 1, val);
      dfs(node.right, node, depth + 1, val);
  }
  
  dfs(root, null, 0, x);
  dfs(root, null, 0, y);
  
  return parents[0] !== parents[1] && depths[0] === depths[1];
};
/*
  Given a binary search tree, rearrange the tree in in-order so that the 
  leftmost node in the tree is now the root of the tree, and every node has no 
  left child and only 1 right child.

  Example 1:
  Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

         5
        / \
      3    6
     / \    \
    2   4    8
   /        / \ 
  1        7   9

  Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
              \
               7
                \
                 8
                  \
                   9
*/


var increasingBST = function(root) {
    const stack = []
    const addStack = (root) => {
        if (!root) return stack
        if (root.left) addStack(root.left)
        stack.push(root.val)
        if (root.right) addStack(root.right)
    }
    addStack(root)
    let treeNode = new TreeNode(0)
    let current = treeNode
    for (let i = 0; i < stack.length; i++){
        current.right = new TreeNode(stack[i])
        current = current.right
    }
    return treeNode.right
};

const flatAr = (ar) => {
  const result = []
  const helper = (item) => {
    if (typeof item !== 'number'){
      for (let i = 0; i < item.length; i++){
        helper(item[i])
      }
    } else {
      result.push(item)
    }
  }
  helper(ar)
  return result
}
flatAr([1, [2, [3, [4, 5]]], [6,7], 10])

var isValid = function(s) {
    
    const map = {')': '(', '}': '{', ']': '['}
    const stack = []
    
    for (let i = 0; i < s.length; i++){
        if (s[i] === '{' || s[i] === '[' || s[i] === '('){
            stack.push(s[i])
        } else {
            if (stack.pop() !== map[s[i]]) return false
        }
    }
    
    return stack.length === 0;
};

class Q {
  constructor(){
    this.input = []
    this.output = []
  }
  enque(val){
    this.input.push(val)
  }
  deque(){
    while(this.input.length > 0){
      this.output.push(this.input.pop())
    }
    return this.output.pop()
  }
}

const q = new Q()

q.enque(1)
q.enque(2)
q.enque(3)
q.enque(4)
q.enque(5)

console.log(q)
const item = q.deque()
console.log(item)
console.log(q)

