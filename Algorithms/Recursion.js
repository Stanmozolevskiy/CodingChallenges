// Write two functions that finds the factorial of any number. 
// One should use recursive, the other should just use for loop

function findFactorialRecursive(number){
    if(number === 2) return 2;
    
    return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(4, 0));


function findFactorialIterative(number){
  
    answer = number;
    for(let i = number; i > 1; i--)
    answer = answer * (i - 1);

    return answer;
}

console.log(findFactorialIterative(5));

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0,1,1,2,3,5,8,13,21,34,55,89,144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2+3

function fibonacciIterative(n){
    //code here 
    let first = 0;
    let second = 1;
    let third = 1;
    for(let i = 2; i< n; i++){
        first = second;
        second = third;
        third = first + second;
    }
    return third;
}

console.log(fibonacciIterative(6));

function fibonacciIterativeRecursive(n){
    if( n < 2 ) return n;
    return fibonacciIterativeRecursive(n-1) + fibonacciIterativeRecursive(n-2);
}

console.log(fibonacciIterativeRecursive(7));

//0,1,1,2,3,5,8,13,21,34


function fibonacciMemoized(){
    let cash = {};
  return function calculateFibonacci(n){
        if(n in cash) return cash[n];
        else{
            if(n < 2) return n;
            cash.n = calculateFibonacci(n-1) + calculateFibonacci(n-2);
            return cash.n;
        }  
    }
}

let test = fibonacciMemoized();
console.log(test(5));