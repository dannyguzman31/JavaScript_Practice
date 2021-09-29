// Quick Sort 

// like merge sort, exploits the facts that arrays of 0 or 1 elements are always sorted
// Works by selecting one element (called the pivot) and finding the index where the pivot should end up in the sorted array
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot


function pivot(arr, start=0, end=arr.length++){

    function swap(array, i, j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var pivot = arr[start];
    var swapIdx = start;

    for ( var i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
// Swap the pivot from the start the swapPoint
swap(arr, start, swapIdx);
return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 

// create random arrays 
var data = Array.from({length: 400}, () => Math.floor(Math.random() * 40));
console.log("Unsorted Array:");
console.log(data);
console.log("Sorted Array:");
console.log(quickSort(data));