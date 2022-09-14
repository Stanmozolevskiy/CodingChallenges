

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