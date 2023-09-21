"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    let newVertex = new Vertex(value);
    this.adjacencyList.set(newVertex, []);
    return newVertex;
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (
      !this.adjacencyList.has(startVertex) ||
      !this.adjacencyList.has(endVertex)
    ) {
      console.error(
        "StartVertex or endVertex argument is not in adjacencyList"
      );
      return;
    }

    const newEdge = new Edge(endVertex, weight);
    const startVertexEdges = this.adjacencyList.get(startVertex);
    startVertexEdges.push(newEdge);
  }

  getVertices() {
    return [...this.adjacencyList.keys()];
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthFirst(startNode) {
    if (!this.adjacencyList.has(startNode)) {
      throw new Error("Start node does not exist in the graph.");
    }

    const visited = new Set();
    const queue = [];
    const result = [];

    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      result.push(currentVertex.value);

      for (const neighborEdge of this.getNeighbors(currentVertex)) {
        const neighborVertex = neighborEdge.vertex;

        if (!visited.has(neighborVertex)) {
          visited.add(neighborVertex);
          queue.push(neighborVertex);
        }
      }
    }

    return result;
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph,
};
