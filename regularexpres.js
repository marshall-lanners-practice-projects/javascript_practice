let re1 = new RegExp("abc");
let re2 = /abc/;

/*
	a regular expression can be written as a new object instance like re1
	or like a string literal like re2

	a / ends the pattern so we want to put a \ before any character to keep it
	from ending. Example \n
*/

//does abc exist any where in the string?

console.log(/abc/.test("abcde")); //true
console.log(/abc/.test("abxde")); //false

/*
	match all strings that contain a diget
*/

console.log(/[0123456789]/.test("in 1992")); // true
console.log(/[0-9]/.test("in 1992")); //true

/*
	\d any digit character
	\w an alphanumeric character ("word character")
	\s any whitespace character(space, tab, newline, and similar)
	\D a character htat is not a digit
	\W a nonalphanumeric character
	\S a nonwhitespace character
	. any character except for newline
*/

//can match date time formate like this
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20")); // true
console.log(dateTime.test("30-jan-2003 15:20")); // false

/*
	[\d.] means any diget and a period
	period loses its meaning though in the square brackets

	to match any charcter but the ones in the set do ^
	after the opening bracket
*/

let notBinary = /[^01]/
console.log(notBinary.test("11001010101010")) // false
console.log(notBinary.test("101010012")) // true

/*
	+ after something indicates that the
	element may be repeated more than once /\d+/
	matches one or more digit characters

	the * has a similar meaning but also allows the pattern to match
	the zero times. Something with a star after it never 
	prevents a patern from matching, it'll just match 
	zero instances if it can't find any suitable text to match

*/

console.log(/'\d+'/.test("'123'")); //true
console.log(/'\d+'/.test("''")) // false
console.log(/'\d*'/.test("'123'")) // true
console.log(/'\d*'/.test("''")) //true

/*
	a question mark makes a part of a pattern optional, meaning it may 
	occur zero times or one time
*/

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour")); //true
console.log(neighbor.test("neighbor")); //true

/*
	to indicate that a pattern should occur a 
	precise number of times use braces {4} means must occure 4 times
	{2, 4} means the element must occur at least twice but not more than 4
	if you want to say 5 or more times do {5,}
*/

let newdateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(newdateTime.test('1-30-2003 8:45')); //true


/* Grouping Subexpressions
	use * or + on more than one element at a time, 
	you have to use parentheses
*/

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("BooHoooohoohooo"));

/*
	the test method is the absolute simplest way to match a regular expression
	it tellsyou only whether it matched and nothing else. Regular expressions also
	have an exec (execute) method that will return null if no match was found
	and return an object with information about the match otherwise.
*/

let match =/\d+/.exec("one two 100");
console.log(match); //["100"]
console.log(match.index) // 8

/*
	an object returned from exec has an index property that 
	tells us where in the
	string the successful match begins

	string values have a match method that behaves simlarly
*/

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'")); // ["'hello'", "hello"]

/* choice patterns
	the pipeline character | gives you a choice between the
	pattern to its left or the pattern to its right
*/

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs")); // true
console.log(animalCount.test("15 pigcheckens")); //false

/*
	the string replace method in javascript can be used
	with a regular expression to replace string letters
*/

console.log("Borobudur".replace(/[ou]/, "a")) //Barobudur
//this will only replace the first occurance of o or u

console.log("Borobudur".replace(/[ou]/g, "a")) //Barabadar
//this will replace all occurances

//swaping last name and first name

console.log(
	"liskov, Barbar\nMcCarthy, John\nWadler, Philip"
	.replace(/(\w+), (\w+)/g, "$2 $1"));

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

let stock = "1 lemon, 2 cabbages, and 101 eggs";

function minusOne(match, amount, unit){
	amount = Number(amount) - 1;
	if (amount == 1){ // only one left, remove the 's'
		unit = unit.slice(0, unit.length - 1);
	} else if (amount == 0){
		amount = "no";
	}
	return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne))




