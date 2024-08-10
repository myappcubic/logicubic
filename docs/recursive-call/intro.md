---
title: Recursion Intro
description: Understanding the Anatomy of a Recursive Function
# image: a thumbnail image to be shown in social media cards
keywords: [Recursion, Algorithm, Python]
---

# Recursion and implementations in Python

A typical recursive function has the following structure:

```python title="recursion/sample.py"
def recursive_function(parameters):
    # Base case(s)
    if base_case_condition:
        return base_case_value

    # Recursive case
    # Modify the problem
    # Make a recursive call with the modified problem
    return recursive_function(modified_parameters)
```

## Learn From Simple Examples

### Find Factorial

Very simple ideas:

**Problem**: Calculate the factorial of a number $n$ (aka $n!$)

- Base Case: `n == 1` or `n == 0`
- Recursive Case: `n` x `factorial`(`n-1`)

Therefore its natural to write

```python
def factorial(n):
    if n == 0 or n == 1: # if n < 1: works too
        return 1
    return n * factorial(n-1)
print(factorial(5)) # Output: 120
```

`if n < 1:` works too because the next line `return 1`, effectively stopped the further recursion (`return n * factorial(n-1)`)

> **Note**: Due to the behavior of `return`, `n` will _never_ make it to `0` if `n >= 1` (recursion stops at `n-1` = `1`).

### Fibonacci Sequence

**Problem**: Find the `n`-th Fibonacci number, where the sequence starts with `0`, `1`.

A Typical Solution:

```python
def fibonacci(n):
    # Base Case: Return n for the first two Fibonacci numbers.
    if n == 0:
        return 0
    elif n == 1:
        return 1
    # Recursive Case: Sum of the two preceding numbers.
    return fibonacci(n - 1) + fibonacci(n - 2)
# Test
print(fibonacci(5))  # Output: 5
```

The following works too (no `elif` and provides more info)

```python
def fibonacci(n, signal = "default"):
    print(f"current call has n = {n}, from {signal}")
    if n == 0:
        return 0
    if n == 1:
        return 1
    one = fibonacci(n-1, signal = "one")
    two = fibonacci(n-2, signal = "two")
    return two + one
fibonacci(4)
```

```python
current call has n = 4, from default
current call has n = 3, from one
current call has n = 2, from one
current call has n = 1, from one
current call has n = 0, from two
current call has n = 1, from two
current call has n = 2, from two
current call has n = 1, from one
current call has n = 0, from two
3
```

### Towers of Hanoi

**Problem**: Move `n` disks from the `source` peg to the `target` peg using an `auxiliary` peg.

**Breakdown**

We have `def hanoi(n, source, target, auxiliary)`

- **Base Case**: `if (n == 1):` -> move from `source` to `target` -> `return` (important to end further recursion)
- **Recursive case**: (when `n > 1`) When there are `n` disks, treating those `n-1` disks on top of disk `n` as a **_sub-problem_**.
  - Move `n-1` disks from `source` to `auxiliary`:
    - `hanoi(n - 1, source, auxiliary, target)`
  - Move disk `n` from `source` to `target`:
    - `print(f"Move disk {n} from {source} to {target}")`
  - Move `n-1` disks from `auxiliary` to `target`:
    - `hanoi(n - 1, auxiliary, target, source)`

```python
def hanoi(n, source, target, auxiliary):
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
        return
    # Move n-1 disks from source to auxiliary, using target as auxiliary
    hanoi(n - 1, source, auxiliary, target)
    # Move the nth disk from source to target
    print(f"Move disk {n} from {source} to {target}")
    # Move the n-1 disks from auxiliary to target, using source as auxiliary
    hanoi(n - 1, auxiliary, target, source)

# Test
hanoi(3, 'A', 'C', 'B')
```

```c
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
```