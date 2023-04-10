"use strict";

/**countPairs: takes an array of nums and target number, it returns int 
 * of how many pairs sum up to target number */

function countPairs(nums, targetNum) {
    nums.sort(((a,b) => a - b))

    let count = 0;
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        const pair = nums[left] + nums[right];
        
        if(pair === targetNum){
            count++;
            left++;
            right--;
        }

        if(pair < targetNum){
            left++;
        } else if (pair > targetNum){
            right--;
        }
    }
    
    return count;
}

//input will be an array of nums and a targetNum
//output will be a count of pairs that add up to targetNum
//init a count
//init a left pointer
//init a right pointer
//nums.sort(a,b) => a - b
//while left is less than right
    //let pair = left + right

    //if pair === target
        //count++;
        //left++;
        //right++

    //if(pair is less than target)
        //left++;
            //else
        //right++;

//return count