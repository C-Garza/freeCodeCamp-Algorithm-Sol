/* Splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */
function chunkArrayInGroups(arr, size) {
  let myArray = [];
  for(let i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i + size));
  }
  return myArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
