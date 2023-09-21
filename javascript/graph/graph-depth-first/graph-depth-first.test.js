const { Vertex, Edge, Graph } = require("./graph-depth-first");

describe("Graph depthFirst method", () => {
  it("should perform a depth-first pre-order traversal correctly", () => {
    const graph = new Graph();

    const A = graph.addVertex("A");
    const B = graph.addVertex("B");
    const C = graph.addVertex("C");
    const D = graph.addVertex("D");
    const E = graph.addVertex("E");
    const F = graph.addVertex("F");
    const G = graph.addVertex("G");

    graph.addEdge(A, B);
    graph.addEdge(A, C);
    graph.addEdge(A, G);
    graph.addEdge(B, D);
    graph.addEdge(C, E);
    graph.addEdge(D, F);

    const result = graph.depthFirst(A);

    expect(result).toEqual(["A", "B", "D", "F", "C", "E", "G"]);
  });

  it("should handle a graph with a single vertex", () => {
    const graph = new Graph();
    const A = graph.addVertex("A");

    const result = graph.depthFirst(A);

    expect(result).toEqual(["A"]);
  });

  it("should handle an empty graph", () => {
    const graph = new Graph();

    const result = graph.depthFirst(new Vertex("NonExistent"));

    expect(result).toEqual([]);
  });
});
