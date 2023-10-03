def validIPAddresses(string):
    arrOfIPAddresses = []
    strLength = len(string)

    for i in range(1, min(4, strLength)):
        for j in range(i + 1, min(i + 4, strLength)):
            for k in range(j + 1, min(j + 4, strLength)):
                part1 = string[:i]
                part2 = string[i:j]
                part3 = string[j:k]
                part4 = string[k:]

                if isValidInt(part1) and isValidInt(part2) and isValidInt(part3) and isValidInt(part4):
                    correctIP = part1 + '.' + part2 + '.' + part3 + '.' + part4
                    arrOfIPAddresses.append(correctIP)

    return arrOfIPAddresses

def isValidInt(str):
    if len(str) > 1 and str[0] == '0':
        return False
    num = int(str)
    return 0 <= num <= 255

print(validIPAddresses("25525511135"))
