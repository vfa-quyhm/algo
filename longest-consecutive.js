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