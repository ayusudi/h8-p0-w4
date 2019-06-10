function angkaPrima(angka) {
  var result = true;
  if (angka === 2) {
    result = true;
  } else if (angka === 3) {
    result = true;
  } else if (angka === 5) {
    result = true;
  } else if (
    angka % 2 !== 0 &&
    angka % 3 !== 0 &&
    angka % 5 !== 0 &&
    angka / angka == 1
  ) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
// console.log(angkaPrima(5)); // true
// console.log(angkaPrima(2)); // true
