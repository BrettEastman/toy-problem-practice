# Feel free to add new properties and methods to the class.
class MinMaxStack:
    def __init__(self):
        self.stack = []
        self.minMaxStack = []

    def peek(self):
        return self.stack[len(self.stack) - 1]

    def pop(self):
        self.minMaxStack.pop()
        return self.stack.pop()

    def push(self, number):
        self.stack.append(number)
        newMinMax = {'min': number, 'max': number}
        if len(self.minMaxStack):
            lastMinMax = self.minMaxStack[len(self.minMaxStack) - 1]
            newMinMax['min'] = min(number, lastMinMax['min'])
            newMinMax['max'] = max(number, lastMinMax['max'])
        self.minMaxStack.append(newMinMax)

    def getMin(self):
        lastMinMax = self.minMaxStack[len(self.minMaxStack) - 1]
        return lastMinMax['min']

    def getMax(self):
        lastMinMax = self.minMaxStack[len(self.minMaxStack) - 1]
        return lastMinMax['max']
