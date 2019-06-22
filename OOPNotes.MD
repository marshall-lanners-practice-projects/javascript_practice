OOP NOTES FOR INTERVIEW

CORE CONCEPTS OF OOP

Abstraction, Encapsulation, Inheritance, and Polymorphism.

In OOP when we group a number of related variables and functions into a unit. We call that unit an object. The variables are referred to as properties and the functions are methods. When done so we call this encapsulation. In javascript the THIS keyword is encapsulated to that one particular object's properties and methods. This way we don't have to pass in the properties as parameters to any of the methods. Encapsulation has to deal with how we interface with the object. Essentially we can hide properties and methods from the outside. This is used to reduce the impact of change in the rest of our application and make its interface simpler and is refered to as Abstraction. Inheritance is used to pass properties and methods to other objects. This gives us the benefit for passing on needed functionality and also it cuts down on redundant code. If I have multiple classes that inherit a method from a base class and I want each class to have a slightly different behavior all I need to do is re define that method in the new class. Doing so is an example of polymorphism. To accomplish the same thing in a procedural programming context we would have to a long series of if else statements.

BENEFITS OF OOP

With Encapsulation we group related properties and methods together to reduce complexity. We can also now re use this object in different parts of the program.

With Abstraction we hide the details and the complexity and show only the essentials. This technique reduces complexity and isolates the impacts of changes in the code.

With Inheritance we eliminate redundant code.

With polymorphism we refactor ugly switch case/ else if statements

Object literals syntax. When I point a variable right to an object we have whats called an object literal. 

const circle = {
	radius: 1, 						//property
	location: { 					//property
		x: 1,
		y: 1
	},
	draw: function(){ 		//method
		console.log('draw');
	}
};

//factory function
function createCircle(radius) {
	return {
		radius,
		draw: function() {
			console.log('draw');
		}
	}
}

const circle = createCircle(1)

//constructor function
function Circle(radius) {
	this.radius = radius;
	this.draw = function(){
		console.log('draw')
	}
}

// note without the new keyward this would 
// be set to the window object

const another = new Circle(1);

every object has a constructor property which referances what was used to create that object

another.constructor // for example

the new keyward creates an empty object and passes that as the first parementer. Example Circle.call({}, 1) is the same as const another = new Circle(1)

in javascript functions are objects

value (primitives) types 		vs 		referance types

number														Object
String														functions
Boolean														arrays
Symbol
undefined
null

primitives are copied by value
Objects are copied by the referance

for example

let y = 10
let x = y
y = 20

// x is 10 and y is 20

let y = {value: 10}
let x = y
y.value = 20

//x.value = 20 and y.value = 20
//because they are both pointing to the same spot in memory

adding/removing properties

if we want to use a varaible string to change or just loop up a value from an object we can use bracket notation

obj[strVariable] = 'new string here'

or we can change it with a got

obj.str = 'some string'

we can also delete methods or properties from an object by adding the delete keyward at the start

delete circle.location
delete circle[location]

the for in loop lets you access all the keys in an object

for (let key in object){
	console.log(key, object[key])
}

const keys = Object.keys(myObj) // array of keys
const vals = Object.values(myObj) // array of values

if ('radius' in circle){
	console.log('circle has radius')
}

What is THIS in Javascript?

THIS, is referances the object that is executing the current function

in node the global object is global, and in the browser the global object is the window object,

if you use the new keyward when making a new object with either a class or a constructor function THIS will be bound to an object that was passed as an invisible paramter to your function call.























