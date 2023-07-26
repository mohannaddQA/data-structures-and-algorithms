const { BinaryTree, Node } = require("./BinaryTree");
const { BinarySearchTree } = require("./BinarySearchTree");
describe("BinaryTree", () => {
  test("create an empty binary tree", () => {
    const tree = new BinaryTree();
    expect(tree.isEmpty()).toBe(true);
  });

  test("create a binary tree with a root node", () => {
    const rootNode = new Node(5);
    const tree = new BinaryTree(rootNode);
    expect(tree.isEmpty()).toBe(false);
    expect(tree.root).toBe(rootNode);
  });

  test("pre-order", () => {
    const rootNode = new Node(5);
    rootNode.left = new Node(3);
    rootNode.right = new Node(7);
    const tree = new BinaryTree(rootNode);
    expect(tree.preOrder()).toEqual([5, 3, 7]);
  });

  test("in-order", () => {
    const rootNode = new Node(5);
    rootNode.left = new Node(3);
    rootNode.right = new Node(7);
    const tree = new BinaryTree(rootNode);
    expect(tree.inOrder()).toEqual([3, 5, 7]);
  });

  test("post-order", () => {
    const rootNode = new Node(5);
    rootNode.left = new Node(3);
    rootNode.right = new Node(7);
    const tree = new BinaryTree(rootNode);
    expect(tree.postOrder()).toEqual([3, 7, 5]);
  });
});

describe("BinarySearchTree", () => {
  test("add nodes to the binary search tree", () => {
    const tree = new BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(7);
    expect(tree.isEmpty()).toBe(false);
    expect(tree.preOrder()).toEqual([5, 3, 7]);
  });

  test("check if a value exists", () => {
    const tree = new BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(7);
    expect(tree.contains(5)).toBe(true);
    expect(tree.contains(8)).toBe(false);
  });
});
