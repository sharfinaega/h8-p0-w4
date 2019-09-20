function digitPerkalianMinimum(angka) {
    var hasilBagi = ''
    var digit = -1
    for(var i = 0; i <= angka; i++) {
        if(angka % i === 0) {
                hasilBagi = String(i) + String(angka/i)
            if(hasilBagi.length < digit || digit === -1) {
                digit = hasilBagi.length 
            }
        }     
    }
    return digit
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2