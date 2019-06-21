function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  var result = [];

  if (arrPenumpang.length > 0) {
    for (let i = 0; i < arrPenumpang.length; i++) {
      for (let j = 0; j < arrPenumpang[i].length; j++) {
        for (let k = 0; k < rute.length; k++) {
          if (arrPenumpang[i][1] === rute[k]) {
           var start = k;
          }
          if (arrPenumpang[i][2] === rute[k]) {
            var end = k;
          }
        }
        var data = {};
        data.penumpang = arrPenumpang[i][0];
        data.naikDari = arrPenumpang[i][1];
        data.tujuan = arrPenumpang[i][2];
        data.bayar = Math.abs(start - end) * 2000;
      }
      result.push(data);
    }
    return result;
  } else {
    return arrPenumpang;
  }
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
