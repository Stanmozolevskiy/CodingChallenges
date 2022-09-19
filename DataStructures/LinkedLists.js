class Node{
  constructor(value){
    this.head = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value);
    
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value){
    const newNode = new Node(value);

    let temp = this.head;
    this.head = newNode;
    this.head.next = temp;
  }

  insert(position, value){
    if(position > this.length) 
      this.append(value);
    else{
      const newNode = new Node(value);
      const leader = this.treverseToIndex(position -1);
      const holdingPointer = leader.next;
  
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length ++;
    }
    this.print();
  }
  
  remove(index){
    
     const lead = this.treverseToIndex(index-1);
     const holdingPoint = lead.next;

     lead.next = holdingPoint.next;
     this.print();
  }

  reverse(){
    if(this.length == 1) return this.head;
    
    let first = this.head;
    let second = first.next;
    this.tail = this.head;
    while(second != null){
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;

    return this.print();
  }

  treverseToIndex(index){
    let curent = this.head;
    let counter = 0;
    while (counter != index){
      curent = curent.next;
      counter++;
    }
    return curent;
  }

  print(){
    let arr = [];

    let current = this.head;
    while(current != null){
      arr.push(current.head);
      current = current.next;
    }
    console.log(arr);
  }
  

}
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 99);
  myLinkedList.remove(2);

  myLinkedList.print()
  myLinkedList.reverse()



  
  