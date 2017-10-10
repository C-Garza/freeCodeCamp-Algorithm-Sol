/* Repeats str num amount of times. */
function repeatStringNumTimes(str, num) {
  let string = "";
  if(num < 0) {
    return "";
  }
  else {
    for(let i = 0; i < num; i++) {
      string = string.concat(str);
    }
    return string;
  }
}

repeatStringNumTimes("abc", 3);
