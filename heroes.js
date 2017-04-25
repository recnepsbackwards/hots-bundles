var array = [['Alarak', 'Chromie', 'Falstad', 'Greymane', 'Gul-dan', 'Kael-thas', 'Kerrigan', 'Li-Ming', 'Lunara', 'Nazeebo', 'Nova', 'Raynor', 'Sylvanas', 'The Butcher', 'Tracer', 'Tychus', 'Valeera', 'Valla', 'Zeratul', 'Zul-jin'],

['Abathur', 'Arthas', 'Azmodan', 'Brightwing', 'Diablo', 'E.T.C.', 'Greymane', 'Johanna', 'Kerrigan', 'Li-Li', 'Li-Ming', 'Lt. Morales', 'Nazeebo', 'Rehgar', 'Rexxar', 'Sylvanas', 'The Lost Vikings', 'Tychus', 'Varian', 'Zul-jin'],

['Abathur', 'Auriel', 'Brightwing', 'Chen', 'Dehaka', 'E.T.C.', 'Johanna', 'Kharazim', 'Li-Li', 'Lt. Morales', 'Lucio', 'Malfurion', 'Medivh', 'Muradin', 'Rehgar', 'Stitches', 'Tassadar', 'Tyrael', 'Uther', 'Zarya'],

['Alarak', 'Anub-arak', 'Artanis', 'Arthas', 'Chen', 'Diablo', 'Dehaka', 'Illidan', 'Kharazim', 'Leoric', 'Muradin', 'Ragnaros', 'Rexxar', 'Samuro', 'Sonya', 'Stitches', 'Thrall', 'Varian', 'Xul', 'Zarya']]

var myList = ['Zeratul', 'Valla', 'Nazeebo', 'E.T.C.', 'Nova', 'Stiches', 'Li-Li', 'Xul', 'Illidan', 'Sgt. Hammer', 'Zagara', 'Sonya', 'Sylvanas', 'Muradin', 'Murky', 'Cho', 'Gall', 'Tassadar', 'Raynor', 'Jaina', 'Falstad', 'Malfurion', 'Greymane', 'Kerrigan', 'Tracer', 'Azmodan', 'Li-Ming', 'Diablo', 'Gaz', 'Zarya', 'Auriel'];

// var userList = [];

var results = [];

for(var i=0; i<4; i++) {
  var myObj = {};
  myObj.count = difference(array[i], myList).length;
  myObj.arrayPosition = i;
  switch (i) {
    case 0:
      myObj.arrayName = "Assassin";

      break;
    case 1:
      myObj.arrayName = "Flex";

      break;
    case 2:
      myObj.arrayName = "Support & Specialist";

      break;
    case 3:
      myObj.arrayName = "Tanks & Bruisers";

      break;
    default:
      break;

  }
  results.push(myObj)
}

function difference(a1, a2) {
  var result = [];
  for (var i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      result.push(a1[i]);
    }
  }
  return result;
}
$(document).ready(function() {

  $.ajax({
    url: "https://api.hotslogs.com/Public/Data/Heroes"
  }).done(function(data) {
    for(var i = 0; i<data.length; i++) {
      $('#injectJS').append(data.PrimaryName);
    }

  });

});
