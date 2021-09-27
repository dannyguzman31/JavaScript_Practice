// Has to be sorted
// splits sorted arrays/lists/strings in halfs, eliminating whats not used. 


function binarySearch(array, value){

    // create a left pointer at the start of the array 
    let leftPointer = 0;
    // create a right pointer at the end of the array 
    let rightPointer = array.length -1;
    // create a pointer in the middle 
    let middle = Math.floor((leftPointer + rightPointer) / 2);

    // while the left pointer comes before the right pointer 
    while( array[middle] != value && leftPointer <= rightPointer){

        if(value < array[middle]) rightPointer = middle - 1;
        else leftPointer = middle + 1;
        middle = Math.floor((leftPointer + rightPointer) / 2);
    }

    // never find the value, return -1
    return array[middle] === value ? middle : -1;
}

console.log(binarySearch([2,5,6,9,13,15,21,85,98,110,152,333], 98));

console.log(binarySearch([2,5,6,9,13,15,21,85,98,110,152,333], 51));
