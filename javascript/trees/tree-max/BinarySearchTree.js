const { BinaryTree, Node } = require("./BinaryTree");

class BinarySearchTree extends BinaryTree {
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
  // for the search method we can use the arrays in the order methods rahter than traversing the hall tree

  contains(value) {
    if (this.preOrder().includes(value)) {
      return true;
    } else {
      return false;
    }
  }

  maxValue() {
    if (this.isEmpty()) {
      throw new Error("Tree is empty");
    }
    const values = this.inOrder();
    let max = values[0];
    for (const element of values) {
      max = Math.max(max, element);
    }
    return max;
  }

  // search(value) {
  //   let current = this.root;

  //   while (current !== null) {
  //     if (value === current.value) {
  //       return true;
  //     } else if (value < current.value) {
  //       current = current.left;
  //     } else {
  //       current = current.right;
  //     }
  //   }

  //   return false;
  // }
}
module.exports = { BinarySearchTree };
