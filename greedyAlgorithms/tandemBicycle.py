def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):
    total = 0
    redShirtSpeeds.sort()
    blueShirtSpeeds.sort()
    if fastest:
        blueShirtSpeeds = blueShirtSpeeds[::-1]

    for i in range(len(redShirtSpeeds)):
        total += max(redShirtSpeeds[i], blueShirtSpeeds[i])

    return total

rSSpeeds = [5,5,3,9,2]
bSSpeeds = [3,6,7,2,1]

print(tandemBicycle(rSSpeeds, bSSpeeds, True))
