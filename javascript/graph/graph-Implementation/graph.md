# graph

### Feature Tasks or problem domain

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods: <br>

- **add vertex**

  - **Arguments:** value
  - **Returns:** The added vertex
  - **Description:** Add a vertex to the graph.

- **add edge**

  - **Arguments:** 2 vertices to be connected by the edge, weight (optional)
  - **Returns:** nothing
  - **Description:** Adds a new edge between two vertices in the graph. If specified, assign a weight to the edge. Both vertices should already be in the Graph.

- **get vertices**

  - **Arguments:** none
  - **Returns:** all of the vertices in the graph as a collection (set, list, or similar)
  - **Description:** Returns all of the vertices in the graph. Returns an empty collection if there are no vertices.

- **get neighbors**

  - **Arguments:** vertex
  - **Returns:** a collection of edges connected to the given vertex, including the weight of the connection
  - **Description:** Returns a collection of edges connected to the given vertex, including the weight of the connection. Returns an empty collection if there are no vertices.

- **size**
  - **Arguments:** none
  - **Returns:** the total number of vertices in the graph (0 if there are none)
  - **Description:** Returns the total number of vertices in the graph. Returns 0 if there are no vertices.<br>
    notes :<br>
    // Vertex - A vertex, also called a “node”, is a data object that can have zero or more adjacent vertices.<br>
    // Edge - An edge is a connection between two nodes.<br>
    // Neighbor - The neighbors of a node are its adjacent nodes, i.e., are connected via an edge.<br>

### algorithm

![alg](./alg.png)

### visualization

![alg](./vis.jpg)

### code

[javaScript file](./graph.js)

### tests

![tests](./tests.png)

### Efficiency

![eff](./eff.png)
