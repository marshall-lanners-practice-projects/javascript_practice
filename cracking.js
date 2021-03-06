/*
	Implement an algorithm to determine 
	if a string has all unique characters. 
	What if you cannot use additional data structures?
*/


const hasDups = (word) => {
  const hash = {}
  for (let i = 0; i < word.length; i++){
    if (hash[word[i]]) return true
    hash[word[i]] = true
  }
  return false
}


hasDups('abc')

/*
  Given two strings, write a method to decide if 
  one is a permutation of the other.
*/

const isPerm = (word1, word2) => {
  if (word1.length !== word2.length) return false

  const hash1 = {}, hash2 = {}

  for (let i = 0; i < word1.length; i++){
    let x = word1[i]
    let y = word2[i]
    hash1[x] ? hash1[x]++ : hash1[x] = 1
    hash2[y] ? hash2[y]++ : hash2[y] = 1
  }

  for (let key in hash1){
    if (hash1[key] !== hash2[key]) return false
  }
  return true
}

isPerm('abc', 'bca')

/*
  URLify: Write a method to replace all 
  spaces in a string with '%20: You may assume that 
  the string has sufficient space at the end to hold 
  the additional characters, and that you are given 
  the "true" length of the string. 
  (Note: If implementing in Java, please use a character 
  array so that you can perform this operation in place.)
  EXAMPLE
  Input: "Mr John Smith " J 13 
  Output: "Mr%20J ohn%20Smith" Hints: #53, #7 78
*/

const replace = (str) => {
  str = str.split('')
  for (let i = 0; i < str.length; i++){
    if (str[i] === ' ') str[i] = "%20"
  }
  return str.join('')
}

replace('abc def ab c')

/*
  Given a string, write a function to check if it is a permutation 
  of a palin- drome. A palindrome is a word or phrase that is the same
  forwards and backwards. A permutation is a rearrangement of letters.
  The palindrome does not need to be limited to just dictionary words.

  EXAMPLE
  Input: Tact Coa
  Output: True (permutations: "taco cat". "atco cta". etc.)

  If a string with an even length is a palindrome, every character 
  in the string must always occur an even number of times. 
  If the string with an odd length is a palindrome, 
  every character except one of the characters must always occur 
  an even number of times. Thus, in case of a palindrome, 
  the number of characters with odd number of occurences can't 
  exceed 1(1 in case of odd length and 0 in case of even length).

*/

const palindromPerm = (word) => {
  const hash = {}

  for (let i = 0; i < word.length; i++){
    hash[word[i]] ? hash[word[i]]++ : hash[word[i]] = 1
  }

  let isEven = word.length % 2 === 0

  const validateEven = (hash) => {
   for (let key in hash){
     if (hash[key] % 2 !== 0) return false
   }
   return true
  }

  const validateOdd = (hash) => {
    let count = 0
    for (let key in hash){
      hash[key] % 2 !== 0 && (count++)
    }
    return count === 1
  } 

  return isEven ? validateEven(hash) : validateOdd(hash)

}

palindromPerm('careerac')


/*
  One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
  EXAMPLE
  pale, ple -> true
  pales. pale -> true
  pale. bale -> true
  pale. bake -> false
*/

const oneAway = (w1, w2) => {
  
  if (Math.abs(w1.length - w2.length) > 1) return false

  const makeHash = (hash, word) => {
    for (let i = 0; i < word.length; i++){
      hash[word[i]] ? hash[word[i]]++ : hash[word[i]] = 1
    }
    return hash
  }

  const hash1 = makeHash({}, w1)
  const hash2 = makeHash({}, w2)

  let diff = 0

  for (let key in hash2){
   if (hash1[key] && hash1[key] != hash2[key]){
     diff += Math.abs(hash1[key] - hash2[key])
   }
   if (!hash1[key]) diff += hash2[key]
  }
  return diff === 1
}

oneAway('abccc', 'abccdqqq')


