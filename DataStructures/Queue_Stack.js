
class CrazyQueue{
constructor(){
    this.s1 = [];
    this.s2 = [];
}

    peak(){
        this.shift();
        console.log(this.s2[this.s2.length - 1])
    }
    enqueue(value){  
        this.s1.push(value);
    }

    dequeue(){
        this.shift();
        this.s2.pop();
    }
    shift(){
        if(this.s2.length === 0)
            while(this.s1.length> 0)
                this.s2.push(this.s1.pop());
    }
}

let newQueue = new CrazyQueue();
newQueue.enqueue(12);

newQueue.peak();

//?
function SherlockAndAnagrams(s)
{
    let hash = new Map();
    console.log(s.length);
    for(let i = 0; i< s.length; i++){
        for(let j=i; j< s.length; j++){
            let pattern = s.substring(i, j +1).split("").sort().join("") ;
            
            if (hash.has(pattern))
                hash[pattern]++;
            else hash.set(pattern, 1);
        }
       
    }

   
   console.log(hash);
}

SherlockAndAnagrams("momo")