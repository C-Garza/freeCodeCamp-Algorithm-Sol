/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array. */
function pairElement(str) {
  let arr = str.split("");
  let pairArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === "A") {
      pairArray.push(["A","T"]);
    }
    else if(arr[i] === "T") {
      pairArray.push(["T", "A"]);
    }
    else if(arr[i] === "C") {
      pairArray.push(["C", "G"]);
    }
    else if(arr[i] === "G") {
      pairArray.push(["G", "C"]);
    }
  }
  return pairArray;
}

pairElement("GCG");
