const {
  Node,
  k_ary_tree,
  getFizzBuzzValue,
  fizzBuzzTree,
} = require("./tree-fizz-buzz");

describe("FizzBuzz Tree", () => {
  function KaryTree() {
    const tree = new k_ary_tree(15); // Root node with value 15
    const child1 = tree.addChild(tree.root, 3);
    const child2 = tree.addChild(tree.root, 5);
    const child3 = tree.addChild(tree.root, 10);
    const grandchild11 = tree.addChild(child1, 6);
    const grandchild12 = tree.addChild(child1, 9);
    const grandchild21 = tree.addChild(child2, 25);
    const grandchild22 = tree.addChild(child2, 20);
    const grandchild31 = tree.addChild(child3, 30);
    const grandchild32 = tree.addChild(child3, 35);

    return tree;
  }

  test("FizzBuzz for 15 (root node)", () => {
    const tree = KaryTree();
    fizzBuzzTree(tree);
    expect(tree.root.value).toBe("FizzBuzz");
  });

  test("Fizz for 3 (child1 node)", () => {
    const tree = KaryTree();
    fizzBuzzTree(tree);
    expect(tree.root.children[0].value).toBe("Fizz");
  });

  test("Buzz for 5 (child2 node)", () => {
    const tree = KaryTree();

    fizzBuzzTree(tree);
    expect(tree.root.children[1].value).toBe("Buzz");
  });
  test("Buzz for 10 (child3 node)", () => {
    const tree = KaryTree();

    fizzBuzzTree(tree);
    expect(tree.root.children[2].value).toBe("Buzz");
  });
  test("FizzBuzzfor 6 (grandchild11 node)", () => {
    const tree = KaryTree();
    fizzBuzzTree(tree);
    expect(tree.root.children[0].children[0].value).toBe("Fizz");
  });

  test("FizzBuzz value for 9 (grandchild12 node)", () => {
    const tree = KaryTree();
    fizzBuzzTree(tree);
    expect(tree.root.children[0].children[1].value).toBe("Fizz");
  });

  test("FizzBuzz value for 20 (grandchild22 node)", () => {
    const tree = KaryTree();
    fizzBuzzTree(tree);
    expect(tree.root.children[1].children[1].value).toBe("Buzz");
  });

  test("FizzBuzz value for 25 (grandchild21 node)", () => {
    const tree = KaryTree();
    fizzBuzzTree(tree);
    expect(tree.root.children[1].children[0].value).toBe("Buzz");
  });

  test("FizzBuzz value for 30 (grandchild31 node)", () => {
    const tree = KaryTree();
    fizzBuzzTree(tree);
    expect(tree.root.children[2].children[0].value).toBe("FizzBuzz");
  });

  test("FizzBuzz value for 35 ( grandchild32 node)", () => {
    const tree = KaryTree();
    fizzBuzzTree(tree);
    expect(tree.root.children[2].children[1].value).toBe("Buzz");
  });

  test("stringify value for non-divisible value", () => {
    const tree = new k_ary_tree(8); // Root node with value 8
    fizzBuzzTree(tree);
    expect(tree.root.value).toBe("8");
  });

  test("null value for empty tree", () => {
    const tree = new k_ary_tree(null);
    fizzBuzzTree(tree);
    expect(tree.root.value).toBeNull();
  });
});
