const insertShiftArray = (arr, x) => {
  //lets findout the middle index of the array
  const middleIndex =
    arr.length % 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2);

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === middleIndex) {
      newArr.push(x);
    }
    newArr.push(arr[i]);
  }

  return console.log(newArr, middleIndex);
};
