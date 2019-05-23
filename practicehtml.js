let nodes = document.querySelectorAll('.test')

console.log(nodes)

let vals = new Set(['a', 'e', 'i', 'o', 'u', 'y'])


let checkChild = (nodes) => {
	let ar = []

	for (let i = 0; i < nodes.length; i++){
		console.log(nodes[i].childNodes)
	}



}

checkChild(nodes)