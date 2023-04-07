"use strict";
// add whatever parameters you deem necessary & write doc comment
/** take word and letters, check if word can be constructed with 
 * letter return a boolean */

function canConstructWord(word, letters) {
    if(word.length > letters.length) return false;

    const wordObj = getFrequency(word);
    const lettersObj = getFrequency(letters);

    for(let char in wordObj){
        if(!char in lettersObj){
            return false;
        }

        if(wordObj[char] > lettersObj[char]){
            return false;
        }
    }

    return true;
}

/** take in a string and returns a object of the frequency */

function getFrequency(string){
    let charObj = {};

    for(let char of string){
        charObj[char] = (charObj[char] || 0) + 1;
    }

    return charObj;
}




//input word and letter
//output should be true or false

//init the word object
//init the letter object
//write a help function that output an obj with frequency
    //loop through each letter of the string
    //map that char to the obj
    //return the obj
//use a for in loop to loop through first string
    //use a if to determine if key in strObj1 is not in strObj2
        //return false
    //use another if statement to determine if str1Obj[key] not equal str2Obj[key]
        //return false
//return true 