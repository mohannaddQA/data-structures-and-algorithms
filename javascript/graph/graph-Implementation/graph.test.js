const { Graph } = require("./graph");

describe("Testing Graph data structure (Directed graph represented as an adjacency list)...", () => {
  let testGraph = new Graph();
  let vertexA;
  let vertexB;
  let vertexC;

  test("Should add a vertex successfully to the graph", () => {
    vertexA = testGraph.addVertex("A");
    expect(vertexA).toBeTruthy();
  });

  test("Should add an edge successfully to the graph", () => {
    vertexC = testGraph.addVertex("C");
    vertexB = testGraph.addVertex("B");
    testGraph.addEdge(vertexB, vertexC, 3);
    expect(testGraph.getNeighbors(vertexB)).toBeTruthy();
  });

  test("Should properly retrieve a collection of all vertices from the graph", () => {
    let emptyGraph = new Graph();
    expect(testGraph.getVertices()).toBeTruthy();
    expect(emptyGraph.getVertices()).toStrictEqual([]);
  });

  test("Should retrieve appropriate neighbors from the graph", () => {
    expect(testGraph.getNeighbors(vertexB)).toBeTruthy();
    expect(testGraph.getNeighbors(vertexC)).toStrictEqual([]);
    expect(testGraph.getNeighbors(vertexA)).toStrictEqual([]);
  });

  test("Should return neighbors with the weight between nodes included", () => {
    let bNeighbors = testGraph.getNeighbors(vertexB);
    expect(bNeighbors[0].weight).toBe(3);
  });

  test("Should return the proper size, representing the number of vertices in a graph", () => {
    expect(testGraph.size()).toBe(3);
  });

  test("Should properly handle a graph with only one vertex and no edges", () => {
    // There cannot be an edge if there is only one vertex
    let smallGraph = new Graph();
    let vertexZ = smallGraph.addVertex("Z");
    console.error = jest.fn();
    smallGraph.addEdge(vertexZ);
    expect(console.error).toHaveBeenCalled();
  });
});
