/*
	* querySelector *
	will look up first item that matches the specificed search criteria
*/

let title = document.querySelector('h1')
console.log(title)
title.style.color = "blue"

/*
	* querySelectorAll *
	will look up all items that match the search criteria
*/

//look up all p tags
let divPs = document.querySelectorAll('p')
console.log(divPs)

//you can also effect attributes by uses a . 
let img = document.querySelector('img')
img.src = "http://myhswm.org/images/sized/images/animals/GoliathCat2-256x256.JPG"

//you can also set attributes by using the setAttribute method
let img2 = document.querySelectorAll('img')[1]
img2.setAttribute('src', 'https://shortlist.imgix.net/app/uploads/2018/05/30093716/americas-got-talent-just-gave-us-the-greatest-cat-video-of-all-time-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress')

/*
	example ways to alter the dom
*/

//lets create a dive and append it
let newDiv = document.createElement('div')
let newP = document.createElement('p')
newP.textContent = "I'm some created content for a p tag"
newDiv.appendChild(newP)

let toAppend = document.querySelector('div')
toAppend.appendChild(newDiv)


let classPs = document.querySelectorAll('.noVals')
console.log(classPs)

let vals = new Set(['a', 'e', 'i', 'o', 'u'])

let builtStr = ''

for (let i = 0; i < classPs.length; i++){
	for (let j = 0; j < classPs[i].innerText.length; j++){
		if (!vals.has(classPs[i].innerText[j])){
			builtStr += classPs[i].innerText[j]
		}
	}
	classPs[i].innerText = builtStr
	builtStr = ''
}

console.log(ar)
