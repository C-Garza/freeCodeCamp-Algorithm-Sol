/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. */
//Very messy code.
function addTogether() {
  let args = arguments.length;
  if(args === 1) {
    let firstArgument = arguments[0];
    if(typeof arguments[0] !== "number") {
      return undefined;
    }
    return function (number) {
      if(typeof number !== "number") {
        return undefined;
      }
      return firstArgument + number;
    };
  }
  if(args === 2) {
    if(typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
       return undefined;
    }
    return arguments[0] + arguments[1];
       
  }
  else {
    return undefined;
  }
}

addTogether(2);
