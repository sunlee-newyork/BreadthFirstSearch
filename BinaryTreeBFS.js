class BinaryTreeBFS {
	run(tree, value) {
		if (!tree) return new Error("Tree is a required field")

		let found
		let queue = [tree]
		let permQueue = []

		while (queue.length) {
			const node = queue[0]

			if (node.value === value) {
				found = node.name
				queue = []
			} else {
				permQueue.push(node.name)
				queue.shift()
				!!node.left && queue.push(node.left)
				!!node.right && queue.push(node.right)
			}
		}

		console.log(permQueue)

		return found || "Does not exist"
	}
}

/*****************/
/* SAMPLE RUNNER */
/*****************/

let tree = {
	name: 'A',
	value: 4,
	left: {
		name: 'B', 
		value: 7,
		left: {
			name: 'D', 
			value: 9,
			left: null,
			right: null,
		},
		right: {
			name: 'E', 
			value: 65,
			left: {
				name: 'H', 
				value: 21, 
				left: null,
				right: null,
			},
			right: {
				name: 'I', 
				value: 33, 
				left: null,
				right: null,
			},
		},
	},
	right: {
		name: 'C', 
		value: 11,
		left: {
			name: 'F', 
			value: 9, 
			left: null,
			right: null,
		},
		right: {
			name: 'G', 
			value: 55, 
			left: null,
			right: null,
		},
	},
}

const btbfs = new BinaryTreeBFS()
btbfs.run(tree, 33)