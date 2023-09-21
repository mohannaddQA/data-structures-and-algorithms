const { Graph, Vertex } = require("./graph-breadth");

describe("Graph", () => {
  it("should perform a breadth-first traversal correctly", () => {
    const graph = new Graph();
    const vertexA = graph.addVertex("A");
    const vertexB = graph.addVertex("B");
    const vertexC = graph.addVertex("C");
    const vertexD = graph.addVertex("D");
    graph.addEdge(vertexA, vertexB);
    graph.addEdge(vertexA, vertexC);
    graph.addEdge(vertexB, vertexD);
    const result = graph.breadthFirst(vertexA);
    expect(result).toEqual(["A", "B", "C", "D"]);
  });

  it("should handle disconnected vertices", () => {
    const graph = new Graph();
    const vertexA = graph.addVertex("A");
    const vertexB = graph.addVertex("B");
    const vertexC = graph.addVertex("C");
    const result = graph.breadthFirst(vertexA);
    expect(result).toEqual(["A"]);
  });

  it("should handle a single vertex graph", () => {
    const graph = new Graph();
    const vertexA = graph.addVertex("A");
    const result = graph.breadthFirst(vertexA);
    expect(result).toEqual(["A"]);
  });

  it("should handle a graph with no vertices", () => {
    const graph = new Graph();

    expect(() => graph.breadthFirst("NonExistentNode")).toThrow(
      "Start node does not exist in the graph."
    );
  });
  it("should throw an error for an invalid start node", () => {
    const graph = new Graph();
    const vertexA = new Vertex("A");
    const vertexB = new Vertex("B");
    graph.addVertex(vertexA);
    const invalidStartNode = new Vertex("C");
    expect(() => graph.breadthFirst(invalidStartNode)).toThrow(
      "Start node does not exist in the graph."
    );
  });
});
