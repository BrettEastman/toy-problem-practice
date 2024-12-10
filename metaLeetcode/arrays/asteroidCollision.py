import math


class Solution:
    def asteroidCollision(self, asteroids):
        stack = []
        for asteroid in asteroids:
            # if asteroid is greater than zero (moving to the right)
            if asteroid > 0:
                stack.append(asteroid)
            # otherwise (if moving to the left)
            else:
                # while stack has length and is moving to the right (last greater than 0) and asteroid abs val is greater than last item on stack
                while len(stack) > 0 and stack[-1] > 0 and math.fabs(asteroid) > stack[-1]:
                    stack.pop(-1)
                # if asteroid abs val is equal to last item on the stack
                if len(stack) > 0 and math.fabs(asteroid) == stack[-1]:
                    stack.pop(-1)
                # elif stack is moving to the left or there is nothing left in the stack
                elif len(stack) == 0 or stack[-1] < 0:
                    stack.append(asteroid)

        return stack
