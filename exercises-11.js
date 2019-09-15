
    // Sepatu brand Stacattu seharga 1500000
    // Baju brand Zoro seharga 500000
    // Baju brand H&N seharga 250000
    // Sweater brand Uniklooh seharga 175000
    // Casing Handphone seharga 50000



function shoppingTime(memberId, money) {
    var tokoX = [
        {
            name: 'Sepatu Stacattu',
            price: 1500000,
        },
        {
            name: 'Baju Zoro',
            price: 500000,
        },
        {
            name: 'Baju H&N',
            price: 250000, 
        },
        {
            name: 'Sweater Uniklooh',
            price: 175000,
        },
        {
            name: 'Casing Handphone',
            price: 50000,
        }
    ]
    
        var change = money
        var beli = []
        if(!memberId) {
            return 'Mohon maaf, toko X hanya berlaku untuk member saja'
        }
        if(money < 50000) {
            return 'Mohon maaf, uang tidak cukup'
        }

        for(var i = 0; i < tokoX.length; i++) {
            if(money > tokoX[i].price) {
                change = change - tokoX[i].price
                beli.push(tokoX[i].name)
            }
            // console.log(listShop)
        }
        var object = {}
        object['memberId'] = memberId
        object['money'] = money
        object['listPurchased'] = beli
        object['change'] = change
        return object
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
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja