/*************** LINKED LIST ******************/

// Info:
// A data structure that contains a head, tail and length property.
// Linked lists consist of nodes, and each node has a value and a pointer to another node or null.
// Do not have indexes
// connected via nodes with a next pointer
// random access is not allowed

// -- BIG O /
// Insertion: O(1)
// Removal: Depends, O(1) or O(n)
// Searching: O(n)
// Access: O(n)

// Class Node:
// Stores Data (val) and references to next node (next)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //Push: pushes the values to the next node
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Pop: removes a node from the end of linked list
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Shift: Removes a new node from the beginning of Linked list
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  // Unshift: Adds a new node from the beginning of Linked list

  unshift(newVal) {
    var newNode = new Node(newVal);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Get: Retrieves a node by it's position in the linked List

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // Set: changes the value of a node based on it's position in the Linked list

  set(index, val) {
    var foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // Insert: Addubg a node to the Linked list at a specific position
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // Remove: removes a node from linked list
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }


  // Reverse: 

  reverse(){
      // switch head and tail 
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      // variables
      var next;
      var prev = null;
      // loop through the linked list 
      for ( var  i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
  }
// prints in an array
  print(){
    var arr = [];
    var current = this.head
    while(current){
        arr.push(current.val)
        current = current.next
    }
    console.log(arr);
}

}

var list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(355);
list.push(400);
list.push(425);
list.push(550);
list.push(555);
list.push(999);


console.log(list.print());

console.log(list.reverse());