const { Hashtable } = require("../../HashMap/HashTable/hashTable");

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/// note : this algorithm doesn't check the actual placements of the common nodes in the tree , it just checks for common vals
function treeIntersection(tree1, tree2) {
  const valuesToHashtable = new Hashtable();

  // here we Traverse tree1 and insert values into the hashtable
  traverseTree(tree1.root, tree1, valuesToHashtable);

  // we traverse tree2 checking if the hash table contains the same values
  const commonValues = traverseAndCheck(tree2.root, valuesToHashtable);

  return commonValues;
}

// a function to traverce the trees
const traverseTree = (node, tree, hashTable) => {
  if (node) {
    hashTable.set(node.value.toString(), true);
    traverseTree(node.left, tree, hashTable);
    traverseTree(node.right, tree, hashTable);
  }
};
// a function to traverce the other tree and check if the value is available in the hash table we created or not
const traverseAndCheck = (
  node,
  hashTable,
  CommonValues = [],
  AddedValues = new Set()
) => {
  let commonValues = CommonValues;
  let addedValues = AddedValues;

  if (node) {
    if (
      hashTable.has(node.value.toString()) &&
      !addedValues.has(node.value.toString())
    ) {
      commonValues.push(node.value);
      addedValues.add(node.value.toString());
    }
    traverseAndCheck(node.left, hashTable, commonValues, addedValues);
    traverseAndCheck(node.right, hashTable, commonValues, addedValues);
  }

  return commonValues;
};
module.exports = { TreeNode, treeIntersection };
