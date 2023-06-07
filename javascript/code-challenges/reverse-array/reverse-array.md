# reverse-array

we are given an array , we must reverse it without built in functions

## Whiteboard Process

![whiteboard](./Screenshot%20.png)

## Approach & Efficiency

accessing the last index value , and adding it to a new array , then we decrease the last index number by one so we can access the element in the index before it and add it again to the new array using a for loop

## Solution

[javaScript file](./reverse-array.js)
`"use strict";

function reverseArray(arr) {
let newArr = [];
for (let i = 0; i < arr.length; i++) {
newArr[i] = arr[arr.length - i - 1];
}
return newArr;
}
`
