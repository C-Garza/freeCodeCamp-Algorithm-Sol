/* My attempt at the Caesars Cipher ROT13. */
function rot13(str) { // LBH QVQ VG!
  let cipherString = "";
  let charNumber = [];
  for(let i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 78) {
      charNumber[i] = str.charCodeAt(i) + 13;
    }
    else if(str.charCodeAt(i) >= 78 && str.charCodeAt(i) < 91 ) {
      charNumber[i] = str.charCodeAt(i) - 13;
    }
    else {
      charNumber[i] = str.charCodeAt(i);
    }
  }
  str = charNumber.map(function(position) {
    return String.fromCharCode(position);
  });
  return str.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
