def merge(intervals):
    # edge case if there is nothing in intervals
    if not len(intervals):
        return []
    # sort intervals by the first num in each tuple using lambda anonymous function to turn the first num into the key (x[0])
    intervals.sort(key=lambda x: x[0])
    # create merged list with the first item of intervals
    merged = [intervals[0]]

    # for loop starting at the 2nd item of intervals
    for i in range(1, len(intervals)):
        # create currItem
        curr_item = intervals[i]
        # create prevItem (item in the last index of merged)
        prev_item = merged[-1]
        # if first num of currItem is less than or equal to the 2nd num of prevItem
        if curr_item[0] <= prev_item[1]:
            # item at the last index of merged becomes new list tuple with prevItem[0] and either prevItem[1] or currItem[1] depending on which is greater
            merged[-1] = [prev_item[0], max(curr_item[1], prev_item[1])]
        else:
            merged.append(curr_item)

    return merged


intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
print(merge(intervals))
