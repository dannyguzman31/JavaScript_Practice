// ---  MergeSort ---- 

// It's a combination of two things - merging and sorting.
// Exploits the fact that arrays of 0 and 1 elements are always sorted 
// Works by decomposing an array into smaller arrays of 0 and 1 elemtns, then bulding up a newly sorted array 

// Complexity: O(n log n)

// merges the array 
function merge(arr1, arr2){

    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if (arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        }
        else {
            results.push(arr2[j]);
            j++;
        }
    }
    // if remaining on left, add them to i
    while ( i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    // if remaining on right, add them to i
    while ( j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
}


function mergeSort(arr){
    // base case 
    if (arr.length <= 1 ) return arr;
    // find the midpoint of the array 
    let mid = Math.floor(arr.length/2);
    // make left and use recursion until 0
    let left = mergeSort(arr.slice(0,mid));
    // make right side and use recursion until end of right side 
    let right = mergeSort(arr.slice(mid));
    // return merge call 
    return merge(left, right);
}
// create random arrays 
var data = Array.apply(null, {length: 50000}).map(Function.call, Math.random );

console.log(mergeSort(data));