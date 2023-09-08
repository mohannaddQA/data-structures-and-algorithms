const { Hashtable } = require("./hashTable"); // Replace with your actual file path

describe("Hashtable", () => {
  let hashtable;

  beforeEach(() => {
    hashtable = new Hashtable(100); // Choose an appropriate size
  });

  it("should set and get values", () => {
    hashtable.set("key1", "mohannad");
    hashtable.set("key2", "ahmed");

    expect(hashtable.get("key1")).toBe("mohannad");
    expect(hashtable.get("key2")).toBe("ahmed");
  });

  it("should return null for a non-existent key", () => {
    expect(hashtable.get("HelloWorld")).toBeNull();
  });

  it("should return a list of unique keys", () => {
    hashtable.set("key1", "mohannad");
    hashtable.set("key2", "ahmed");
    hashtable.set("key1", "esam");

    const keys = hashtable.keys();
    expect(keys).toContain("key1");
    expect(keys).toContain("key2");
    expect(keys).toHaveLength(2); // Only unique keys should be in the list
  });

  it("should handle collisions within the hashtable", () => {
    hashtable.set("key1", "mohannad");
    hashtable.set("k1e1y", "ahmed");

    expect(hashtable.get("key1")).toBe("mohannad");
    expect(hashtable.get("k1e1y")).toBe("ahmed");
  });
});
