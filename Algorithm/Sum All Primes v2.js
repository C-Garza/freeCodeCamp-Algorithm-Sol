/* Sum all the prime numbers up to and including the provided number. My second attempt using Sieve of Eratosthenes. It could have been refined more using square roots but perhaps another time. */
function sumPrimes(num) {
  if(num === 2) {
    return 2;
  }
  else if(num < 2) {
    return 0;
  }
  else {
    let array = [];
    let isPrime = [];
    for(let i = 2; i <= num; i++) {
      if(isPrime[i] !== true) {
        array.push(i);
      }
      for(let j = i + i; j <= num; j += i) {
        isPrime[j] = true;
      }
    }
    return array.reduce((a,b) => a + b);
  }
}

sumPrimes(15);
