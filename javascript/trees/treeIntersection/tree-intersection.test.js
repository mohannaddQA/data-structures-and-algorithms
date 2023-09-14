const { TreeNode, treeIntersection } = require("./tree-intersection"); // Corrected path to your code file

test("Finds common values in two binary trees using Hashtable", () => {
  const tree1 = new TreeNode(100);
  tree1.left = new TreeNode(125);
  tree1.right = new TreeNode(200);

  const tree2 = new TreeNode(42);
  tree2.left = new TreeNode(125);
  tree2.right = new TreeNode(200);

  // Create tree instances with a root property
  const tree1Instance = { root: tree1 };
  const tree2Instance = { root: tree2 };

  const result = treeIntersection(tree1Instance, tree2Instance);
  expect(result).toEqual(expect.arrayContaining([125, 200]));
  expect(result).toHaveLength(2);
});

test("No common values in two binary trees", () => {
  const tree1 = new TreeNode(100);
  tree1.left = new TreeNode(125);
  tree1.right = new TreeNode(200);

  const tree2 = new TreeNode(42);
  tree2.left = new TreeNode(300);
  tree2.right = new TreeNode(500);

  // Create tree instances with a root property
  const tree1Instance = { root: tree1 };
  const tree2Instance = { root: tree2 };

  const result = treeIntersection(tree1Instance, tree2Instance);
  expect(result).toEqual([]);
});

test("Common values with duplicate values in two binary trees", () => {
  const tree1 = new TreeNode(100);
  tree1.left = new TreeNode(125);
  tree1.right = new TreeNode(200);
  tree1.left.left = new TreeNode(125);

  const tree2 = new TreeNode(42);
  tree2.left = new TreeNode(200);
  tree2.right = new TreeNode(125);
  tree2.right.right = new TreeNode(125);

  // Create tree instances with a root property
  const tree1Instance = { root: tree1 };
  const tree2Instance = { root: tree2 };

  const result = treeIntersection(tree1Instance, tree2Instance);
  expect(result).toEqual(expect.arrayContaining([125, 200]));
  expect(result).toHaveLength(2);
});
