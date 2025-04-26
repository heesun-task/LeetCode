class Solution:
    # E.g., n = 2
    # 2^2 = 4
    # 4^2 = 16
    # 1^2 + 6^2 = 1 + 36 = 37
    # 3^2 + 7^2 =  9 + 49 = 58
    # ...
    # How to determine it's not happy number? 
    # Create a set of the result of each sum, 
    # and return false if there's any repeats means it's in loop
    def isHappy(self, n: int) -> bool:
        # Create a set to track the result of each sum
        results = set()
        prev_sum = n

        # Loop the sum until return bool
        while(True):
            # split int n into list of digits (int -> string -> split -> int)
                # prev_sum_str = str(prev_sum)
                # digits = []
                # for char in prev_sum_str:
                #     digits.append(int(char))
            digits = [int(digit) for digit in str(prev_sum)]

            # sum square of each digit
            sum_of_squares = sum(digit ** 2 for digit in digits)

            # if sum_of_squares = 1, return True (happy)
            if sum_of_squares == 1:
                return True

            # if not,
            else:
                # if sum_of_squares in results set, return False
                if sum_of_squares in results:
                    return False
                # else add sum_of_squares to results set, 
                    # and save sum to prev_sum (then repeat loop)
                else:
                    results.add(sum_of_squares)
                    prev_sum = sum_of_squares


        