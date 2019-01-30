class TreeBFS {
    run(tree, value) {
        if (!tree) return new Error("Tree is a required field")

        let found
        let queue = [tree]
        let permQueue = [tree.name]

        while (queue.length) {
            for (let i = 0; i < queue.length; i++) {
                let node = queue[i]

                if (node.value === value)  {
                    found = node.name
                    queue = []
                } else {
                    queue.shift()

                    for (let j = 0; j < node.children.length; j++) {
                        permQueue.push(node.children[j].name)
                        queue.push(node.children[j])
                    }
                }
            }
        }

        console.log("permQueue: ", permQueue)

        return found || "Does not exist"
    }
}

/*****************/
/* SAMPLE RUNNER */
/*****************/

let tree = {
    name: 'A',
    value: 4,
    children: [
        {
            name: 'B', value: 7,
            children: [{name: 'F', value: 9, children: []}],
        },
        {
            name: 'C', value: 11,
            children: [{name: 'G', value: 9, children: []}],
        },
        {
            name: 'D', value: 55, 
            children: []},
        {
            name: 'E', value: 65,
            children: [
                {name: 'H', value: 21, children: []},
                {name: 'I', value: 33, children: []},
            ],
        },
    ],
}

const tbfs = new TreeBFS();
tbfs.run(tree, 33);
