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

each object has a constructor property and that referances the function that was used to create that object

functions themselves in javascript are objects that are made with the constructor function

call, apply

getter is a function that is used to read a property

use 

Object.defineProperty to define getters and setters

classical vs prototypical

when you hear prototype just think parent

and it enherits all the members in its prototype

its first property will be constructor which referances the function that was used to create the object.

every object we make in javascript directly or indirectly inherits from the base object which gives it a series of properties and methods. It is the root of all objects in javascript and it does not have a prototype or parent.

let x = {}

Object.getPrototypeOf(x)

will return base object which has no prototype

__proto__ is depreicated so don't use it anymore in code, but ok when you are debuggin your applications

when you call a method or property on an object if javascript can't find it, it will check the prototype of that object

a prototype is just a regular object in memory, every object has a prototype or parent except the root object


arrays inherit from a base array prototype that gives us such methods as push or pop

let ar = []

ar inheritis from arraybase and arraybase inherits from object base

this is multiplevel inheritance

objects created from a given constructor will have the same prototype

keep inheritance to one level and never go any lower or else your projects will become far to complex and brittle

example mixins

const canEat = {
	eat: function(){
		this.hunger--
		console.log('eating')
	}
}

const canWalk = {
	walk: function() {
		console.log('walking')
	}
}

function Person(){
	
}

Object.assign(Person.prototype, canEat, canWalk)

const person = new Person

console.log(person)

making private methods and properties on a class in es6

```javascript
const _radius = Symbol();
const _draw = Symbol(); 


class Circle {
	constructor(radius){
		this[_radius] = radius
	}

	[_draw](){

	}
}
```

new WeakMap()

What is a code smell? A code smell is when you have a peice of code that itself could look confusing from someone. Below is a few examples of how to help eliminate code smells.

examples of code smells

variable declarations that are either too short or too long
variable declarations that do not give meaning to what is going on

functions that do more than one thing

functions that have more than 3 parameters

avoid output parameters and return an object from a method instead

declare variables close to thier usage

avoid magic numbers, eg varaibles to numbers to don't give a clear idea as what they are about

avoid nested conditionals (if statements). You can help lower the amount of nested conditionals by using the logical && operator. You can also assigne variables to a conditional. Also, its great to use the ternary operator, but don't go more than one level with the turnary because then its hard to follow.

let b = 5, y = 4, c

//bad nested conditional
if (b > 3){
  if (y < 10){
    console.log('its true bad version')
  }
}

//setting conditional to a variable
let x = b > 3 && y < 10


if (x) console.log('its true good version')

//example of using a turnary
b > 3 && y < 10 ? (c = true) : c = false


console.log(`c: ${c}`)

refactor out long ugly switch statements with polymorphism

avoid duplicate code, try to exercise DRY: don't, repeat, yourself


comments:

don't state the obvious

//returns the customers
let returnCustomers = () => {
	
}

the best comment is the code itself. The code should be so clean and so easy to follow that there is little to no need for comments at all. Comments relating to version history or dates of changes so as on this date so and so made a change and so on.

Comments that help clearify code that could just be renamed.

let pa = 19.99 // pay amount

why not just rename the variable?

let payAmount = 19.99

dead code

```javascript
/*
	class Node {
		constructor(number){
			this.number = number
		}
	}
*/
```

just delete the dead code. You can always put it bad from your source code repository.

Comments are good when you have problems in the code that need to be worked out, there are some constraits that are messing things up maybe because of legacy reasons, maybe a problem in the database, maybe a third party component

Write comments to describe whys and hows, but not whats, the code should be self descritive enough to describe what it is doing.

don't write comments, re-write your code
don't explain "whats" (the obvious)
Explain "whys" and "hows"


long methods

a long method is more than 10 lines of code!

long method are:

hard to change
hard to understand
hard to re-use

it is best to have your method specialize in one thing,
when it become too long we suffer form jack of all trades syndrome
like a chief who is also a manager who is also an accountant

things that are related should be together and things that are not related
should not be together

same theory relates to making classes

we then adhear to the single responsibilty principal


Solid Principlal

S - Single Responsibility

A class/function should have only one reason to change. Meaning that the class/function should have only one job. When your function is doing more than one thing its time to make another function. This will ensure that your code is readable, testable, reusable, and maintainable.

O - Open Close Principle

Software entities (classes, modules, functions, ect.) should be
open for extension, but closed for modification. New features can be added without introducing new bugs. You can add new features by extending or writing new conde without modifying old code. Benefits Agile and Reliable.

L - Liskove Substitution

Ability to replace any instace of a parent class with an instane of one of its child classes without negative side effects.
If you cann't substitude a child class for its parent and your is still functional then your in violaction of this rule. A child class is only ment to extend the behavior of the parent. It should not be altering the behavior.

Example of violation

class Square extends Rectangle

A square has an equal width and height while a rectangle has a different width and height.


Better Example

class Square extends Shape

the only thing the square class does is adds functionality to shape.

I - interface segregation principle

A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use.

example 

interface IColors {
	paintRed();
	paintYellow();
	paintBlue();
}

```javascript
class Red implements IColors {

	/* red now has but it only needs paintRed
	paintRed(){
	}

	paintYellow(){
	}

	paintBlue(){

	}
	*/
}
```
IRed {
	paintRed()
}

class Red extends IRed {
	//now red does not have undeeded functions
}



D - Dependency Inversion Principle

High level objects should not depend on low level implementations. Both should depend of abstrations. Interfaces and abstract classes are considered high level resources. A concrete class is considered a low level resource.

example

Button  ->   SwitchableDevice	 <- Lamp
push()			 turnOff()				 <- Fan
						 turnOn()					 <- TV








