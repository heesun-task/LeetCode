class Solution(object):
    # find the maximum value h such that at least h papers have been cited h times or more

    # if sort array in descending order, can directly check how many papers have at least h citations
    def hIndex(self, citations):
        """
        :type citations: List[int]
        :rtype: int
        """
        # Sort the citations in descending order 
        citations.sort(reverse=True)# O(nlongn)

        # Iterate through the sorted list and find h-index
        for i in range(len(citations)): # O(n)
            # If current paper's citations are less than (index + 1), return i as h-index
            if citations[i] < i+1:
                return i
        # If all papers satisfy h-index condition, return total count
        return len(citations) # all papers have at least 'n' citations