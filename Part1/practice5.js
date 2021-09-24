// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr){

    // set i to 0
    var i = 0;

    // loop through the array starting at 1 
    for (var j = 1; j < arr.length; j++){
        // if index of i is not equal to j 
        if(arr[i] != arr[j]) {
            // move i up by 1 
            i++;
            // set j value to i 
            arr[i] = arr[j]
        }
    }

    return i + 1;

}
// Example 
/*     i
  1:  [1,2,2,3,4,4]
         j
         i 
  2:  [1,2,3,3,4,4]
           j
           i
  3:  [1,2,3,3,4,4]
             j
             i
  4:  [1,2,3,4,4,4]          
               j
               i
  5:  [1,2,3,4,4,4]            
                 j
*/
console.log(countUniqueValues([1,2,2,3,4,4]));