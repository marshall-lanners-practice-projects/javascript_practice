let ar = [1,2,3,4]

//example for loops

//loop up an array
for (let i = 0; i < ar.length; i++){
	console.log(ar[i])
}

//loop down an arry
for (let i = ar.length - 1; i >= 0; i--){
	console.log(ar[i])
}

//example while loops
let x = 0
let y = ar.length - 1

//loop up an array
while(x < ar.length){
	console.log(ar[x])
	x++
}

//loop down an array
while (y >= 0){
	console.log(ar[y])
  y--
}

//example array methods

//forEach
//does an action for each item in array
ar.forEach(item => {
	console.log(item)
})

//map
//creates a new array with each item multiplied by 2
let double = ar.map(item => {
	return item * 2
})
console.log(double)

//filter
//creates a new array of items that are even
let even = ar.filter(item => {
  return item % 2 === 0
})

console.log(even)

//push
//adds an item to the end of the array
ar.push(5)
console.log(ar)

//pop
//removes an item from the end of the array
ar.pop()
console.log(ar)

//unshift
//adds an item to the front of the array
ar.unshift(0)
console.log(ar)

//shift
//removes an item from the front of the array
ar.shift()
console.log(ar)

//slice
//creates a new array with the selected elements form the old array
console.log(ar.slice(1,3))
console.log(ar.slice(1))

//splice
//The splice() method adds/removes items to/from an array, and returns the removed item(s).
let days = ['mon', 'tues', 'fri',]

days.splice(2, 0, 'wens', 'thurs')
console.log(days)

days.splice(5, 0, 'sat', 'sun')
console.log(days)

days.splice(5, 2)
console.log(days)

days.splice(2, 2)
console.log(days)

days.splice(0, 2, 'fri', 'fri')
console.log(days)
//every day should be friday






















