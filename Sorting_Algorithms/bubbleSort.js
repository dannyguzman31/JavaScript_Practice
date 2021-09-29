// Bubble Sort 
// First places large values into sorted positions

// Complexity: O(n^2)

function bubbleSort(arr){
  // variable for noswaps 
    var noSwaps;
    // loop from end of array towards the begining
    for(var i = arr.length; i > 0; i--){
      // no swaps true
      noSwaps = true;
      // inner lopp from beggining until i-1
      for(var j = 0; j < i - 1; j++){
        // if arr[j] is greater than arr[j+1]
        if(arr[j] > arr[j+1]){
          // swap the two values 
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      // break if no swaps 
      if(noSwaps) break;
    }
    // return sorted array 
    return arr;

}

// create random arrays 
var data = Array.from({length: 400}, () => Math.floor(Math.random() * 40));
console.log("Unsorted Array:");
console.log(data);
console.log("Sorted Array:");
console.log(bubbleSort(data));