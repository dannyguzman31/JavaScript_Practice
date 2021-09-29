// Insertion Sort 
// Builds up the sort by gradually creating a larger left half which is always sorted

// Complexity: O(n^2)

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i];
        for(var j = i - 1; j >= 0 &&  arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

var data = Array.apply(null, {length: 5000}).map(Function.call, Math.random );

console.log(insertionSort(data));