/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num. Solved with for and while loop. */
function sumFibs(num) {
  let fibSum = 1;
  let first = 0;
  let second = 1;
  let fibSeqSum = 0;
  if(num === 0) {
    return 0;
  }
  for(second; second <= num; second) {
   // console.log(fibSeqSum);
    if((fibSeqSum % 2) !== 0) {
      fibSum += fibSeqSum;
    }
    fibSeqSum = first + second;
    first = second;
    second = fibSeqSum;
  }
  return fibSum;
  
function sumFibs(num) {
  let fibSum = 1;
  let first = 0;
  let second = 1;
  let fibSeqSum = 0;
  if(num === 0) {
    return 0;
  }
  while(second <= num) {
    if((fibSeqSum % 2) !== 0) {
      fibSum += fibSeqSum;
    }
    fibSeqSum = first + second;
    first = second;
    second = fibSeqSum;
  }
  return fibSum;
}

sumFibs(4);
