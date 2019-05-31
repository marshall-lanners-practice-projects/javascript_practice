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







*/








