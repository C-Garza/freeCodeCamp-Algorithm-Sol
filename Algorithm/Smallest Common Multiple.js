/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. Works with negative input as well. */

function smallestCommons(arr) {
  arr[0] = Math.abs(arr[0]);
  arr[1] = Math.abs(arr[1]);
  arr.sort((a,b) =>  a - b);
  minValue = arr[0];
  maxValue = arr[1];
  let isLCM = maxValue;
  for(let i = maxValue; i >= minValue; i--) {
    if(isLCM % i !== 0) {
      isLCM += maxValue;
      i = maxValue;
    }
  }
  return isLCM;
}

smallestCommons([1,5]);
