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












