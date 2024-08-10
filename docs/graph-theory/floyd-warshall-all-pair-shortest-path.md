---
title: Floyd-Warshall Algorithm for All-Pairs Shortest Paths
description: Floyd-Warshall algorithm computes shortest paths between all pairs of nodes.
# image: a thumbnail image to be shown in social media cards
keywords: [Floyd-Warshall, Algorithm, All-Pairs Shortest Paths, APSP]
---

# Floyd-Warshall Algorithm

## Some Shortest-Path Algorithm

- `Dijkstra's`
  - _**Shortest**_ path from _one_ node to **all** nodes
- `Bellman-Ford`
  - **_Shortest_** path from _one_ node to **all** nodes, **_negative_** edges allowed
- `Floyd-Warshall`, and APSP solution
  - **_Shortest_** path between **all pairs of vertices**, **_negative_** edges allowed

```python
inf = float('inf')
graph = [
    [0, 3, inf, 7],   # distances from vertex 0 to others
    [8, 0, 2, inf],   # distances from vertex 1 to others
    [inf, inf, 0, 1], # distances from vertex 2 to others
    [2, inf, inf, 0]  # distances from vertex 3 to others
]
```

## Ideas behind

The goal is to **eventually** go through **_ALL_** possible intermediate nodes on paths of different lengths.

Use the idea from dynamic programming and use a 3D matrix `dist` with size `V x V x V`.

:::tip

`dist[k][i][j]` $\footnotesize{(k, i, j \le V - 1)}$ describes the _shortest_ path from vertex i to j, routing through nodes `{0, 1, ..., k-1, k}` -> In human language, using dynamic programming to cache previous solutions, we progress from `k = 0`, move till `k = V - 1`.

> The `begining` matrix of the optimal solution from `i` to `j` is merely the `distances` in the **adjacency matrix**, and `dist[0][i][j]` = `adjacency matrix`.

:::

:::info
To find the **BEST** distance from `i` to `j` _(re-routed)_ via node `k` _reusing_ BEST solutions from `{0,1,...,k-1}`

`dist[k][i][j]` = `min`(`dist[k-1][i][j]`, `dist[k-1][i][k]`+`dist[k-1][k][j]`) _`dist[-][i][k]` + `dist[-][k][j]` means routing from `i` to `k`, then from `k` to `j`_

> State `[k-1]` is needed to build state `[k]`, therefore possible to compute solution for `[k]` **_in-place_**.

:::

## In-Place Updates

Variable `k` represents the "_intermediate_" vertex that might be used in the _shortest_ path from vertex `i` to vertex `j`. By iterating `k` from `0` to `V-1`, the algorithm progressively considers paths that might go through any of these intermediate vertices.

- When the loop is at the value of `k`, it assures shortest paths that **NO** vertex with index greater than `k` have already been considered.
- When `k` is fixed, `dist[i][k]`+`dist[k][j]` follows a deterministic pattern (in human language, `dist[i][k]` walks through column `k` and `dist[k][j]` walks through row `k`, its like a **projection** over a **cross** region)
- **Accidental over-writing** should not be a concern because of how the code is written:
  - when `i` = `k`, `dist[k][j]` = min(`dist[k][j]` , `dist[k][k]+dist[k][j]`), `dist[k][j]` stays the same
  - when `j` = `k`, `dist[i][k]` = min(`dist[i][k]` , `dist[i][k]+dist[k][k]`), `dist[i][k]` stays the same

## How the code is written

```python title="/logicubic/floyd-warshall.py"
v = len(graph)
dist = [row[:] for row in graph]

for k in range(v):
    for i in range(v):
        for j in range(v):
            dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
print(dist)
```

```js title="/logicubic/floyd-warshall.pseudocode"
let V = {number of vertices in graph}
let dist = { V×V array of min distances initialized to ∞}
    for each vertex v:
        dist [v][v] <- 0
for each edge (u,v):
    dist [u][v] + weight(u,v)
for k from 1 to V:
    for i from 1 to V:
        for j from 1 to V:
            if dist [i][j] > dist [i][k] + dist [k][j]:
                dist [i][j] = dist [i][k] + dist [k][j]
            end if
```

<!-- $$
I = \int_0^{2\pi} \sin(x)\,dx
$$ -->
