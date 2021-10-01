/**** DOUBLE LINKED LIST  */

// Almost identical to singly Linked Lists, except every node has another pointer, to the previous node!

// BIG O: 
// Insertion: O(1)
// Removal: O(1)
// Searching: O(n)
// Access: O(n)


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // PUSH:
  push(val) {
    var newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Pop: 
  pop(){
      if(!this.head) return undefined;
      var popNode = this.tail;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      }
      else {
        this.tail = popNode.prev;
        this.tail.next = null;
        popNode.prev = null;
      }
      this.length--;
      return popNode;
  }
// Shift: 
  shift(){
    if(this.length === 0) return undefined;
    var oldHead = this.head;
    if(this.length === 1){
        this.head = null;
        this.tail = null;
    }else{
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
    }
    this.length--;
    return oldHead;
}
// Unshift:
unshift(val){
    var newNode = new Node(val);
    if(this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this;
}

// Get: 
get(index){
    if(index < 0 || index >= this.length) return null;
    var count, current;
    if(index <= this.length/2){
        count = 0;
        current = this.head;
        while(count !== index){
            current = current.next;
            count++;
        }
    } else {
        count = this.length - 1;
        current = this.tail;
        while(count !== index){
            current = current.prev;
            count--;
        }
    }
    return current;
}
// SET:
set(index, val){
    var foundNode = this.get(index);
    if(foundNode != null){
        foundNode.val = val;
        return true;
    }
    return false;
}
// INSERT: 
insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index-1);
    var afterNode = beforeNode.next;
    
    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
}

  // prints in an array
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  // end
}

// test
var list = new DoublyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(355);


console.log(list);
console.log(list.print());
