/* Sum all the prime numbers up to and including the provided number. This is my initial solution. */
function sumPrimes(num) {
  if(num === 2) {
    return 2;
  }
  else if(num < 2) {
    return 0;
  }
  else {
    let sum = 2;
    let isPrime = true;
    for(let i = 3; i <= num; i++) {
      for(let j = i - 1; j >= 1; j--) {
        if(i % j === 0 && j !== 1) {
          isPrime = false;
          break;
        }
        else if(j === 1) {
          isPrime = true;
        }
      }
      if(isPrime) {
        sum += i;
      }
    }
    return sum;
  }
}

sumPrimes(10);
