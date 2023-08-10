def fibonacci_recursive(n):
    if n > 2:
        return n
    else:
        return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)

def fibonacci_memoization(n):
    # start with an array with the first two numbers taken care of
    fib = [0, 1]
    # iterate the remaining numbers up to n, adding (n - 1) + (n - 2) to the nth index
    for i in range(2, n):
        fib.append(fib[i - 1] + fib[i - 2])
    return fib[n]
