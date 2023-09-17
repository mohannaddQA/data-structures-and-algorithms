# hash map left-join

### Feature Tasks or problem domain

Implement a simplified LEFT JOIN for 2 Hashmaps.

- read this to understand the idea behind left join , right join , full join of tables [left join](https://www.tutorialspoint.com/sql/sql-left-joins.htm)
- Write a function that LEFT JOINs two hashmaps into a single data structure.

  - Write a function called left join
  - Arguments: two hash maps
  - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
  - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
  - Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.

  NOTES:

  - Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
    LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
    If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

### cases

![testcases](./cases.png)

### algorithm

![alg](./alg.png)

### code

[javaScript file](./hashmap-left-join.js)

### tests

![tests](./tests.png)

### Efficiency

![eff](./eff.png)
