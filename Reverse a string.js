function reverseString(str) {
  var myArray = [];
  myArray = str.split("");
  myArray.reverse();
  str = myArray.join("");
  return str;
}

reverseString("hello");
