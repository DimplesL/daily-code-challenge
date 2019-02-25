/**
 * Company: Facebook.
 *
 * Write a function that rotates a list by k elements. For example, [1, 2, 3, 4, 5, 6]
 * rotated by two becomes [3, 4, 5, 6, 1, 2]. Try solving this without creating a copy
 * of the list. How many swap or move operations do you need?
 */
var rotate = function(nums, k) {
  if (nums.length === k) return nums;
  for (let i = 0; i < k; i++) {
    let j = nums.length - 1;
    const last = nums[j];

    while (j > 0) {
      nums[j] = nums[j - 1];
      j--;
    }

    nums[0] = last;
  }
};
