function cariModus(arr) {
    var temp = []
    var result = []

    for(var i = 0; i < arr.length; i++) {// 
        for(var j = 0; j <= temp.length; j++) {
            if(temp[j] === undefined) {
                temp.push(arr[i])
                break;
            }
            else if(arr[i] === temp[j]) {
                break;
            }
        }
    }
    // console.log(temp);
    var count = 0
    var result = 0
    var modus = 0;
    for(var i = 0; i < temp.length; i++) {
        // console.log(temp[i])
        for(var j = 0; j < arr.length; j++) {
            if(temp[i] === arr[j]) {
                count++;
            }
        }
        // console.log(count)
        if(count > result) {
            result = count
            modus = temp[i];
        }
        count = 0
    }
    if(result === 1 || temp.length === 1) {
        return -1
    }
     return modus;
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1



