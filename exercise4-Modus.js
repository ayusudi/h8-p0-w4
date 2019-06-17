function cariModus(arr) {
  var avaibleNum = {};
  for (var j = 0; j < arr.length; j++) {
    avaibleNum[arr[j]] = 0;
  }

  //count how many a "avaibleNum"
  for (var i = 0; i < arr.length; i++) {
    avaibleNum[arr[i]]++;
  }

  //search modus from avaibleNum
  var modus;
  var max = 0;
  for (i = 0; i < arr.length; i++) {
    if (avaibleNum[arr[i]] > max) {
      max = avaibleNum[arr[i]];
      modus = arr[i];
    }
  }

  //for exception, if all values in arr are the same
  var count = 0;
  for (var k in avaibleNum) {
    count++;
  }

  if (max === 1 || count === 1) {
    modus = -1;
  }

  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 10, 5, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
