---
title: Backtracking
description: Understanding Backtracking in Recursion and how to (hopefully) write correct backtracking logic in recursive calls.
# image: a thumbnail image to be shown in social media cards
keywords:
  - Recursion
  - Algorithm
  - Backtracking
  - Python
tags: [Recursion, Algorithm, Python]
---

# Recursion with Backtracking in Python

:::tip

Yet one more reminder

```python title="recursion/backtracking-template.py"
def backtrack(candidate):
    if is_solution(candidate):
        output(candidate)
        return

    for next_candidate in list_of_candidates:
        if is_valid(next_candidate):
            place(next_candidate)
            backtrack(next_candidate)
            remove(next_candidate)
```

:::
