/********* Binary Search Tree **********/

// A data structure that consist of nodes in a parent / child relationship
// Every parent node has at most two children
// Every node to the left of a parent node is always less than the parent
// Every node to the right of a parent node is always greater than the parent

// TREE TERMINOLOGY
// Root: the top node in the tree
// Child: A node directly connected to another node when moving away from the root
// Parent: The converse notion of a child
// Sibling: A group of nodes with the same parent
// Leaf: A node with no children
// Edge: The connection between one node and another


// BIG O 
// Insertion: O(Log N)
// Searching: O(Log N)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // Insert:
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  // Insert: 
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // Contains: 
  contains(value){
    if(this.root === null) return false;
    var current = this.root,
        found = false;
    while(current && !found){
        if(value < current.value){
            current = current.left;
        } else if(value > current.value){
            current = current.right;
        } else {
            return true;
        }
    }
    return false;
}
}

// Test

var tree = new BinarySearchTree();

tree.insert(50);
tree.insert(25);
tree.insert(15);
tree.insert(5);
tree.insert(55);
tree.insert(70);
tree.insert(77);
tree.insert(81);
console.log(tree);
console.log(tree.contains());
