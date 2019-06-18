function checkAB(num) {
  var result = false;
  var strArray = [];
  for (var i = 0; i < num.length; i++) {
    strArray.push(num[i]);
  }
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i] === "a" && strArray[i + 4] === "b") {
      result = true;
    } else if (strArray[i] === "b" && strArray[i + 4] === "a") {
      result = true;
    }
  }
  return result;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
