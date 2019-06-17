// angka prima adalah bilangan asli (positif) yang lebih dari 1,
// dan hanya memiliki faktor satu dan angka itu sendiri
function angkaPrima(angka) {
  var pembagi = [];
  var check = 0;
  if (angka == 2) {
    return true;
  } else if (angka < 2) {
    return false;
  } else {
    for (let i = 2; i < angka; i++) {
      pembagi.push(i);
    }
    for (let i = 0; i < pembagi.length; i++) {
      if (angka % pembagi[i] == 0) {
        check += 1;
      }
    }
  }
  if (check == 0) {
    return true;
  }
  if (check > 0) {
    return false;
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
