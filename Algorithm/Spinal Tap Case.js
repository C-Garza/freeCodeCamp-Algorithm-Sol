/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */
function spinalCase(str) {
  let splitAtCapRegexp = /(?=[A-Z])/g;
  let regexp = /[\s_]+/g;
  str = str.split(splitAtCapRegexp).join(" ").toLowerCase();
  return str.replace(regexp, "-");
}

spinalCase('This Is Spinal Tap');
