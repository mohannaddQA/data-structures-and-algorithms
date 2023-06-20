# array-binary-search

we are given a sorted array , we must implements the idea of binary search , to find a certain element in the array

## Whiteboard Process

![whiteboard](./array-binary-search.md)

## Approach & Efficiency

We implemented the binary search algorithm, which works by repeatedly dividing the search range in half to efficiently find the target element in a sorted array or determine its absence. that gives us a o(logn) which is better than using regular linear search

## Solution

```
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
```
