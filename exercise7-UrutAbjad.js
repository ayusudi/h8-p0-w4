function urutkanAbjad(str) {
  var strArray = [];
  var result = "";
  for (let i = 0; i < str.length; i++) {
    strArray.push(str[i]);
  }
  for (let i = 0; i < strArray.length; i++) {
    for (let j = i + 1; j < strArray.length; j++) {
      if (strArray[i] > strArray[j]) {
        var temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
      }
    }
    result = result + strArray[i];
  }
  return result;
}

// // TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
