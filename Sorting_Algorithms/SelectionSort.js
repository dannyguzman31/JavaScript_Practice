// Selection Sort 
// Similar to bubble sort, but instead of first placing large values into sorted positions, it places small values into sorted positions.

// Complexity: O(n^2)

function selectionSort(arr){
    // loop through the array
    for(var i = 0; i < arr.length; i++){
        // store the first element as the smallest value
        var lowest = i;
    // compare the item to the next item until find the smalles number
        for (var j = i + 1; j < arr.length; j++){
        // if arr[j] less than lowest
            if(arr[j] < arr[lowest]){
                // lowest = j
                lowest = j;
            }
        }
        if( i !== lowest){
        // swap 
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        }
    }
    // return new sorted array 
    return arr;
}

// create random arrays 
var data = Array.from({length: 400}, () => Math.floor(Math.random() * 40));
console.log("Unsorted Array:");
console.log(data);
console.log("Sorted Array:");
console.log(selectionSort(data));