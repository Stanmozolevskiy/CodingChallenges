
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

let arr = [6,5,3,1,8,7,2,4];
console.log(selectSort(arr));