// Given: array nums, size = n
// number of the Majority element > n/2

class Solution {
public:
    int majorityElement(vector<int>& nums) {
        // Create a hash map to store the count of each number
        unordered_map<int, int> table;
        int n = nums.size();

        // Iterate through the array and count each numbers's frequency
        for(int num : nums) {
            // Increment count for the current number
            table[num] += 1; 

            // if the count of current num exceeds n/2, return it
            if (table[num] > n/2) 
                return num;
        }

        // Return -1 as a fallback
        return -1;
    }
};