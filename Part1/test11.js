
/* CHOP A STRING IN TWO AND RETURN AN ARRAY CONTAINING BOTH PIECES ********************/
const Chop = (str) => {

    // create three variables 
    // one string to test 
    // two empty arrays to hold the new arrays 
    var str = 'Testing';
    var arr1 = [];
    var arr2 = [];

    // divides string into an order list of substrings and puts them into an array
    var splitStringArray = str.split("");

    // cut in half to make the first half bigger when necessary
    var stringHalf = Math.round(splitStringArray.length/2);


    // foor loops 
    // loops through the first part of the split and puts it on the new arr1 array. 
   for(var i = 0; i < stringHalf; i++ ){
        arr1 += (i!=0 ?" ":"") + splitStringArray[i] ;
   }

   // loops through the first part of the split and puts it on the new arr2 array. 
   for (var i =  stringHalf; i < splitStringArray.length; i++){
    arr2 += (i!= stringHalf?" ":"") + splitStringArray[i];
}

// returns an array with the two halves inside
    return arr3 = [arr1, arr2];
}

// test the function
console.log(Chop());


/****************     FIZZBUZZ *****************************************/
const FizzBuzz = () => {
    // fizzbuzz 
    // if divisible by 3 then fizz 
    // if divisible by 5 then buzz 
    // if divisible by 15 then buzz

    // numbers to count 
    const count = 100;

    // loop through count 
    for (var i = 1; i <= count; i++){
        
        if( i % 15 == 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("buzz");
        }
        else if ( i % 5 == 0) {
            console.log("Fizz");
        }
        else 
        console.log(i);
    }
}
console.log(FizzBuzz());



/*********** REVERSE AN ARRAY ********************************* */
function ReverseArr(input){
    // create an array 
    var arr = new Array;
    // loop through the array in reverse 
    for ( var i = input.length -1; i >= 0; i--){
        // push array index
        arr.push(input[i]);
    }
    // return array 
    return arr;
    }
    // log 
console.log(ReverseArr([1,2,3,4,5]));
    

/************ REVERSE AN ARRAY USING RECURSION **************** */
function reverseArray(a){
    
    // if the lenght array is empty, then return it
    if (!a.length){
        return a;
    }
    // else , recursion .. 
    // slice 
    return reverseArray(a.slice(1)).concat(a[0]);
}
console.log(reverseArray([1, 2, 3, 4, 5]));


/***** REVERSE A STRING USING A FOOR LOPP ************ */
function reverseString(str){
    // create empty string that will hold the new string
    var newString = ""; 
    // loop through the string in reverse 
    for (var i = str.length -1; i >= 0; i--){
        // add a char on each iteration 
        newString += str[i];
    }
    // return new string 
    return newString;
}
console.log(reverseString('Hello'));


/*** REVERSE A STRING USING RECURSION */

function reverseString(str){
    // if string is empty then end the end the recursion 
    if(str === "")
    return "";
    // 
    else 
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString('hello'));


/***********CHECK IF A WORD IS PALINDROME */
function checkPalindrome(str){
    var len = Math.floor(str.length /2);
    for (var i = 0; i < len; i++)
    if(str[i] !==str[str.length - i -1])
    return  str + ' is not a palindrome';
    return str + ' is a palindrome';
}
console.log(checkPalindrome('hola'));


/*********** FIBONACCI SERIES USING RECURSION */
function fibonacci(n){
    return n < 1 ? 0
    : n <= 2 ? 1
    : fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(10));