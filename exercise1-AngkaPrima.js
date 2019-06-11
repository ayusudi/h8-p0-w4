function angkaPrima(angka) {
  var akarAngka = Math.sqrt(angka);
  var cekPangkat = Math.trunc(akarAngka);
  var result = true;
  if (akarAngka === cekPangkat) {
    result = false;
  } else if (angka % 2 === 0 && angka !== 2) {
    result = false;
  } else {
    result = true;
  }

  return result;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
