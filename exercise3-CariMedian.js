 function cariMedian(arr) {
  if (arr.length % 2 === 0){
    var indeksGenap = arr.length/2
    var median = (arr[indeksGenap]+arr[indeksGenap-1])/2
  }
  else {
    var indeksGanjil = Math.trunc(arr.length/2);
    median = arr[indeksGanjil]
  }
  return median
}

//TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5