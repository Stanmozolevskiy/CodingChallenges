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
//https://www.hackerrank.com/challenges/three-month-preparation-kit-stockmax/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-nine
function stockmax(prices) {
    let [max, expense,stocks]  = [0,0,0];
    // Start from the end of the list
    for(let i = prices.length - 1; i>=0; i--)
     //finding the max to sell
      if(max< prices[i]){
        if(stocks > 0){
          // sell before next max;
          expense += stocks * max;
          stocks = 0;
        }
        // set up new max afte selling;
        max = prices[i];
      }
      else {
        //buy stocks, calc expense;
        expense -= prices[i];
        stocks++;
      }   
    
    expense += stocks * max;
    return expense;
}
//https://www.hackerrank.com/challenges/three-month-preparation-kit-simple-text-editor/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-nine
function processData(input) {
    data = input.split("\n");
    data.slice(0,1);
    let original = "";
    let buffer = [];

    for(let i = 0; i<data.length; i++){
        let command = data[i];
        let val = "";
        if(command.length > 1){
            let temp = command.split(" ");
            command = temp[0];
            val = temp[1];
        }
        switch(command){
             case "3":
                console.log(original[val-1]);
                break;
             case "1":
                buffer.push(original);
                original = original + val;
                break;
             case "2":
                buffer.push(original);
                original = original.slice(0, original.length -val)
                break;
             case "4":
                 //undo
                 var temp = buffer.pop();
                 original = temp; 
                 break;
         }
    }
} 

//https://www.hackerrank.com/challenges/three-month-preparation-kit-equal-stacks/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-nine
function equalStacks(h1, h2, h3) {
    // find the totals time O(n,k,j)
    let stacks = [
        {arr: h1, sum : getSum(h1)},
        {arr: h2, sum : getSum(h2)},
        {arr: h3, sum : getSum(h3)},
    ]
    // check if they already the same
    if(stacks[0].sum === stacks[1].sum && stacks[0].sum === stacks[2].sum)
        return stacks[0].sum;
    
    while(true){
        // find the highest
        let highest = stacks[0];
        for(let i = 1; i < stacks.length; i++){
            let stack = stacks[i];
            if(highest.sum < stack.sum) highest = stack;
        }
        // subtrackt the first element from each highest arr.shift() time O(n)
        highest.sum -= highest.arr.shift(); 
        
        if(stacks[0].sum === stacks[1].sum && stacks[0].sum === stacks[2].sum)
        break;
    }
    // return any of the sums
    return stacks[0].sum;
 }
