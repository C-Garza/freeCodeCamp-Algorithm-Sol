/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. */
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a,b) {
    return a - b;
  });
  
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
