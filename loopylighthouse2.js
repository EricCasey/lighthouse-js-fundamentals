var range = [ 15 , 90 ]
var multiples = [ 2 , 5 ]
var words = [ "word1", "word2" ]


function loopyLighthouse(range, multiple, words) {


  for (var tracker = range[0]; tracker <= range[1]; tracker = tracker + 1){

    if (tracker % multiples[0] === 0 && tracker % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else {
      if (tracker % multiples[0] === 0) { console.log(words[0]); }
      else if (tracker % multiples[1] === 0) { console.log(words[1]); }
      else { console.log(tracker); }
    }
  }

}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);