/*
  String Compression: Implement a method to perform basic string 
  compression using the counts of repeated characters. 
  
  input: aabcccccaaa
  output: a2b1c5a3
  
  If the "compressed" string would not become smaller than 
  the original string, your method should return the original string. 
  
  You can assume the string has only uppercase and lowercase letters (a - z).
*/

const compression = (w) => {
  let str = '', count = 1
  for (let i = 0; i < w.length; i++){
    if (w[i] === w[i + 1]){
      count++
    } else {
      str += `${w[i]}${count}`
      count = 1
    }
  }
  return str.length < w.length ? str : w
}

compression('abbbbbc')

class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }

  add(val){
    let node = new Node(val)
    if (this.size === 0) {
      this.head = node
    } else {
      let current = this.head, prev
      while(current){
        prev = current
        current = current.next
      }
      prev.next = node
    }
    this.size++
  }

  log(){
    if (this.size === 0) return 'no nodes'
    let current = this.head
    let str = ''
    while(current){
      str += `${current.val} -> `
      current = current.next
    }
    str += 'null'
    console.log(str)
  }

  /*
  Remove Dups: Write code to remove duplicates from an unsorted linked list. 

  FOLLOW UP
  How would you solve this problem if a temporary buffer is not allowed?
  */

  removeDups(){
    let current = this.head
    let next = current.next
    const hash = {};
    hash[current.val] = true
    while(next){
      if (hash[next.val]){
        current.next = next.next
      } else {
        hash[next.val] = true
        current = next
      }
      next = next.next
    }
  }

  /*
    Partition: Write code to partition a linked 
    list around a value x, such that all nodes less than 
    x come before all nodes greater than or equal to x. If 
    x is contained within the list, the values of x only need 
    to be after the elements less than x (see below).
    The partition element x can appear anywhere in the "right partition"; 
    it does not need to appear between the left and right partitions.

    [partition = 5]
    Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> null
    Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
  */

  partition(val) {
    let linkedList1 = new LinkedList()
    let linkedList2 = new LinkedList()
    let current = this.head

    while(current){
      if (current.val < val){
        linkedList1.add(current.val)
      } else {
        linkedList2.add(current.val)
      }
      current = current.next
    }

    let current2 = linkedList1.head, prev
    while(current2){
      prev = current2
      current2 = current2.next
    }

    prev.next = linkedList2.head
    this.head = linkedList1.head
  }

}

class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}


linkedList = new LinkedList()
linkedList.add(7)
linkedList.add(1)
linkedList.add(6)
linkedList.log()

linkedList2 = new LinkedList()
linkedList2.add(5)
linkedList2.add(9)
linkedList2.add(2)
linkedList2.log()

/*
  Sum Lists: You have two numbers represented by a 
  linked list, where each node contains a single digit. 
  The digits are stored in reverse order, such that the 1's 
  digit is at the head of the list. Write a function that 
  adds the two numbers and returns the sum as a linked list.

  EXAMPLE
  input: (7 -> 1 -> 6) + (5 -> 9 -> 2) 
  617 + 295
  output: 2 -> 1 -> 9. 912
*/

const sumLists = (node1, node2) => {

  let str
  const getSum = (node) => {
    str = ''
    if (!node) return str
    getSum(node.next)
    str += node.val
    return Number(str)
  }

  const num1 = getSum(node1)
  const num2 = getSum(node2)
  const final = (num1 + num2).toString()
  let list = new LinkedList()
  for (let i = 0; i < final.length; i++){
    list.add(final[i])
  }

  return list
}

const combined = sumLists(linkedList.head, linkedList2.head)
combined.log()

/*
  Palindrome: Implement a function to check if a linked list is a palindrome.
*/

linkedList3 = new LinkedList()
linkedList3.add(1)
linkedList3.add(2)
linkedList3.add(3)
linkedList3.add(2)
linkedList3.add(1)
linkedList3.log()

