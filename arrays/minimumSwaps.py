# solution found in comments of https://www.hackerrank.com/challenges/minimum-swaps-2/problem
def minimumSwaps(arr):
    ref_arr = sorted(arr)
    index_dict = {v: i for i, v in enumerate(arr)}
    swaps = 0

    for i, v in enumerate(arr):
        correct_value = ref_arr[i]
        if v != correct_value:
            to_swap_ix = index_dict[correct_value]
            arr[to_swap_ix], arr[i] = arr[i], arr[to_swap_ix]
            index_dict[v] = to_swap_ix
            index_dict[correct_value] = i
            swaps += 1

    return swaps


arr1 = [4, 3, 1, 2]
arr2 = [2, 3, 4, 1, 5]
arr3 = [1, 3, 5, 2, 4, 6, 7]

print(minimumSwaps(arr2))
