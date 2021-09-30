/*************** LINKED LIST ******************/

// Info:
// A data structure that contains a head, tail and length property.
// Linked lists consist of nodes, and each node has a value and a pointer to another node or null.
// Do not have indexes
// connected via nodes with a next pointer
// random access is not allowed

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

  get(index){
      if(index < 0 || index >= this.length) return null;
      var counter = 0;
      var current = this.head;
      while(counter !== index){
          current = current.next;
          counter++;
      }
      return current;

  }

  // Set: changes the value of a node based on it's position in the Linked list

  set(index, val){

      var foundNode = this.get(index);

      if(foundNode){
        foundNode.val = val;
        return true;
      }
      return false;

  }

  // Insert: Addubg a node to the Linked list at a specific position
  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);
    
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
}

// Remove: removes a node from linked list


}

var list = new SinglyLinkedList();
list.push("test1");
list.push("test2");
list.push("test3");
list.push("test4");
list.push("test5");
list.push("test6");
list.pop();

console.log(list);

console.log(list.unshift("test1"));
