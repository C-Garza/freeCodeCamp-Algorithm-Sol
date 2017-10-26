/* Translate the provided string to pig latin. */
function translatePigLatin(str) {
  let regexpVowel = /[aeiou]/i;
  let index = str.search(regexpVowel);
  let consonantCut = "";
  let strCut = "";
  if(index === 0) {
    return str + "way";
  }
  consonantCut = str.substr(0, index) + "ay";
  strCut = str.substr(index);
  return strCut + consonantCut;
}

translatePigLatin("consonant");
