  var item ={};
    item['Sepatu brand Stacattu']= 1500000;
    item['Baju brand Zoro']= 500000,
    item['Baju brand H&N']= 250000,
    item['Sweater brand Uniklooh']= 175000,
    item['Casing Handphone']= 50000

function shoppingTime(memberId, money) {
  var afterShopping = money
  var purchased = []
  if (memberId === undefined || memberId === "") {
    var data = "Mohon maaf, toko X hanya berlaku untuk member saja"
  }
  else if (money<50000){
    data =  "Mohon maaf, uang tidak cukup";
  }
  else {
    data = {};
    data["memberId"] = memberId;
    data["money"] = money;
  }

  for (key in item){
   if (afterShopping>=item[key]){
    purchased.push(key)
     afterShopping -= item[key]
   }
  }
  data["ListPurchased"] = purchased;
  data["ChangeMoney"] = afterShopping;
  console.log('==========================\n')

  return data
}
  

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
