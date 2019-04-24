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



