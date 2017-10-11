/* Remove all elements from the initial array that are of the same value as the arguments. */
function destroyer(arr) {
  let arg = Array.from(arguments);
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arg.length; j++) {
      if(arr[i] === arg[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer([3,5,1,2,2], 2, 3,5);
