def capitalizeFirst(arr):
    if not arr or len(arr) == 0:
        return []
    wordArr = list(arr[0])
    wordArr[0] = wordArr[0].upper()
    result = [''.join(wordArr)]
    return result + capitalizeFirst(arr[1:])


print(capitalizeFirst(['car','taco','banana'])) # ['Car','Taco','Banana']
