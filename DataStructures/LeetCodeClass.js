

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

function prefixSum(nums, queries, limit){
    // populate prefix arr with [n, n1+n, n2 + n1]
    let prefix = [nums[0]];
    for(let i = 1; i< nums.length; i++)
        prefix.push(nums[i]+ prefix[prefix.length-1]);

    let ans = [];
    for(const [x,y] of queries){
        let temp = prefix[y] - prefix[x] + numx[x];
        ans.push(temp< limit); 
    }

    return ans;
}

console.log(prefixSum([1, 6, 3, 2, 7, 2], [[0, 3], [2, 5], [2, 4]], 13));

function countElements (arr) {
    let hash = new Map();
    let ans = 0;

    arr.forEach(num => {
        if(!hash.has(num+1))
            hash.set(num+1, 1);
        else
            hash.set(num+1, hash.get(num+1) +1)});


    for(let i = 0; i< arr.length; i++){
       debugger;
            if(hash.has(arr[i])){
               ans += hash.get(arr[i]);
               hash.delete(arr[i])
            }
   }
   return ans;
}

console.log(countElements([1,1,2,2]))

function subarraySumWithHashing(nums, k){
    let counts = new Map();
    counts.set(0, 1);
    let ans = 0, curr = 0;

    for (const num of nums) {
        debugger;
        curr += num;
        ans += counts.get(curr - k) || 0;
        counts.set(curr, (counts.get(curr) || 0) + 1);
    }

    return ans;
}

console.log(subarraySumWithHashing([1, 2, 5, 2, 1],3))

function findWinners(matches){
    let loosers = new Map();
    matches.forEach(result=>{
        let winner = result[0];
        let looser = result[1];
        // add player to the hash and set the score;
        loosers.set(winner, (loosers.get(winner)|| 0 ));
        loosers.set(looser, (loosers.get(looser)|| 0 ) + 1);
    })

    let ans = [[], []];
    loosers.forEach((val, key) =>
        val === 0 ? ans[0].push(key): val === 1 ? ans[1].push(key): null);

    ans[0].sort((a,b)=> a-b);
    ans[1].sort((a,b)=> a-b);

    return ans;
}

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))


function largestUniqueNumber(nums) {
    let max = new Map();
    nums.forEach(x=>max.set(x, (max.get(x) || 0) +1 ));
   
    let ans = -1;
    max.forEach((val, key)=>{
debugger
        val === 1 && key > ans ? ans = key : null ;
    } )
    
    
    return ans;
};

console.log(largestUniqueNumber([1,2,5,5,10]));



function maxNumberOfBalloons (text) {
    let hash = new Map();
    for(let i = 0; i< text.length; i++){
        let char = text[i];
        if("balloon".includes(char))
            hash.set(char, (hash.get(char) || 0) +1);
    }
    
    let ans = 0;
    while(true)
        for(let char of "balloon"){
            debugger;
            if(hash.get(char) === 0 || !hash.has(char))
                return  ans;
            else{
                hash.set(char, hash.get(char)-1);
                if(char === "n")
                    ans++;
            }
        }
};

console.log(maxNumberOfBalloons("lloo"));


function trackFrequencyWithHash(s){
    let left = 0, ans =0;
    let hash = new Map();

    for(let right = 0; right<s.length; right++){
        let letter = s[right];
        hash.set(letter, (hash.get(letter)||0) +1);

        while(hash.get(letter) > 1){
            debugger;
            let leftLetter = s[left];
            hash.set(leftLetter, (hash.get(leftLetter) - 1) );
            left++;
        }
        ans = Math.max(ans, right + 1 - left);
    }
    return ans;
}

console.log(trackFrequencyWithHash("abcadbcbb"));

function deleteDuplicates(head) {
    if( head === null) return null;
  
    // create a dummy node to store the pointer;
    let dummy = new ListNode(-Infinity, head);
    let cur = head;
    let prev = dummy;
    
    while(cur){
        if(cur.val === prev.val){
            // while the values are repeating move forward
            while(cur && cur.val === prev.val)
                cur = cur.next;
            // when not repeating set prev to cur
            prev.next = cur;  
        }else{
            prev = cur;
            cur = cur.next;
        }
    }
    
    return dummy.next;
};

function pairSum(head) {
    // split the linked list into two, then reversed the second half.
    let slow = head;
    let fast = head.next;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let newList = slow.next;
    slow.next = null;
    let newHead = reverse(newList);

    //iterated through both lists finding the highest sum.
    let p1 = head;
    let p2 = newList;

    let max = -Infinity;
    
    while(p1 && p2){
        let sum = p1.val + p2.val;
        max = Math.max(max, sum);

        p1 = p1.next;
        p2 = p2.next;
    }

  return max;
};

const reverse = (head) => {
    let prev = null, node = head;
    while(node){
        let temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
    }
    return prev;
}
