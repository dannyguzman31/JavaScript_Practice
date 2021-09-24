// Given a sorted array of integers, write a function call search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found, return -1. 

// O(N) Solution 

function Search(arr, val){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }

    return -1;
}

console.log(Search([1,2,3,4,5,6],4));



// Binary Search Algorithm 
// Log(N) Solution 

function BinarySearch(array, value){
    let min = 0;
    let max = array.length - 1;

    while (min <= max){
        let middle = Math.floor((min + max) /2);
        let currentElement = array[middle];

        if (array[middle] < value){
            min = middle + 1;
        }
        else if ( array[middle] > value){
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

console.log(BinarySearch([1,2,3,4,5,6],4));