/***** TREE TRAVERSAL *******/

// TWO WAYS 
// BREADTH-FIRST SEARCH: Working accross the tree
// DEPTH-FIRST SEARCH: Going down the tree
//                   - InOrder 
//                   - PostOrder
//                   - Preorder


class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
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

    // BREADTH-FIRST SEARCH: Working accross the tree
    BFS(){
        // use a queue 
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value); // visit 
           if(node.left) queue.push(node.left); // go left
           if(node.right) queue.push(node.right); // go right 
        }
        return data;
    }
    // DEPTH-FIRST SEARCH: Going down the tree - PreOrder
    DFSPreOrder(){
        var data = []; // array data 
        var current = this.root; // current 
        function traverse(node){
            data.push(node.value); // visit root 
            if(node.left) traverse(node.left); // go left
            if(node.right) traverse(node.right); // go right 
        }
        traverse(current);
        return data; 
    }

    // DEPTH-FIRST SEARCH: Going down the tree - PostOrder 
    DFSPostOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left); // go left 
            if(node.right) traverse(node.right); // go right
            data.push(node.value); // visit and push 
        }
        traverse(current);
        return data; 
    }

// DEPTH-FIRST SEARCH: Going down the tree - InOrder
    DFSInOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left); // go left 
            data.push(node.value); // visit and push 
            if(node.right) traverse(node.right); // go right 
        }
        traverse(current);
        return data; 
    }

    //end 
}

/*
            10
        6       15
     3    8        20

*/




  // Test
  var tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(6);
  tree.insert(15);
  tree.insert(3);
  tree.insert(8);
  tree.insert(20);
  console.log("BREADTH-FIRST SEARCH: " + tree.BFS());
  console.log("DFS-PreOrder: " + tree.DFSPreOrder());
  console.log("DFS-PostOrder: " + tree.DFSPostOrder());
  console.log("DFS-InOrder: " + tree. DFSInOrder());

  