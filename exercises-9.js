function checkAB(num) {
    var temp = '';
    
    for(var x = 0; x < num.length; x++) {
        if(num[x] === 'a') {                
            if(num[x+4] === 'b') {
                return true;
            }
        } 
        if(num[x] === 'b') {
            if(num[x+4] === 'a') {
                return true;
            }
        }
    }   
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false