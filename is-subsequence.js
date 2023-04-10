"use strict";

// add whatever parameters you deem necessary & write docstring
function isSubsequence(s1, s2) {
    let s1Pointer = 0;
    let s2Pointer = 0;

    while (s2Pointer < s2.length) {
        if (s1[s1Pointer] === s2[s2Pointer]) {
            s1Pointer++;
        }

        if (s1Pointer === s1.length) {
            return true;
        }

        s2Pointer++;
    }
    return false;
}


//input will be two strings
//output will be a boolean

//input will be s1 and s2
//init a point variable called s1Pointer to 0;
//init a point variable called s2Pointer to 0;

//use a while loop will be is s2Pointer is less than s2.length
    //use a if statement if s1[s1Pointer] === s2[s2Point]
        //s1Pointer++;
        //s2Pointer++;
            //else
        //s2Pointer++;

//if s1Pointer === s1.length - 1
    //return true
        //else
    // return false