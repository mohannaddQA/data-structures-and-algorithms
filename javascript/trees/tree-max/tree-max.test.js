const { BinarySearchTree } = require("./BinarySearchTree");

describe("BinarySearchTree", () => {
  describe("maxValue", () => {
    it("should throw an error tree is empty", () => {
      const emptyTree = new BinarySearchTree();
      expect(() => emptyTree.maxValue()).toThrow("Tree is empty");
    });

    it("return the maximum value in the tree 18 ", () => {
      const tree = new BinarySearchTree();
      tree.add(10);
      tree.add(5);
      tree.add(15);
      tree.add(3);
      tree.add(8);
      tree.add(12);
      tree.add(18);

      expect(tree.maxValue()).toBe(18);
    });

    it("return the root value for a tree with only one node", () => {
      const tree = new BinarySearchTree();
      tree.add(10);

      expect(tree.maxValue()).toBe(10);
    });

    it("return the maximum value when there are duplicate values 15", () => {
      const tree = new BinarySearchTree();
      tree.add(10);
      tree.add(5);
      tree.add(15);
      tree.add(10);
      tree.add(8);

      expect(tree.maxValue()).toBe(15);
    });
  });
});
