/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */
// I thought a map would be better than a switch statement because there are more HTML entities than these.
function convertHTML(str) {
  let regexp = /[&<>"']/gi;
  let charMap = new Map();
  charMap.set("&", "&amp;");
  charMap.set("<", "&lt;");
  charMap.set(">", "&gt;");
  charMap.set("\"", "&quot;");
  charMap.set("\'", "&apos;");
  return str.replace(regexp, function(matched) {
                    return charMap.get(matched);
                    });
}

convertHTML("Dolce & Gabbana");
