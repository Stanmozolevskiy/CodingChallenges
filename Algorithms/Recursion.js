// Write two functions that finds the factorial of any number. 
// One should use recursive, the other should just use for loop

function findFactorialRecursive(number, answer){
    if(number === 1) return answer;
    
    answer = answer == 0 ? number * (number -1) : answer * (number -1);

    return findFactorialRecursive(number - 1, answer);
}

console.log(findFactorialRecursive(4, 0));


function findFactorialIterative(number){
  
    answer = number;
    for(let i = number; i > 1; i--)
    answer = answer * (i - 1);

    return answer;
}

console.log(findFactorialIterative(5));
