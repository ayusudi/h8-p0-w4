function ubahHuruf(kata) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz _";
  var translate = "";
  var arr = [];
  for (let i = 0; i < kata.length; i++) {
    arr.push([]);
  }
  for (let i = 0; i < kata.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (kata[i] == alphabet[j]) {
        arr[i].push(alphabet[j + 1]);
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    translate = translate + arr[i];
  }
  return translate;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
//console.log(ubahHuruf("namaku adalah"));// obnblv bebmbi
