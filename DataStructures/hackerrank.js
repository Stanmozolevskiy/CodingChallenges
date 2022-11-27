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

 //https://www.hackerrank.com/challenges/three-month-preparation-kit-two-characters/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-nine
 function alternate(s){ 
    // separate distinct values;
    let uniqueChar = [...new Set(s)];
    let max = 0;
    // convert string to arr
    let sArr = Array.from(s);
     
    for(let i = 0, len = uniqueChar.length; i< len; i++){
        for(let j = i+1; j< len; j++){
        // filter pair of elements that are unique from the string
        let temp = sArr.filter(el => {
            return  el === uniqueChar[i] || el === uniqueChar[j]
        }).join('');

        // if elements do not repet check if the max is bigger that alredy existing one
        if(temp.indexOf(uniqueChar[i] + uniqueChar[i]) === -1 && temp.indexOf(uniqueChar[j]+ uniqueChar[j]) === -1)
            if( temp.length > max)
                max = temp.length;
        }
    }
    return  max;
 }

 console.log(alternate("abasadbae"));

 function maxSubarray(arr) {
    let [maxSub,curSum,max, sum] = [arr[0],arr[0],arr[0], arr[0]];

    for(let i = 1; i< arr.length; i++){
        if(curSum < 0)
            curSum = 0;  

        sum += arr[i]> 0 ? arr[i] : 0;
        max = Math.max(max, arr[i]);
        curSum += arr[i];
        maxSub = Math.max(maxSub, curSum);
    }
    return [maxSub, sum> 0 ? sum : max];
 }

 console.log(maxSubarray([1, -1, -1, -1, -1, 5]))



function chiefHopper(arr) {
// 1. botEnergy < height :
//     newEnergy = botEnergy - (height - botEnergy);
//  Simplify the formula:
//     newEnergy = (botEnergy - height + botEnergy);
//     newEnergy = 2 * botEnergy - height;
//     botEnergy = (newEnergy + height)/2;

// 2. botEnergy > height :
//     newEnergy = botEnergy + (botEnergy - height);
//     newEnergy = 2 * botEenrgy - height;
//     botEnergy = (newEnergy + height) / 2;

// 3. botEnergy == height :
//     newEnergy = botEnergy;

// the same formula for three cases: botEnergy = (newEnergy + height) / 2;
    let minEnergy = 0;
    
    for(let i = arr.length -1; i >= 0; i--){
        // we will always need to round up to make sure we have enough energy, that is why we use Math.ceil
        minEnergy = Math.ceil((minEnergy + arr[i])/2);
    }
return minEnergy;

}

console.log(chiefHopper([[3,4,3,2,4]]));


function weightedUniformStrings(s, queries) {
    
    const d = {};
    // separate all of the matching letters 
    const matches = s.match(/([a-z])\1*/g);

    matches.forEach(
        // create new arr lengh of string "match"
        v => Array(v.length)
            // fill new arr with the value for letter
            .fill(v.charCodeAt(0) - 96)
            // add all of the values for consiquent letters
            .map((v,i)=> v * (i+1))
            // add the values to the d 
            .forEach(v => d[v] = true));

    // if d exist return yes if no return no
    return queries.map(v=> d[v] == true ? "Yes": "No")    
}

console.log(weightedUniformStrings("aaabccb", [1,2,3]))


function sortedSquares (nums) {
    if(nums.length < 2) return [Math.pow(nums[0],2)];
    let i = 0; 
    let j = nums.length -1
    let ans = [];
    while(i<j){
        let first = Math.pow(nums[i],2);
        let second = Math.pow(nums[j],2);
        if(first > second){
            ans.push(first)
            i++;
            if(i>=j) ans.push(second);
        }
        else{
            ans.push(second);
            j--;
            if(i>=j) ans.push(first);
        } 
        
    }
    
    i = 0;
    j = ans.length -1;
    
    while(i<j){
        let temp = ans[i];
        ans[i]= ans[j];
        ans[j] = temp;
        i++;
        j--;
    }
    return ans;
};

console.log(sortedSquares([-100]));

function slidingWindowFindLength(nums, k) {
    let left = 0, curr = 0, ans = 0;
    for (let right = 0; right < nums.length; right++) {
        debugger;
        curr += nums[right];
        while (curr > k) {
            debugger;
            curr -= nums[left];
            left++;
        }
        
        ans = Math.max(ans, right - left + 1);
    }
    
    return ans;
}

console.log(slidingWindowFindLength([3, 1, 2, 7, 4, 2, 1, 1, 5], 8));


function slidingWindonBiggestSubaray(s){
    let left = 0, count = 0; ans = 0;

    for(let right = 0; right < s.length; right++){
        if(s[right] === "0")
            count ++;

        while(count > 1 ){
            if(s[left] === "0")
                count --;

            left++;
        }
        ans = Math.max(ans, right - left +1);
    }
    return ans;
}

console.log(slidingWindonBiggestSubaray("1101100111"));

function slidingWindowNumberOfSubArrays(arr, k){
    let left = 0, ans = 0;
    let cur = 1;

    for(let right = 0; right < arr.length; right++){
        cur *= arr[right];

        while(left <= right && cur >= k){
            cur /= arr[left];
            left++;
        }
        ans += right - left +1;
    }
    return ans;
}

console.log(slidingWindowNumberOfSubArrays([10, 5, 2, 6],100));

function slidingWindowFixedSizeArrSum(arr,k){
    let left = 0, sum = 0, ans=0;

    for(let right = 0; right< arr.length; right++){
        sum += arr[right];

        while(right - left +1 > k){
            sum -= arr[left];
            left ++;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
}

console.log(slidingWindowFixedSizeArrSum([3,-1,4,12,-8,5,6],4));

function findMaxAverage(nums, k) {
    if(nums.length < 2) return nums[0];
    
    let sum = 0;
    for(let i = 0; i < k; i++)
        sum += nums[i];
    
    let ans = sum;
    for(let i = k; i<nums.length; i++){
        sum += nums[i] - nums[i-k];
        ans = Math.max(ans, sum);
    }
    return ans/k;
};

console.log(findMaxAverage([-6662,5432,-8558,-8935,8731,-3083,4115,9931,-4006,-3284,-3024,1714,-2825,-2374,-2750,-959,6516,9356,8040,-2169,-9490,-3068,6299,7823,-9767,5751,-7897,6680,-1293,-3486,-6785,6337,-9158,-4183,6240,-2846,-2588,-5458,-9576,-1501,-908,-5477,7596,-8863,-4088,7922,8231,-4928,7636,-3994,-243,-1327,8425,-3468,-4218,-364,4257,5690,1035,6217,8880,4127,-6299,-1831,2854,-4498,-6983,-677,2216,-1938,3348,4099,3591,9076,942,4571,-4200,7271,-6920,-1886,662,7844,3658,-6562,-2106,-296,-3280,8909,-8352,-9413,3513,1352,-8825]
    ,90))