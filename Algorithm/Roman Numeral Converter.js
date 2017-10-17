/* Converts a number into a roman numeral. */
function convertToRoman(num) {
  if(num === 0) {
    return "";
  }
  let myMap = new Map();
  myMap.set(1000,"M");
  myMap.set(900,"CM");
  myMap.set(500,"D");
  myMap.set(400,"CD");
  myMap.set(100,"C");
  myMap.set(90,"XC");
  myMap.set(50,"L");
  myMap.set(40,"XL");
  myMap.set(10,"X");
  myMap.set(9,"IX");
  myMap.set(5,"V");
  myMap.set(4,"IV");
  myMap.set(1,"I");
  for(let [key,value] of myMap.entries()) {
    if(num >= key) {
      return value + convertToRoman(num - key);
    }
  }
}

convertToRoman(3999);
