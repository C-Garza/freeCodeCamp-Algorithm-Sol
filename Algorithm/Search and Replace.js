/* Perform a search and replace on the sentence using the arguments provided and return the new sentence. */
function myReplace(str, before, after) {
  if(before.charCodeAt(0) <= 90 && before.charCodeAt(0) >= 65) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  else if(before.charCodeAt(0) <= 122 && before.charCodeAt(0) >= 97) {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
    return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped");
