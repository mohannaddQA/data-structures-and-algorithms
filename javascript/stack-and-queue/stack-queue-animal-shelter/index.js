const { Queue, Node } = require("./Queue");

class AnimalShelter {
  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();
  }

  enqueue(animal) {
    if (animal.species === "cat" && typeof animal.name === "string") {
      this.cat.enqueue(animal);
      return animal;
    } else if (animal.species === "dog" && typeof animal.name === "string") {
      this.dog.enqueue(animal);

      return animal;
    } else return "invalid input";
  }

  dequeue(pref) {
    if (pref === "cat") {
      return this.cat.dequeue();
    } else if (pref === "dog") {
      return this.dog.dequeue();
    } else {
      return null;
    }
  }
}
module.exports = AnimalShelter;
