def findBuildings(heights):
    max = 0
    ocean_views = []

    for i in range(len(heights) - 1, -1, -1):
        if heights[i] > max:
            ocean_views.insert(0, i)
            max = heights[i]

    return ocean_views
