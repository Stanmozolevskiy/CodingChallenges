

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
};

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