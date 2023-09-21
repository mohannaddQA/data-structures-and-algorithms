const { Graph, Vertex, Edge } = require("./graph-business");

describe("Graph", () => {
  it("should calculate the cost for a successful trip", () => {
    const graph = new Graph();
    const metroville = graph.addVertex("Metroville");
    const pandora = graph.addVertex("Pandora");

    graph.addEdge(metroville, pandora, 82);

    const cityNames = ["Metroville", "Pandora"];
    const result = graph.businessTrip(cityNames);

    expect(result).toEqual(82);
  });

  it("should calculate the cost for another successful trip", () => {
    const graph = new Graph();
    const arendelle = graph.addVertex("Arendelle");
    const newMonstropolis = graph.addVertex("New Monstropolis");
    const naboo = graph.addVertex("Naboo");

    graph.addEdge(arendelle, newMonstropolis, 50);
    graph.addEdge(newMonstropolis, naboo, 65);

    const cityNames = ["Arendelle", "New Monstropolis", "Naboo"];
    const result = graph.businessTrip(cityNames);

    expect(result).toEqual(115);
  });

  it("should return null for a trip with no direct flights", () => {
    const graph = new Graph();
    const pandora = graph.addVertex("Pandora");
    const naboo = graph.addVertex("Naboo");

    graph.addEdge(pandora, naboo, 100);

    const cityNames = ["Naboo", "Pandora"];
    const result = graph.businessTrip(cityNames);

    expect(result).toBeNull();
  });

  it("should return null for an invalid trip", () => {
    const graph = new Graph();
    const narnia = graph.addVertex("Narnia");
    const arendelle = graph.addVertex("Arendelle");
    const naboo = graph.addVertex("Naboo");

    graph.addEdge(arendelle, naboo, 75);

    const cityNames = ["Narnia", "Arendelle", "Naboo"];
    const result = graph.businessTrip(cityNames);

    expect(result).toBeNull();
  });
});
