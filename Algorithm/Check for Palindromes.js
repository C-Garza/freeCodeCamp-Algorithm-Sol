function palindrome(str) {
  let reverseStr = [];
  str = str.replace(/[\W_]+/g, "").toLowerCase();
  reverseStr = str.split("").reverse().join("");
  if(reverseStr === str) {
    return true;
  }
  else {
    return false;
  }
  
}
palindrome("_eye");