const isPalindrom = (list) => {
  let bol = true, current = list
  const checkList = (list) => {
    if (!list) return list
    checkList(list.next)
    current.val !== list.val && (bol = false)
    console.log(current.val, list.val)
    current = current.next
    return bol
  }
  return checkList(list)
}

isPalindrom(linkedList3.head)

/*
  find intersection of linked list
*/

const getIntersectionNode = (headA, headB) => {
  let currA = headA;
  let currB = headB;
  while (currA) {
      currA.visited = true;
      currA = currA.next;
  }
  while (currB) {
      if (currB.visited) { return currB; }
      currB = currB.next;
  }
  return null;
}

/*
  determin if linked list has a cycle
*/

const hashCycle = (head) => {
  let slow = head, fast = head
    while (fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) return true
    }
    return false
}

// STACKS
//-----------------------------------------------

/*
  Stack Min: How would you design a stack which, 
  in addition to push and pop, has a function min 
  which returns the minimum element? Push, pop and 
  min should all operate in 0(1) time.
*/

class Stack {
  constructor(){
    this.stack = []
    this.minStack = []
  }

  push(val){
    this.stack.push(val)
    if (this.minStack.length === 0){
      this.minStack.push(val)
    } else {
      this.minStack[this.minStack.length - 1] >= val && this.minStack.push(val)
    }  
  }

  pop(val){
    let popped = this.stack.pop()
    popped === this.minStack[this.minStack.length - 1] && this.minStack.pop()
    return popped
  }

  min(){
    return this.minStack[this.minStack.length - 1]
  }

}

let stack = new Stack()

stack.push(5)
stack.push(2)
stack.push(10)
stack.push(1)
console.log(stack.min())

/*
  implement a queue using two stacks.
*/

class Queue {
  constructor(){
    this.input = []
    this.output = []
  }

  enqueue(x){
    this.input.push(x)
  }

  dequeue(x){
    while(this.input.length !== 0){
      this.output.push(this.input.pop())
    }
    return this.output.pop()
  }
}

const q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
console.log(q.dequeue())

/*
  Sort Stack: Write a program to sort a stack 
  such that the smallest items are on the top. 
  You can use an additional temporary stack, 
  but you may not copy the elements into any 
  other data structure (such as an array). 
  The stack supports the following operations: push, pop, peek, and isEmpty.
*/

class Stack {
  constructor(){
    this.stack = []
  }

  push(x){
   this.stack.push(x)
  }

  peek(){
    return this.stack[this.stack.length - 1]
  }

  sort(){
    const helper = []
    while(this.stack.length !== 0){
      let popped = this.stack.pop()
      while(helper.length !== 0 && 
      helper[helper.length - 1] > popped
      ){
        this.stack.push(helper.pop())
      }
      helper.push(popped)
    }
    this.stack = helper
  }
}

const stack = new Stack()
stack.push(4)
stack.push(8)
stack.push(3)
stack.push(1)
stack.push(10)
stack.push(2)
stack.sort()
console.log(stack.stack)


/* 
  Graphs: Breadth-first search 
  get the distance of all nodes in directed graph
*/

const bfs = (graph, root) => {
  const nodesLen = {}
  for (let i = 0; i < graph.length; i++){
    nodesLen[i] = false
  }
  nodesLen[root] = 0
  let current
  let que = [root]
  while(que.length !== 0){
    current = que.shift()
    let connections = graph[current]
    for (let i = 0; i < connections.length; i++){
      if (connections[i] === 1 && nodesLen[i] === false){
        nodesLen[i] = nodesLen[current] + 1
        que.push(i)
      }
    }
  }
  return nodesLen
}

var exBFSGraph = [
  //connections
  [0, 1, 1, 1, 0],   //nodes
  [0, 0, 1, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];
console.log(bfs(exBFSGraph, 4));

/* 
    Graph representation

    0 - >  1 < - 4
    ^  \/^ 
    | v  v 
    2 < -  3 - - >
           ^     |
           | _ _ |
  */

  
