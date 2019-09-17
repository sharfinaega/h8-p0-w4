function graduates (students) {
    var object = {}
    var arr = []

    for(var i = 0; i < students.length; i++) {
        var nilai = 75
            if(students[i].score > nilai) {
                if(!object[students[i].class]) {
                        var objKelas = {}
                        objKelas['name'] = students[i].name
                        objKelas['score'] = students[i].score
                        object[students[i].class] = [objKelas]
                    }
                    else {
                        var objKelas = {}
                        objKelas['name'] = students[i].name
                        objKelas['score'] = students[i].score
                        object[students[i].class].push(objKelas)
                        // object[students[i].class].score = students[i].score
                        // object[students[i].class].name = students[i].name
                    }
            }
    }
    // console.log(object)
    return object;
}

  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
//   // {
//   //   foxes: [
//   //     { name: 'Alexander', score: 100 },
//   //     { name: 'Vladimir', score: 92 }
//   //   ],
//   //   wolves: [
//   //     { name: 'Alisa', score: 76 },
//   //   ],
//   //   tigers: [
//   //     { name: 'Viktor', score: 80 }
//   //   ]
//   // }
  
  
  console.log(graduates([])); //{}

//   {
//     <class>: [
//       { name: <name>, score: <score> },
//       ...
//     ],
//     <class>: [
//       { name: <name>, score: <score> },
//       ...
//     ],
//     <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
//   }