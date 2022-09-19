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
}

function traverse(node){
    const tree = {value: node.value};
    tree.left = nede.left === null? null: traverse(node.left);
    tree.right = nede.right === null? null: traverse(node.right);
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

console.log(JSON.stringify(traverse(tree.root)))

