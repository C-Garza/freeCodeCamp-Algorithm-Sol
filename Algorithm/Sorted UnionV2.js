/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. 
Wanted to try out this Set object. */
function uniteUnique(arr) {
  const args = Array.from(arguments);
  arr = args.reduce((a,b) => a.concat(b));
  return Array.from(new Set(arr));
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
