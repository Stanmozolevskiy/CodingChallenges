
function bubleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubleSort(arr));

function selectSort(arr){
    for(let i=0; i< arr.length; i++){
        let smallest = arr[i];
        let index = 0;
        for(let j = i; j < arr.length; j++){
            if(smallest > arr[j]){
                smallest = arr[j];
                index = j;
            }
            
            if(j+1 === arr.length && smallest < arr[i]){
            
                let temp = arr[i];
                arr[i] = smallest;
                arr[index] = temp;
            }
        }
        
       
    }
    return arr;
}
console.log(selectSort(arr));

function inssertSort(arr){
    let j, i, key;
    for(i = 1; i< arr.length; i++){
        key = arr[i];
        j = i-1;
        /*Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && arr[j] > key){
            arr[j+1]= arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}
console.log(inssertSort(arr));


function mergeSort(array){
    if(array.length === 1) return array;
    // Split Array in into right and left

    const half = Math.round(array.length/2);
    let left = array.slice(0, half);
    let right = array.slice(half);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right){
    let result = [], 
    leftIndex = 0,
    rightIndex = 0;    
    
    while(leftIndex < left.length && 
        rightIndex < right.length){
            if(left[leftIndex]< right[rightIndex]){
                result.push(left[leftIndex]);
                leftIndex++;
            }
            else{
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let arr = [6,5,3,1,8,7,2,4];
console.log(mergeSort(arr));


// Questions for the intervieu for sorting

//#1 - Sort 10 schools around your house by distance:
// Since it is the small number of items to sort I will use the INSERT SORT,
// it is easy to implement and it performs the best on the small datasets.

//#2 - eBay sorts listings by the current Bid amount:
// I would use the QUICKSORT or MERGESORT because they are the best sorting algorithms for the large data sets

//#3 - Sport scores on ESPN
// Depending on the numbers I qould use something faster than regular QS or MS something like Non Comparison Sorting algorithms that check bytes

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// The only acceptable algorithm for this scenario is QS becase it is the best for the large datasets and the best for space complexity

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// INSERT SORT would be the best for almost sorted date and for smalll range of data

//#6 - Temperature Records for the past 50 years in Canada
// QS would be the best because it has a lot of data and it is outperforms all of the algorithms. Has good space complexity

//#7 - Large user name database needs to be sorted. Data is very random.
// QS would be the best because the random date and large database

//#8 - You want to teach sorting for the first time
// Bubble sort and Insert sort, supper easy to implement and pretty simple to understand 
