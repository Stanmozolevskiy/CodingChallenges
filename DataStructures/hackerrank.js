

function isBalanced(s) {
    // if there is uncountable number then definetly no
    if (s.length % 2 != 0)
      return "NO";
  
    // add every element to a stack if find a pari remove the coupe
    let stack = new Stack();  
    
    for (let i = 0; i < s.length; i++) {
        //the order of if else here matters 
        if (stack.isEmpty())
            stack.push(s[i]);
        else if (stack.peak() === "[" && s[i] === ']')
            stack.pop();
        else if (stack.peak() === "(" && s[i] === ")")
            stack.pop();
        else if (stack.peak() === "{" && s[i] === "}")
            stack.pop();

        else stack.push(s[i]);
    }
    return stack.isEmpty() ? "YES" : "NO";
  }

//https://www.hackerrank.com/challenges/three-month-preparation-kit-waiter/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-nine

function waiter(numbers , q){
    //populate the list of the prime numbers
    const prime = generatePrimes(q);
    // all of the operations are going to happen in
    // array a and b and then we are going to 
    // reverse the results and put them in ansv arr
    let a = [numbers];
    let b = [[]];
    let answers = [];
    for(let i = 1; i<= q; i++){
        // addint sub arrays  to a and b
        // to push elements that are divisible or not
        a.push([]);
        b.push([]);
        while(a[i-1].length > 0){
            let num = a[i-1].pop();
            if(num % prime[i-1] == 0)
                b[i].push(num);
            else a[i].push(num);
        }
    }

    // reversing and spreading 
    // b [ [], [ 6, 4 ], [ 3 ], [ 5 ] ]
    // a [ [], [], [], [ 7 ] ]
    b.forEach(x => answers.push(...reverese(x)));
    a.forEach(x => answers.push(...reverese(x)));
    return answers;
}

function reverese(arr){
    let temp = [];
    while(arr.length > 0)
        temp.push(arr.pop());
    return temp;
}



waiter([3, 4, 7, 6, 5],3)