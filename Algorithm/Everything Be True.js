/* Check if the predicate (second argument) is truthy on all elements of a collection (first argument). */
function truthCheck(collection, pre) {
  let hasPre = true;
  for(let i = 0; i < collection.length; i++) {
    if(!collection[i].hasOwnProperty(pre) || !Boolean(collection[i][pre])) {
      hasPre = false;
    }
  }
  return hasPre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "age");
