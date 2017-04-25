var array = [["Alarak", "Chromie", "Falstad", "Greymane", "Gul'dan", "Kael'thas", "Kerrigan", "Li-Ming", "Lunara", "Nazeebo", "Nova", "Raynor", "Sylvanas", "The Butcher", "Tracer", "Tychus", "Valeera", "Valla", "Zeratul", "Zul'jin"],

["Abathur", "Arthas", "Azmodan", "Brightwing", "Diablo", "E.T.C.", "Greymane", "Johanna", "Kerrigan", "Li Li", "Li-Ming", "Lt. Morales", "Nazeebo", "Rehgar", "Rexxar", "Sylvanas", "The Lost Vikings", "Tychus", "Varian", "Zul'jin"],

["Abathur", "Auriel", "Brightwing", "Chen", "Dehaka", "E.T.C.", "Johanna", "Kharazim", "Li Li", "Lt. Morales", "Lúcio", "Malfurion", "Medivh", "Muradin", "Rehgar", "Stitches", "Tassadar", "Tyrael", "Uther", "Zarya"],

["Alarak", "Anub'arak", "Artanis", "Arthas", "Chen", "Diablo", "Dehaka", "Illidan", "Kharazim", "Leoric", "Muradin", "Ragnaros", "Rexxar", "Samuro", "Sonya", "Stitches", "Thrall", "Varian", "Xul", "Zarya"]];

var allHeroes = ["Abathur", "Alarak", "Anub'arak", "Artanis", "Arthas", "Auriel", "Azmodan", "Brightwing", "The Butcher", "Cassia", "Chen", "Cho'gall", "Chromie", "Dehaka", "Diablo", "E.T.C.", "Falstad", "Gazlowe", "Genji", "Greymane", "Gul'dan", "Illidan", "Jaina", "Johanna", "Kael'thas", "Kerrigan", "Kharazim", "Leoric", "Li Li", "Li-Ming", "The Lost Vikings", "Lt. Morales", "Lunara", "Lúcio", "Malfurion", "Medivh", "Muradin", "Murky", "Nazeebo", "Nova", "Probius", "Ragnaros", "Raynor", "Rehgar", "Rexxar", "Samuro", "Sgt. Hammer", "Sonya", "Stitches", "Sylvanas", "Tassadar",  "Thrall", "Tracer", "Tychus", "Tyrael", "Tyrande", "Uther", "Valeera", "Valla", "Varian", "Xul", "Zagara", "Zarya", "Zeratul", "Zul'jin"];

var userList = [];
var results = [];

$(document).ready(function() {
  var order = function() {
    results = [];
    var myObj = {};
    for(var i=0; i<4; i++) {
      myObj.count = difference(array[i], userList).length;
      myObj.heroList = difference(array[i], userList);
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

    results.sort(function(a, b) {
        return a.count - b.count;
    });
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

  function inject() {
    $('#injectHTML').append('<div id="dynamic"></div>');
    for(var i = results.length-1; i > -1; i--) {
      $('#dynamic').append('<li class="list">' +  '<div><b>Bundle Name:</b> ' + results[i].arrayName + '</div>' + '<div><b>Number of heroes gained:</b> ' + results[i].count + '</div>' + '<div><b>List of heroes gained:</b> ' + results[i].heroList.join(", ") + '</div>' + '</li>');
    }
  }

  for(var i=0; i < allHeroes.length; i++) {
    $('#allHeroes').append('<input type="checkbox" class="hero" name="checkbox" value="' + allHeroes[i] + '">' + allHeroes[i] + '<br>');
  }

  $('#submit').on('click', function(){
    $(this).closest('#wrapper').find('#dynamic').remove();
    var checkedValue = $('.hero:checked');
    for (var i = 0; i <checkedValue.length; i++) {
      userList.push(checkedValue[i].value);
    }
    order();
    inject();
  });
});

// $(document).ready(function() {
//   $.ajax({
//     url: "https://api.hotslogs.com/Public/Data/Heroes"
//   }).done(function(data) {
//     for(var i = 0; i< data.length; i++) {
//       $('#injectJS').append(data["0"].PrimaryName);
//     }
//
//   });
//
// });
