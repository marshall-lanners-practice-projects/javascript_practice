
//example of binary search

let biarySearch = (list, item) => {
	let low = 0, high = list.length - 1, mid, guess, counter = 0

	while(low <= high){
		mid = low + high
		guess = list[mid]
		if (guess === item){
			console.log(`you found it ${item} in ${counter} tries`)
			return mid
		} else if (guess > item){
			counter++
			high = mid - 1
		} else {
			counter++
			low = mid + 1
		}
	}
	console.log('not found')
	return false
}

biarySearch([1,3,5,7,9,10,12,13,14,15,16,17,18,19,20], 12)