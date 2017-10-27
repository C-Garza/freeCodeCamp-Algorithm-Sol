/* Flatten a nested array. You must account for varying levels of nesting. *
function steamrollArray(arr) {
  let flattenedArray = [];
  function flatten(arr) {
    arr.forEach(function(element) {
      if(!Array.isArray(element)) {
        flattenedArray.push(element);
      }
      else {
        flatten(element);
      }
    });
  }
  flatten(arr);
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
