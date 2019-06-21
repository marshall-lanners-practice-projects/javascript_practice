OOP NOTES FOR INTERVIEW

CORE CONCEPTS OF OOP

Abstraction, Encapsulation, Inheritance, and Polymorphism.

In OOP when we group a number of related variables and functions into a unit. We call that unit an object. The variables are referred to as properties and the functions are methods. When done so we call this encapsulation. In javascript the THIS keyword is encapsulated to that one particular object's properties and methods. This way we don't have to pass in the properties as parameters to any of the methods. Encapsulation has to deal with how we interface with the object. Essentially we can hide properties and methods from the outside. This is used to reduce the impact of change in the rest of our application and make its interface simpler. Inheritance is used to pass properties and methods to other objects. This gives us the benefit for passing on needed functionality and also it cuts down on redundant code. If I have multiple classes that inherit a method from a base class and I want each class to have a slightly different behavior all I need to do is re define that method in the new class. Doing so is an example of polymorphism. To accomplish the same thing in a procedural programming context we would have to a long series of if else statements.
