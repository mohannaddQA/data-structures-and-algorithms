/*a k-ary tree is a tree in which a node at most can have k number of children  */

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class k_ary_tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  // Method to add a node as a child to a parent node
  addChild(parentNode, value) {
    const childNode = new Node(value);
    parentNode.children.push(childNode);
    return childNode;
  }

  // method to traverse through the k-ary-tree

  depthTraverse(root) {
    if (root.children.length > 0) {
      root.children.forEach((child) => {
        this.depthTraverse(child);
      });
    }
    root.value = getFizzBuzzValue(root.value);
  }
}
// function to calculate fizzbuzz
function getFizzBuzzValue(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return "FizzBuzz";
  } else if (value % 3 === 0) {
    return "Fizz";
  } else if (value % 5 === 0) {
    return "Buzz";
  } else {
    return value.toString();
  }
}

//now all we need to do is traverse and check for fizzbuzz

function fizzBuzzTree(kary_tree) {
  if (kary_tree.root.value === null) {
    return null; // Return an empty tree with null root
  } else {
    kary_tree.depthTraverse(kary_tree.root);
    return kary_tree;
  }
}

module.exports = { Node, k_ary_tree, getFizzBuzzValue, fizzBuzzTree };
