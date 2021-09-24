/* 
 WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS COUNTS OF EACH CHARACTER IN THE STRING
*/

// 1: function("aaa"); {a:3} -> return an object 
// 2: function("Hello"); {h:1, 2:1 , l:2, o:1}
// function takes numbers & lowercase letters but no spaces and special characters.

function countLetters(str){

    // create an object to return at end 
    var result = {};

    // loop through the string for each character

    for ( var i = 0; i < str.length; i++){

    // if char is a numb/letter and is a key in object, add one to count 
        var char = str[i].toLowerCase();

        if (result[char] > 0) {
            result[char]++;
        }
    // if the char is a num/letter and not in object, add it to object and set value to 1
        else {
            result[char] = 1;
        }
    }
    // if character is empty or special char, do nothing

    // return object 
    return result;

}

console.log(countLetters("Hello from hawaii"));

// Refactoring 

function charCount(str){
    var obj = {};
    for ( var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++ obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58 ) &&
        !(code > 64 && code < 91 ) &&
        !(code > 96 && code < 123 )) {
            return false;
        }
        return true;
}

console.log(charCount("Hello my friends!"));