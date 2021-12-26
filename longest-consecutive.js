/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    const dataSet = new Set(nums);
    let res = 0;
    for(const num of nums){
        if(!dataSet.has(num - 1)){
            let temp = num;
            while(dataSet.has(temp)){
                temp++;
            }
            res = Math.max(res,temp - num);
        }
    }
    return res;
};

//Input: nums = [100,4,200,1,3,2]
//Output: 4

//Input: nums = [0,3,7,2,5,8,4,6,0,1]
//Output: 9

/**
 * The idea is
 * Find the number less than the current number, if there exists a smaller number, I do nothing, 
 * this means I only need to check smaller number.
 * If there is no smaller number than the current number, I will store that number in a temporary variable.
 * Check whether the current Set arrays exists or not. [1]
 * If exists I will increase this temporary variable and repeat above process [1].
 * [**] Compare previous result and the current.
 * DONE.
 */
