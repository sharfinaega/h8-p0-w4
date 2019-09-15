function fpb(angka1, angka2) {
    
    if(angka1 < angka2) {
        angkaKecil = angka1;
    }
    else{
        angkaKecil = angka2;
    }
    // console.log(angka1%12 === 0)
    // angkaKecil = angka1 < angka2 ? angka1 : angka2
    for(var i = angkaKecil; i >= 0; i--) {
        if(angka1 % i === 0 && angka2 % i === 0) {
            return i;
        }
    }

  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1