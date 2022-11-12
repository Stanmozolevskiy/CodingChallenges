class Node{
    constructor(val){
        this.left = null;
        this.right = null;
        this.val = val;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        const node = new Node(val);
        if(this.root === null) this.root = node;
        else{
            let cur = this.root;
            while(true){
                if(val < cur.val){
                    // Left
                    if(!cur.left){
                        cur.left = node;
                        return this;
                    }
                cur = cur.left;
                } else {
                    // Right
                    if(!cur.right){
                        cur.right = node;
                        return this;
                    }
                cur = cur.right;
                }
            }
        }
        
    };
    lookup(val){
        if(!this.root) return false;

        let cur = this.root;
        while(cur)
        if(cur.val < val)
            cur = cur.right;
        else if(cur.val > val)
            cur = cur.left;
        else if(cur.val === val)
            return cur;
       
        return false;
    }
    delete(val) {
        if (!this.root) return false;
    
        let prev = null;
        let cur = this.root;
        while (cur) {
          if (cur.val > val) {
            prev = cur;
            cur = cur.left;
          }
          else if (cur.val < val) {
            prev = cur;
            cur = cur.right;
          }
          else if (cur.val === val) {
            // easy one (both children are null)
            if (cur.left === null && cur.right === null) {
              if (prev.left.val === val)
                prev.left = null;
              else prev.right = null;
              return;
            }
            // hard one (when one child is null)
            if (cur.left === null && cur.right != null) {
              if (prev.left.val === val)
                prev.left = cur.right;
              else prev.right = cur.right;
              return;
            }
            //hard one (when one child is null)
            if (cur.right === null && cur.left != null) {
              if (prev.left.val === val)
                prev.left = cur.left;
              else prev.right = cur.left;
              return;
            }
            // hard one (when both are not null)
            else{
               if (prev.left.val === val){
                 let left = cur.left;
                 prev.left = cur.right;
                 prev.left.left = left;
                 return;
               }else{
                   return;
               }
            }
          }
        }
    }
    breadthFirstSearch(){
      let current = this.root;
      let result = [];
      let queue = [];
      queue.push(current);

      while(queue.length > 0){
        current = queue.shift();
        result.push(current.val);
        if(cur.left) queue.push(current.left);
        if(cur.right) queue.push(current.right);
      }
      return result;
    }
    breadthFirstSearchR(queue, result){
      // base case
      if(queue.length === 0) return result;

      let cur = queue.shifr();
      result.push(cur.val);
      if(cur.left) queue.push(cur.left);
      if(cur.right) queue.push(cur.right);
      return this.breadthFirstSearchR(queue, result);
    }

    DFSInOrder(){
      return traverseInOrder(this.root, []);
    }
    DFSPostOrder(){
      return traversePostOrder(this.root, []);
    }
    DFSPreOrder(){
      return traversePreOrder(this.root, []);
    }

}

function traverseInOrder(node, result){
  if(node.left) traverseInOrder(node.Left, result);
  result.push(node.val);
  if(node.right) traverseInOrder(node.Left, result);
  return result; 
}

function traversePreOrder(node, result){
  result.push(node.val);
  if(node.left) traversePreOrder(node.Left, result);
  if(node.right) traversePreOrder(node.Left, result);
  return result; 
}
function traversePostOrder(node, result){
  if(node.left) traversePostOrder(node.Left, result);
  if(node.right) traversePostOrder(node.Left, result);
  result.push(node.val);
  return result; 
}

function traverse(node){
    const tree = {val: node.val};
    tree.left = node.left === null? null: traverse(node.left);
    tree.right = node.right === null? null: traverse(node.right);
    return tree;
}

let tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(160);

console.log(JSON.stringify(traverse(tree.root)))

