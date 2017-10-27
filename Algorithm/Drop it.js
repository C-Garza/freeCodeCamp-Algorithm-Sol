/* Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true. */
function dropElements(arr, func) {
  if(arr.length <= 0) {
    return arr;
  }
  while(!func(arr[0])) {
        arr.shift();
        }
  return arr;
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2; });
