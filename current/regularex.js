regex = /^(?!.*optimize).*sitespect.*$/

let pathname = window.location.pathname

let title = pathname.split('/')[1]
let id = pathname.split('/')[2]

let item = document.querySelector('[itemprop=name]').innerText
let price = document.querySelector('.price').innerText
let u = document.querySelector('.colors').innerText
let splited = u.split('\n')

let getAr = (ar) => {
  let added = new Set([])
  let newAr = []
  
  ar.forEach(item => {
    if (!added.has(item) && item !== "Select A Color"){
      newAr.push(item)
    }
    added.add(item)
  })

  return newAr

}

let filteredAr = getAr(splited)



/*

	Anchors ^ and $

	^The will match any string with - The -
	end$ matches a string that ends with - end -
	^The end$ exact string match (starts with The end)
	roar matches any string that has the text roar in it

	Quantifiers *, +, ?, and {}

	abc* matches a string that has ab followed by zero or more c

	abc+ matches a string that has ab followed by one or more c

	abc? matches a string that has ab followed by zero or one c

	abc{2} matches a string that has ab followed by 2 c

	abc{2,} matches a string that has ab followed by 2 or more c

	abc{2,5} matches a string that has ab followed by 2 up to 5 c

	a(bc)* matches a string that has a followed 
	by zero or more copies of the sequence bc

	a(bc){2,5} matches a string that has a followed by 2 up to 5 copies
	of the sequence bc

	OR operator |, []

	a(b|c) matches a string that has a followed by b or c
	a[bc] same a previous


	Character classes \d, \w, \s, and .

	\d matches a single character that is a digit
	\w matches a word character
	\s matches a whitespace character
	. matches any character

	\D, \W, \S do the inverse. Example \D matches a single no digit character

	in order to be taken literally you must escape the characters ^.[$()|*+?{
	with a \

	example \$\d matches a string that has a $ before one digit

	\t matches tabs \n matches new lines

	Flags

	regex normaly comes in this form /abc/ where the search pattern is
	delimited by two slash characters /. At the end we can specify a flag
	with these values (we can also combine them with each other):

	g (global) will find all matches
	m (multi-line) when enabled ^ and $ will match the start and end of a
	line, instead of the whole string
	i (insensitive) makes the whole expression case-insensitive,
	example /aBc/i would match AbC

	INTERMEDIAT TOPICS

	grouping and capturing ()
	a(bc) parentheses create a capturing group with value bc
	a(?:bc)* using ?: we disable the capturing group
	a(?<foo>bc) uing ?<foo> we put a name to the gorup

	Bracket expressions []

	[abc] matches a string that has either an a or a b or a c
	is the same as a|b|c

	[a-c]

	[a-fA-F0-9] a string that represents a single hexadecimal digit, case insensitively
	[0-9]% a string that has a character from 0 to 9 before a % sign

	[^a-zA-Z] a string that has not a letter from a to z or from A to Z. in this case the ^ is used
	as negation of the expression

	Greedy and Lazy match

	* + {} are greedy operators, so they expand the match as far as they can through the provided text.

	<.+> matches <div>simple div</div>. In order to catch only the div tage we can use ? to make it lazy

	<[^<>]+> matches any character except < or > one or more times included inside < and >

	Adanced topics

	Boundaries \b and \B

	\babc\b performs a "whole words only" search

	\b prepresents an anchor like caret matching positions where one side is a word character like \w
	and the other side is not a word character. It comes with negation \B. this matches all the positions where \b doesn't match
	and could be if we want to find a serach pattern fully surrounded by word characters

	Back-references \1

	([abc])\1 using \1 it matches the same text that was matched by the first capturing group
	([abc])([de])\2\1 we can use \2 (\3, \4, etc) to identify the same text that was matched by the second (third, fourth, ect.)
	(?<foo>)[abc])\k<foo> we put the same foo to the group and we reference it later (\k<foo>).

	look-ahead and look-behind (?=) and (?<=)

	d(?=r) matches a d only if is followed by r, but r will not be part of the overal regex match
	(?<=r>)d matches a d only if is preceded by an r, but r will not be part of the overalll regex match

	negation operator

	d(?!r) matches a d only if is not followed by r, but r will not be part of the overall regex match
	(?<!r)d matches a d only if is not preceded by an r, but r will not be part of the overall regex match
*/


