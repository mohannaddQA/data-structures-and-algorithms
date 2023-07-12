"use strict";
const AnimalShelter = require("./index");
describe("AnimalShelter", () => {
  let animalShelter;

  beforeEach(() => {
    animalShelter = new AnimalShelter();
  });

  test("enqueue adds cat to cat queue", () => {
    const cat = { species: "cat", name: "Fluffy" };
    const result = animalShelter.enqueue(cat);
    expect(result).toEqual(cat);
    expect(animalShelter.cat.peek()).toEqual(cat);
  });

  test("enqueue adds dog to dog queue", () => {
    const dog = { species: "dog", name: "Buddy" };
    const result = animalShelter.enqueue(dog);
    expect(result).toEqual(dog);
    expect(animalShelter.dog.peek()).toEqual(dog);
  });

  test('enqueue returns "invalid input" for invalid animal', () => {
    const invalidAnimal = { species: "rabbit", name: "Hoppy" };
    const result = animalShelter.enqueue(invalidAnimal);
    expect(result).toBe("invalid input");
    expect(animalShelter.cat.isEmpty()).toBe(true);
    expect(animalShelter.dog.isEmpty()).toBe(true);
  });

  test("dequeue returns cat from cat queue", () => {
    const cat = { species: "cat", name: "Fluffy" };
    animalShelter.cat.enqueue(cat);
    const result = animalShelter.dequeue("cat");
    expect(result).toEqual(cat);
    expect(animalShelter.cat.isEmpty()).toBe(true);
  });

  test("dequeue returns dog from dog queue", () => {
    const dog = { species: "dog", name: "Buddy" };
    animalShelter.dog.enqueue(dog);
    const result = animalShelter.dequeue("dog");
    expect(result).toEqual(dog);
    expect(animalShelter.dog.isEmpty()).toBe(true);
  });

  test("dequeue returns null for invalid preference", () => {
    const result = animalShelter.dequeue("rabbit");
    expect(result).toBeNull();
  });
});
