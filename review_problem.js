// change - case to camel case

let data = {
	"data-one": {"nested-data": {"more-nested": 'some data'}},
	"data-tow": 'some data',
	"data-three": {"nested-data": 'some data'},
	"data-four": {"nested-data": {"more-nested": {"even-more": 'some data'}}},
}

let helper = (string) => {
	let buildStr = ''
	for (let i = 0; i < string.length; i++){

		if (string[i] === '-'){
			i++
			buildStr += string[i].toUpperCase()
		} else {
			buildStr += string[i]
		}
	}
	return buildStr
}


let temp
let camelCase = (data, obj) => {

	let ar = Object.keys(data)
	console.log(ar)

	for (let i in ar){
		temp = ar[i]
		ar[i] = helper(ar[i])
		obj[ar[i]] = data[temp]
	}

	console.log(obj)

	for (let i in obj){
		while(obj[i] !== undefined){
			camelCase(data, obj)
		}
	}

}

camelCase(data, {})








