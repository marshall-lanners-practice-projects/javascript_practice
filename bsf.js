/*
	bsf is commonly used in shortest path problems
	step 1, model the problem as a graph
	step 2, solve the problem using breath-first search

	A graph models a sec of connections. For example, suppose you and
	your friends are playing poker, and you want to model who owes whom money.
	Here's how you could say, "Alex owes Rama money"

	alex -> Rama

	the graph is made up of nodes and edges

	a node can be directly connected to many other nodes which are called neighbors.

	doing BFS

	question type 1: is there a paht from node A to node B?
	question type 2: what is the shortest path from node A to node B?

	example problem with BFS,

	say I have a network of friends and I need to check if one of them
	works in a sales position. I first would check my current friends. When
	that path is exausted I would then check my the friends of my friends, then if needed
	the friends of those friends and so on. This type of search is refered to as BFS.

	there is two questions BFS can answer,

	is there a path from A to B? Example is there a salesperson in my network of friends.

	What is the shortest path from node A to Node B? Who is the closes salesperson in my network?

	First degree connections are added to the list of people to search before second degree and so on.

	Queue data structures work great for BFS
	enqueue to add a person to the Queue and Dequeue to remove them

	Queues follow FIFO: first in first out, think of a line at a movie theater

	how the algorithum works

	[alice, bob, clair]

	alice neighbors: steve, bryan

	I de qu alice and check if she is a salesperson

	if not then I remove alice and add her neighbors

	[bob, clair, steve, bryan]

	then I do the same for bob and so on,

	if we run out of items in the array then there is no salesperson in the network

	it is also important to make sure we don't check someone who we already checked
	this ways we prevent an infinit loop, we can do this by making a hash set and checking it
	each time before we go to add people into the que to make sure we have not checked them yet

	Summary:

	BFS search tells you if there a path from A to B

	If theres a path, BFS will find the shortest path

	If you have a problem like "find the shortest X", try modeling your problem as a graph and use BFS

	A directed graph has arrows, and the relationship follows the direction ofthe arrow

	Undirected graphs don't have arrows, and the relationship goes both ways

	Queues are FIFO

	Stacks are LIFO

	You need to check people in the order they were added to the search list, so the search list 
	need to be a queue. Otherwise, you won't get the shortest path.

	Once you check someone, make sure you don't check them again. Otherwise, you might
	end up with an infinite loop.
*/































