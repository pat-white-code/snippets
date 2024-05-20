class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    helper(index, array, current, output) {
        //base case i > array.length
        if (index === array.length) {
            //copy array and push to output
            let copy = [...current];
            output.push(copy);
            return;
        }

        //include array[index]
        current.push(array[index]);
        this.helper(index + 1, array, current, output);

        //don't include array[index]
        current.pop();
        this.helper(index + 1, array, current, output);
    }

    subsets(nums) {
        const subsets = [];
        const currentSubset = [];
        this.helper(0, nums, currentSubset, subsets);
        return subsets;
    }
}
