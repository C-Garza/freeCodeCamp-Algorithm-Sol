/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.*/
function mutation(arr) {
  let stringOne = arr[0].toLowerCase();
  let stringTwo = arr[1].toLowerCase();
  for(let i = 0; i < stringOne.length; i++) {
    if(stringOne.indexOf(stringTwo.charAt(i)) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
