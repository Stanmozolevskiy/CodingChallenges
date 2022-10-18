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


// If you know a solution is not far from the root of the tree:
// Breath First Search/Treversal, because you dont have to go to the bottom of the list and can chech close to root

// If the tree of graph is very deep and solutions are rare:
// Breath First Search/Treversal, because the deep tree can take a really long time to do the DFS. Also depends if we care of memory consumption

// If the tree is very wide:
// Depth for search is better because it will use much less memory than BFS.

// If solutions are frequent but located deep in the tree:
// Depth for search because the solutions are located deep in the tree, so we have to visit the deep

// Determining whether a path exists between two nodes:
// BFS or DFS depending if we care about momory.

// Finding the shortes path:
// Breath First Search/Treversal, because you don't have to go deep on each node  

