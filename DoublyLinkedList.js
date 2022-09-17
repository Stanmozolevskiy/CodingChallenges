class Node{
    constructor(value){
      this.data = value;
      this.next = null;
      this.previous = null;
    }
  }

  class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    appendNode(value){
      const newNode = new Node(value);
      newNode.previous = this.tail;
        if(this.head === null){
          this.head = newNode;
          this.tail = this.head;
        }
        else {
         this.tail.next = newNode;
         this.tail = newNode;
        }
      this.length++;
    }
    deleteNode(){
        if(this.length > 1){
            this.tail = this.tail.previous;
            this.tail.next = null;
        }
        else{
            this.head = null;
            this.tail = this.head;
        }
        this.length --;
    }
  }