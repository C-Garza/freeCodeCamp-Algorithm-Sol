/* Sum all the numbers between the two numbers in the array. */
function sumAll(arr) {
  let sum = 0;
  let max = 0;
  let min = 0;
  max = arr.reduce(function(a,b) {
    return Math.max(a,b);
  });
  min = arr.reduce(function(a,b) {
    return Math.min(a,b);
  });
  sum = max + min;
  for(let i = min + 1; i < max; i++) {
    sum = sum + i;
  }
  return sum;
}

sumAll([1, 4]);
