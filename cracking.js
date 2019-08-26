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




