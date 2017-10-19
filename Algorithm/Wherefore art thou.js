/*  Looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). */
function whatIsInAName(collection, source) {
  // What's in a name?
  var sourceKeyValue = Object.keys(source);
  console.log(Object.entries(source));
  return collection.filter((collectionKey) => {
    return sourceKeyValue.every((sourceKey) => {
      return collectionKey[sourceKey] === source[sourceKey];
    });
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
