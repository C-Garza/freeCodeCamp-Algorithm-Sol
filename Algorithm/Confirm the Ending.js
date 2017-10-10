/* Checking whether the string ends with the target letter. First solution is with endsWith() method.
function confirmEnding(str, target) {
  return str.endsWith(target);
}

confirmEnding("Bastian", "n");
*/

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

confirmEnding("Bastian", "n");
