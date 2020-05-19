class Solution:
    def merge(left, right):
        results = []
        while (left and right):
            if left[0] <= right[0]:
                results.append(left.pop(0))
            else:
                results.append(right.pop(0))
        return results + left + right
  

    def sortArray(self, nums: List[int]) -> List[int]:
        if (len(nums) == 1):
            return nums
  
        midpoint = math.floor(len(nums)/2)
        left = nums[:midpoint]
        right = nums[midpoint:]

        return Solution.merge(Solution.sortArray(self, left), Solution.sortArray(self, right))