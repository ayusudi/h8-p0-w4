function changeMe(arr) {
  var num = 0;
  var fullName = "";
  if (arr.length > 0) {
    for (var i = 0; i < arr.length; i++) {
      num++;
      var data = {};
      data.firstName = arr[i][0];
      data.lastName = arr[i][1];
      data.gender = arr[i][2];

      if (arr[i][3] === undefined) {
        data.age = "Invalid Birth Year";
      } else {
        data.age = 2019 - arr[i][3];
      }
      fullName = arr[i][0] + " " + arr[i][1];
      console.log(num + "." + fullName);
      console.log(data);
    }
  } else {
    console.log('"');
  }
}
// TEST CASES
changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
