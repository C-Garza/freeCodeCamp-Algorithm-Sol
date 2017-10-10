function largestOfFour(arr) {
  let myArray = [0,0,0,0];
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > myArray[i]) {
        myArray[i] = arr[i][j];
      }
    }
  }
  return myArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
