def reverseWordsInString(string):
    # creat reverseWords array
    reverseWords = ""
    # create currentWord var
    currentWord = ""
    # create currentSpaces var
    currentSpaces = ""
    # create isSpaces bool
    isSpaces = False

    # iterate over string:
    for char in string:
        # if char is not a space and isSpaces is false
        if char != " " and isSpaces == False:
            # concatenate char to currentWord
            currentWord += char
        # if char is a space
        elif char == " ":
            # isSpaces is true
            isSpaces = True
            # concatenate char to currentSpaces
            currentSpaces += char
        # if char is not a space and isSpaces is true
        elif char != " " and isSpaces == True:
            # then we can prepend currentWord to reverseWords
            reverseWords = currentWord + reverseWords
            # then also insert currentSpaces to reverseWords
            reverseWords = currentSpaces + reverseWords
            # then make currentWord equal to char (i.e. the current char from string iteration)
            currentWord = char
            # currentSpaces = ""
            currentSpaces = ""
            # isSpaces = False
            isSpaces = False

    # then we have to do this once more with inserting the final currentWord and currentSpaces
    reverseWords = currentWord + reverseWords
    reverseWords = currentSpaces + reverseWords

    # next, we have to return a concatenated version all of the items in the reverseWords array into a string
    return reverseWords


str = "Algoexpert is the best!"
print(reverseWordsInString(str))
