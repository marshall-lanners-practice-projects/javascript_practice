OOP NOTES FOR INTERVIEW

CORE CONCEPTS OF OOP

Abstraction, Encapsulation, Inheritance, and Polymorphism.

In OOP when we group a number of related variables and functions into a unit. We call that unit an object. The variables are referred to as properties and the functions are methods. When done so we call this encapsulation. In javascript the THIS keyword is encapsulated to that one particular object's properties and methods. This way we don't have to pass in the properties as parameters to any of the methods. Encapsulation has to deal with how we interface with the object. Essentially we can hide properties and methods from the outside. This is used to reduce the impact of change in the rest of our application and make its interface simpler. Inheritance is used to pass properties and methods to other objects. This gives us the benefit for passing on needed functionality and also it cuts down on redundant code. If I have multiple classes that inherit a method from a base class and I want each class to have a slightly different behavior all I need to do is re define that method in the new class. Doing so is an example of polymorphism. To accomplish the same thing in a procedural programming context we would have to a long series of if else statements.

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

value 		vs 		referance types

number					Object
String					functions
Boolean					arrays
Symbol
undefined
null




















