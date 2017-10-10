/* Using build-in functions to reverse a string. */
function reverseString(str) {
  var myArray = [];
  myArray = str.split("");
  myArray.reverse();
  str = myArray.join("");
  return str;
}

reverseString("hello");
