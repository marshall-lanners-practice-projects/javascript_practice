/*
	common questions for javascript

	what is the difference between let and var

	let is a new addition to javascript

	var has been with javascript since the beginning

	let has block skope
	let does not get hoisted

	var has functional skope
	var also gets hoisted


	difference between === and ==

	they are both comparison operators

	== compares the values

	=== compares the values and the type

	== will not check for type

	'1' == 1 //true
	'1' === 1 //false 

	different between let and const

	let will let you change the value after it was defined
	const will not let you re assign the value after it was defined

	const c = 5
	c = 4 //error

	let c = 5
	c = 4 //no error

	however
	const c = []
	c.push(5) // will be ok, just can't re assign value

	different between null and undefined

	null is a value you assign yourself if you made a variable and give it no value
	its default will be undefined

	you can set undefined manulaly, but its not a good practice

	typeof undefined = undefined
	typeof null = object

	why arrow functions?

	asside for looking nicer, it does not have a value of this assosicated with it

	all normaly functions have its own this. So when you use this in an arrow function
	it will look up one block level to see what the current this is

	arrow functions are popular in react apps because you don't have to bind this
	to each class

	what is prototypal inheritance

	all objects have a property called protoype

	where you can add methods and properties to it

	and if you create new objects from these objects

	the new object will automatically inherit those properties

	from the prototype

	whats the difference between function declaration and function expression

	a function declaration

	funcD() // no error
	funcE() // error

	function funcD(){
		console.log('function declaration')
	}

	let funcE = function(){
		console.log('function expression')
	}

	also function declaration can be called above
	of thier defining, but a function expression
	acts like a variable and will through an error

	also a function declaration cannot be passed to another
	function as a parameter

	what is a promise and why do we use it?

	when I want to make an async call that has to wait
	for something to happen we use a promise

	in react I would use promises with axios to 
	only trigger once the data was recived or not
	recived

	what is setTimeout() ?

	set time out takes a function and executes
	it after an a loted amount of time

	setTimeout(function(){
		console.log('a');
	}, 0);

	console.log('b');
	console.log('c')

	output
	b
	c
	a

	it has to wait for everything on a stack to finish

	b and c are on the stack so they execute first
	then a is asyncinus so it will execute next

	what is a closure and how do we use it?

	javascript uses whats called lexicall scoping

	inside variables are not allowed outside, but outside
	varaibles are allowed inside

	it does this with a closure
*/

//example

let counter = 0;

function add(){
	counter += 1;
}

add()
add()
add()

console.log(counter)

//in javascript all functions have access to the scope about them

let counter2 = 0
function addCounter(){
	function plus() {counter2 += 1}
	plus()
	console.log(counter2)
}

addCounter()
addCounter()
addCounter()
addCounter()

/*
	what happens when you hit google.com and press enter in your url?

	you enter a url into a web browser
	the browser looks up the IP address for the domain name via DNS
	the browser sends a HTTP request to the server
	the server sends back a HTTP response
	the browser begins rendering the HTML
	the browser sends the requests for additional objects embedded in HTML (images, css, javascript) and repeats steps 3-5
	once the page is loaded, the browser sends further async requests as needed.

	how does google know its me when I'm logged in?

	google knows its me by usines cookies.

	Session cookies and persistent cookies. Session cookies expire when the browser
	exits or is closed. Persistent cookies, on the other hand, are saved into the browser dedicated
	storage for a limited amount of time (set by the server) and are also send back to the servers
	until they're not expired (so the server is able to restore the user's session)

	most sites uses cookies. A cookie is simply a way of telling that you're the same person who visited the site
	half a second ago. Without cookies, there would be no webapp state at all. Anyway when your logged in
	the server remembers that the session associated with your cookie is logged in.

	


	



*/












