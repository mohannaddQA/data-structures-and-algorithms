const { breadthFirst, BinaryTree, Node } = require("./breadthFirstTree"); // Adjust the import path based on your actual implementation file path

describe("breadthFirst", () => {
  test("empty array for an empty tree", () => {
    const binaryTree = new BinaryTree();
    expect(breadthFirst(binaryTree)).toEqual([]);
  });

  test("tree with one node", () => {
    const binaryTree = new BinaryTree(new Node(1));
    expect(breadthFirst(binaryTree)).toEqual([1]);
  });

  test("normal binary tree", () => {
    const binaryTree = new BinaryTree();
    binaryTree.add(5);
    binaryTree.add(3);
    binaryTree.add(7);
    binaryTree.add(2);
    binaryTree.add(4);
    binaryTree.add(6);
    binaryTree.add(8);

    const expectedTraversal = [5, 3, 7, 2, 4, 6, 8];
    expect(breadthFirst(binaryTree)).toEqual(expectedTraversal);
  });

  test("binary tree with only right childs", () => {
    const binaryTree = new BinaryTree();
    binaryTree.add(1);
    binaryTree.add(2);
    binaryTree.add(3);
    binaryTree.add(4);
    binaryTree.add(5);

    const expectedTraversal = [1, 2, 3, 4, 5];
    expect(breadthFirst(binaryTree)).toEqual(expectedTraversal);
  });

  test("unbalanced the binary tree", () => {
    const binaryTree = new BinaryTree();
    binaryTree.add(4);
    binaryTree.add(5);
    binaryTree.add(1);
    binaryTree.add(2);
    binaryTree.add(3);

    const expectedTraversal = [4, 1, 5, 2, 3];
    expect(breadthFirst(binaryTree)).toEqual(expectedTraversal);
  });
});
