/* Truncate a string if it is greater than num and add '...'. */
function truncateString(str, num) {
  if(num <= 3) {
    return str.slice(0, num).concat("...");
  }
  else if(str.length > num) {
    return str.slice(0, num - 3).concat("...");
  }
  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
