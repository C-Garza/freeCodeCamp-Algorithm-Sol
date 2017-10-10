function findLongestWord(str) {
  let myArray = [];
  myArray = str.split(" ");
  myArray.sort(function(a,b) {
    return b.length - a.length;
  });
  return myArray[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
