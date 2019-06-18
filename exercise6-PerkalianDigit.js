function digitPerkalianMinimum(angka) {
    var hasilBagi,
      faktorAngka = [],
      arrString = "",
      result = 0;
  
    for (var i = 1; i <= angka; i++) {
      hasilBagi = angka / i;
      arrString = i + "*" + hasilBagi;
      result = arrString.length;
  
      if (hasilBagi % 1 === 0) {
        faktorAngka.push(arrString);
      }
    }
    for (var j = 0; j < faktorAngka.length; j++)
      if (result > faktorAngka[j].length) {
        result = faktorAngka[j].length;
      }
  
    return result - 1;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  