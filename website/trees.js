/*
	linear data structures are ones that kind of go in a line
	examples array, linked list, stack, and que
	there is a logical start and end

	when we implament a data structure we need to keep into account

	the cost of operations
	the memory usage
	ease of implementation

	a tree is often used to reprepsent hierarchical data

	example

					 john (ceo)  			depth = 0
					/					\
			jeff(cto)			jill (president)			depth = 1
				/ \							/       \
			bob  rob				kevin	   jessica		depth = 2


		the top of a tree represents the root and we branch out downward

		each node has its own data and can have a pointer to other nodes it connects to

		any node that does not have a child is called a leaf node

		trees can also be though of as re cursive data structure

		height is how long it takes to get to a leaf node

		so height of jill will be 1 becaue it takes jill one time to get to either kevin or jessica
		which are both leaf nodes

		the most popular type of tree is a Binary Tree

		a Binary tree is a tree that has at maximum 2 different nodes types of nodes


								[left, value, right] // root
						/												 \
			[left, value, right]		[left, value, right]


		applicaitons:

		storing natural hierarchical data such as files in a folder and sub folder
		organize data for quick search, insertion, and deletion
		network routing algorithms


		What is a Binary Search Tree?

		for a binary search to take place in an array the records must be sorted

		with a binary search tree the cost of 

		search is O(log n)
		insert is O(log n)
		remove is O(log n)

		we need to make sure the tree is always balanced

		it is balanced if all the nodes to the left are less
		and all the nodes to the right are more

							  100
							/ 		\
						25			120
						/\			 /\
					12  30	110 130

		what makes a balanced binary search tree balanced is if each node to the left
		of the root is less than the root and each node to the right is more than the root
		and also for each sub root, as soon as its not it is no longer balanced

		for example if I replace the 30 with 112 it would no longer be balanced because
		the 112 is higher than the root value which is 100

		
*/







