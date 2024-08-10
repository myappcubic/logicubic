---
sidebar_position: 1
title: Topological Sorting
slug: topo-sort
---

# Topological Sorting

## What a `Graph` looks like?

```python
graph = {
    'A': ['C'],
    'B': ['C', 'D'],
    'C': ['E'],
    'D': ['F'],
    'E': ['H'],
    'F': ['G'],
    'G': [],
    'H': []
}
```

## What does `Topological Sort` do?

- Use `in_degree` dict (`in_degree[node]`) to describe how many other nodes back-connects to a given node
- Start from nodes with `in_drgree = 0`
- When going through nodes with `in_drgree = 0`, visit its `neighbor`, therefore can safely do `in_degree - 1` because the node is already visited
- Whenever there is a in_degree = 0 during the process append to the `queue`

### finding `in_degree`

```python
from collections import defaultdict
in_degree = defaultdict(int)
for node in graph:
    for neighbor in graph[node]: # [neighbor] takes one back connection
        in_degree[neighbor] += 1
print(in_degree)
```

```bash
defaultdict(int, {'C': 2, 'D': 1, 'E': 1, 'F': 1, 'H': 1, 'G': 1})
```

```python
from collections import deque
queue = deque([node for node in graph if in_degree[node] == 0])
print(queue)
```

```bash
deque(['A', 'B'])
```

```python
topo_order = []
while queue:
    node = queue.popleft()
    topo_order.append(node)
    for neighbor in graph[node]:
        in_degree[neighbor] -= 1
        if in_degree[neighbor] == 0:
            queue.append(neighbor)
print(topo_order)
# ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'G']
```
