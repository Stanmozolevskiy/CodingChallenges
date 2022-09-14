// using Linked List
// class Node {
//     constructor(value){
//       this.value = value;
//       this.next = null;
//     }
//   }
//   class Stack {
//     constructor(){
//       this.top = null;
//       this.bottom = null;
//       this.length = 0;
//     }
//     peek() {
//         this.top;
//     }
//     push(value){
//         let newNode = new Node(value);

//         if(this.length === 0 ){
//             this.top = newNode;
//             this.bottom = newNode;
//         }
//         else{
//             const temp = this.top;
//             this.top = newNode;
//             this.top.next = temp;
//         }
//         this.length ++;
//         return this;
//     }
//     pop(){
//         if(!this.top)
//             return null;
    
//         const temp = this.top.value;
//         this.top = this.top.next;
//         this.bottom = top.next;
//         this.length--;
//         return temp;
//     }
//   }
// using array

class Stack{
    constructor(){
        let data = [];
    }

    peek(){
      return this.data[this.data.length -1];
    }
    push(value){
        this.data.push(value);
        return this;
    }
    pop(){
        this.data.pop();
        return this;
    }

}
  const myStack = new Stack();

  myStack.push(12);
  myStack.push(1);
  console.log(myStack);
  myStack.pop();
  console.log(myStack)
  

