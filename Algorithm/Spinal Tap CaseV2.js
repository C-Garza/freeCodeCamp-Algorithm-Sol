/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. Now works with digits as well. Space strings at 
upper case letters. */
function spinalCase(str) {
  let splitAtCapRegexp = /(?=[A-Z])/g;
  let splitAtNumRegexp = /(?=[0-9])/g;
  let regexp = /[\s_]+/g;
  str = str.split(splitAtCapRegexp).join(" ").toLowerCase();
  str = str.split(splitAtNumRegexp).join(" ");
  return str.replace(regexp, "-");
}

spinalCase('This Is Spinal Tap Version2');
