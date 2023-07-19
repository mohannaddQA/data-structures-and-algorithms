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

  preOrder() {
    const result = [];
    const traverse = (node) => {
      if (this.isEmpty()) return;
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  inOrder() {
    const result = [];
    const traverse = (node) => {
      if (this.isEmpty()) return;
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    const result = [];
    const traverse = (node) => {
      if (this.isEmpty()) return;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
}

module.exports = { BinaryTree, Node };
