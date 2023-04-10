"use strict";

/**separatePositive: take in an array of numbers and returns original aarry with 
 * the positve on the left and negative on the right of the array */
function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        if(nums[left] > 0){
            left++;
        } else if(nums[right] < 0){
            right--;
        }

        if(nums[left] < 0 && nums[right] > 0){
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++;
            right--;
        }
    }
    
    return nums;
}

//input will be an array of non zero numbers
//output will be the same array with positive on the left side and negative on the right size
//init a left pointer
//init a right pointer
//use a while loop if left is less than right pointer
    //use if statement left pointer is 0+ move
        //left++;
    //if right pointer is less than 0
        //right--; 

    //if left is less than right
        //swap
//return nums