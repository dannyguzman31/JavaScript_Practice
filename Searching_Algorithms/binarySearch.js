// Has to be sorted
// splits sorted arrays/lists/strings in halfs, eliminating whats not used. 


function binarySearch(nums, target){

    // create a left pointer at the start of the nums 
    let leftPointer = 0;
    // create a right pointer at the end of the nums 
    let rightPointer = nums.length -1;
    // create a pointer in the middle 
    let middle = Math.floor((leftPointer + rightPointer) / 2);

    // while the left pointer comes before the right pointer 
    while( nums[middle] != target && leftPointer <= rightPointer){

        if(target < nums[middle]) rightPointer = middle - 1;
        else leftPointer = middle + 1;
        middle = Math.floor((leftPointer + rightPointer) / 2);
    }

    // never find the target, return -1
    return nums[middle] === target ? middle : -1;
}

console.log(binarySearch([2,5,6,9,13,15,21,85,98,110,152,333], 98));

console.log(binarySearch([2,5,6,9,13,15,21,85,98,110,152,333], 51));