/*
	in Javascript

	regular expressions are used with the RegExp methods test and exec and with the
	string methods match, replace, search, and split.

	functions:

	- exec -
	executes a search for a match in a string. Returns an array of information or null on a mismatch.
	-------
	- test -
	method that tests for a match in a string. Returns true or false.
	-------
	- match -
	a string method that executes a search for a match in a string. Returns an array of information or null on mismatch.
	-------
	- matchAll -
	a string method that returns an iterator containing all of the matches, including capturing groups
	-------
	- search -
	a string method that tests for a match in a string. Returns the index of the match, or -1 if the search fails
	-------
	- replace -
	a string method that executes a search for a match in a string, and replaces the matched
	substring with a replacement substring
	-------
	- split -
	a string method that uses aregular expression or a fixed string to break a string into an array of substrings


	if you want to know if a string exists use the test or search methods. 




	//YOUTUBE TUTORIAL//

	. matches everything

	\ will escape things so if you want to look for periods use \.

	\d match any digit (0-9)
	\D match any none digit (0-9)
	\w word character (a-z, A-Z, 0-9, _)
	\W not a word character
	\s whitespace (space, tab, newline)
	\S not whitespace (space, tab, newline)

	\b word boundary
	\B not a word boundary
	^ beginning of a string
	$ end of a string

	[] matches characters in brackets
	[^ ] matches characters not in brackets
	| either or


	how to mach a phone number

	555-555-555

	\d\d\d  // will match any three digits in a row

	\d\d\d. // will match any three digits plus anything after it

	example

	\d\d\d.\d\d\d.\d\d\d. //will match 555-555-555

	want to match only

	555-555-555
	555.555.555

	\d\d\d[-.]\d\d\d[-.]\d\d\d

	want to match only 800 or 900 numbers

	800-555-555
	900.555.555

	[89]00[-.]\d\d\d[-.]\d\d\d

	match only numbers 1-7

	1234567 

	[1-7]

	match only lower case letters a-z

	[a-z]

	
	[a-zA-Z] // will match all lower and capital letters

	[^] will match any character set

	[^a-z] will match any none lower case letter

	match all three letter words end with at but not start with b

	cat
	mat
	pat
	but not bat

	[^b]at


	Quantifiers 

	* will match 0 or more
	+ will match 1 or more
	? will match 0 or one
	{3} exact number match
	{3,4} range of numbers (min, max)

	easier way to match phone numbers

	555-555-5555

	\d{3}\d{3}\{4}

	
	look for all Mr then name

	Mr. Schafer
	Mr smith
	Mr. T

	Mr\.?\s[A-Z]\w*

	Mr matches literal string
	\. escapes and matches .
	? matches zero or one .
	\s matches a space
	[A-Z] matches any one captital letters
	\w any word character
	* means 0 or more lower case word character in addition


		Mr(r|s|rs)\.?\s[A-Z]\w*

		will match 
		Mr. Schafter
		mr Smith
		Ms Davis
		Mrs. Robinson
		Mr. T

	CoreyMSchafer@gmail.com
	corey.schafer@university.edu
	corey-321-schafer@my-work.net

	[a-zA-Z0-9.-]+@[a-zA-Z-]+\.(com|edu|net)

	https://www.google.com
	http://coreyms.com
	https://youtube.com
	https://www.nasa.gov

	https?://(www\.)?(\w+)(\.w+)

	Group 1: $1 will give us www.
	Group 2: $2	will give us coreyms, youtube, nasa
	Group 3: $3 will give us .com, .gov

	$2$3 will give us just the domain names

	example youtube.com

	REGEX IN JAVASCRIPT

	const str = "all your base are belong to us"
	const str2 = "all your base are belong to us"
	const regex = /base/;
	const isExisting = regex.test(str) // true
	const isExisting = regex.test(str2) // false
	console.log(isExisting);

	has to match base and has to be at the end
	const regex = /^base$/

	/name is [a-z]/

	? means the value is optional

	cody? // means the y is optional

	$ means the string has ended

	\d+ means match 1 or more arbitrary strings of digits

	\t looks for tabs \n looks for new lines so on

	take out a word from a string in javascript and return it

	cosnt string = "my name is cody"
	const regex = /name is ([a-z]+)/
	const match = regex.exec(string)
	
	if (match) {
		const name = match[1];
		console.log(name)
	} else {
		console.log('no match')
	}
	console.log(isExisting)

	
	//look for all values with a group

	const string = "filea.mp3 file_01.mp3 file_02.mp3 test.csv other.txt"
	const regex = /(\w+)\.mp3/g
	const match = regex.exec(string)

	while (match){
		const filename = match[1];
		console.log(filename);
		match = regex.exec(string);
	}

	reg = /a/i

	\ will escape to look for special characters

	<input pattern="\d\d-\d\d-\d\d\d\d" />

	input[type="text"]:invalid {
		color:red;
	}

	/0(12|21)/g

	012 021

	/I am (?=great)/

	I am great

	let x = 'I am great'.reaplce(/I am (?=great)/, 'we are ')
	
	console.log(x) // "we are great"

*/

    let pathname = window.location.pathname
    let url = window.location.href
    let title = pathanme.split('/')[1]
    let id = pathname.split('/')[2]
    let item = document.querySelector('[itemprop=name]').innerText
    let price = document.querySelector('.price').innerText
    let colors = document.querySelector('.colors').innerText
    let splited = colors.split('\n')







