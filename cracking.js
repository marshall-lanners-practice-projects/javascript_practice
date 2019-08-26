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



