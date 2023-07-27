class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // for faster checking if the tree is empty
  isEmpty() {
    return this.root === null;
  }
  // to add nodes to the tree
  add(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }

  addNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.addNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.addNode(root.right, newNode);
      }
    }
  }
}
// this is a binary tree
/* now that we have the tree we will create a function that takes the tree
   as an argument and traverse the tree using breadth-first approch */

function breadthFirst(tree) {
  // when we are given the tree in reaility it's the root of the tree
  if (!tree || !tree.root) {
    return [];
  }
  const breadthFirstTree = [];
  const currentLevel = [tree.root]; /// we will initialize it with the first element of the tree
  while (currentLevel.length > 0) {
    const currentNode = currentLevel.shift();
    breadthFirstTree.push(currentNode.value);
    if (currentNode.left) {
      currentLevel.push(currentNode.left);
    }
    if (currentNode.right) {
      currentLevel.push(currentNode.right);
    }
  }
  return breadthFirstTree;
}
module.exports = { breadthFirst, BinaryTree, Node };
