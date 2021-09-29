/***************  RADIX SORT **************************/

// Info: 
// Radix Sort is a special sorting algorithm that works on lists of numbers
// it never makes comparisons between elements 
// it exploits the fact that information about the size of a number is encoded in the number of digits 
// more digits means a bigger number! 

// returns the digits in num at the given place value 
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  // returns the number of digits in num 
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  // returns the number of digits in the largest numbers in the list 
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }

  function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

// create random arrays 
var data = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
console.log("Unsorted Array:");
console.log(data);
console.log("Sorted Array:");
console.log(radixSort(data));