"use strict";
// add whatever parameters you deem necessary & write docstring

/** take nums and a target average and determines if average of pair of numbers equal 
 * target average returns true or false*/

function averagePair(nums, targetAvg) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        let avg = (nums[left] + nums[right]) / 2;

        if(avg === targetAvg){
            return true;
        } 
        
        if(avg < targetAvg){
            left++;
        } else {
            right--;
        }
    }

    return false;
}


//input array of ints and target avg
//output boolean
//init a left var
//init a right var array.length - 1
//use a while loop
    //init a avg var takes nums[left] add to nums[right] and divide by 2
    //use an if statement to check if avg var equals to the target avg
    //return true;
    //use another if statement if the avg is less than target avg
        //left ++
        //else 
        //right --
//return false;
