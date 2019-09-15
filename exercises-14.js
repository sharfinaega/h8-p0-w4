function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    var result = []

    for(var i = 0; i < arrPenumpang.length; i++) {
        var grup = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        }
        var naik = 0
        var turun = 0
        for(var j = 0; j < rute.length; j++) {
            if(arrPenumpang[i][1] === rute[j]) {
                naik = j
            }
            if(rute[j] === arrPenumpang[i][2]) {
                turun = j
            }
            grup.bayar = (turun - naik)*2000
        }
        result.push(grup)
        // console.log(grup) 
    }
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]