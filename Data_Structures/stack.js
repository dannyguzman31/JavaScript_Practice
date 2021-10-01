/**  STACK */

// A LIFO data Structure 
// The last element added to the stack will be the first element removed from the stack 

// BIG O 
// Insertion: O(1)
// Removal: O(1)
// Searching: O(n)
// Access: O(n)

class Node {
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

    // prints in an array
  print(){
    var arr = [];
    var current = this.first
    while(current){
        arr.push(current.value)
        current = current.next
    }
    console.log(arr);
}

}

var list = new Stack();
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
list.pop();
console.log(list.print());
