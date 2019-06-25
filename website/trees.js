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

		what makes a binary search tree is if each node to the left
		of the root is less than the root and each node to the right is more than the root
		and also for each sub root, as soon as its not it is no longer balanced

		for example if I replace the 30 with 112 it would no longer be balanced because
		the 112 is higher than the root value which is 100

		what makes a tree balanced if is the difference between the hight of the left and right
		tree sub tree is not greater than one


		how do we create a balanced binary tree from a shorted imput array?

		the pattern

		1. the root is always the middle number
		2. the root of the left sub tree is the middle of the left part of the sub array
		3. the root of the right sub tree is the middle of the right part of the sub array

		 0  1  2  3  4  5  6  // index's
		[1, 2, 3, 4, 5, 6, 7] // array values

		1. initialize start = 0, end is array.length - 1, mid = (start + end) / 2
		2. create a tree node with mid as root (lets call it A).
		3. Recursively do steps 4 and 5
		4. Calculate mid of left subarray and make it root of left subtree of A
		5. Calculate mid of right subarray and make it root of right subtree of A

														4
													/   \
												 2		 6
												/ \		/ \
											 1   3 5   7

		benefits of a binary search tree

		it allows us to perform 

		search in O(log n)
		insert in O(log n)
		remove in O(log n)

		

*/







