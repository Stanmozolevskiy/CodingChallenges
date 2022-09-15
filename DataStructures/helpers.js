//function checks if the number is prime
function isPrime(n){  5 
    // if the number is divisible by i, then n is not a prime number;
    for(let i = 2; i< n-1; i++)
        if(n%i == 0) return false;
    //othervise n is prime
    return true;
}

function generatePrimes(n){
    let primes = [];
    let index = 2;
    while(primes.length < n ){
        if(isPrime(index))
            primes.push(index);
            
        index++;
    }
    return primes;
}

function printStack(stack){
    let resp = [];
    while (stack.length > 0) 
        resp.push(stack.pop());
    return resp;
}