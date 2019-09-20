function tukarBesarKecil(kalimat) {
    var kata = [];

    for(var i = 0; i < kalimat.length; i++) {
        for(var j = 0; j < kalimat[i].length; j++) {
            // console.log(kalimat[i])
            if(kalimat[i] !== kalimat[j]) {
                kata.push(kalimat[i][j])
            }
            else {
                kata.push(kalimat[i])
            }
        }
    }
    var kata2 = []
    for(var i = 0; i < kata.length; i++) {
        if(kata[i] === kata[i].toUpperCase()){
            kata2.push(kata[i].toLowerCase());
        }
        else {
            kata2.push(kata[i].toUpperCase());
        }
        // console.log(kata2)
   }
   var result = '';
   for(var i = 0; i < kata2.length; i++) {
        result = result + kata2[i];
   }
   return result;
    // console.log(kata)

  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"