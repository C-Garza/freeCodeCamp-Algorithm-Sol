/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. */
function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  return newArr.filter(function(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
