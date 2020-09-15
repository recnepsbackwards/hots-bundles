var username;
var user_id;
var league_id;
var league_name;
var leagueObj; 
var requestLeagues;
var userData;
var requestRosters;
var requestedPlayer;
var count = 0;
var roster_arr = [];
var league_arr = [];
var season = "2020";
var submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function() {
    username = document.querySelector('#username').value;
    player = document.querySelector('#player').value;
    userData = "https://api.sleeper.app/v1/user/"+username;
    getUserData(userData);
});

var getUserData = function(el) {
    fetch(el).then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        // This is the JSON from our response
        user_id = data.user_id;
        requestLeagues = "https://api.sleeper.app/v1/user/"+user_id+"/leagues/nfl/"+season;
        getLeagues(requestLeagues);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
};

var getLeagues = function(el) {
    fetch(el).then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        // This is the JSON from our response
        createLeagueObject(data);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
};

var createLeagueObject = function(el) {
    for(var i=0; i<el.length; i++) {
        league_id = el[i].league_id;
        league_name = el[i].name;
        leagueObj = {league_id: league_id, name: league_name}
        league_arr.push(leagueObj)
    }
    getRosters(league_arr);
};

var getRosters = function() {
    fetch("https://api.sleeper.app/v1/league/"+league_arr[count].league_id+"/rosters").then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        count++;
        // This is the JSON from our response
        for(var k=0; k<data.length; k++) {
            if(data[k]["owner_id"] === user_id) {
                roster_arr.push(data[k].players);
            }
        }
        if(count === league_arr.length) {
            formatPlayers();
            searchRosters(roster_arr, player);
        }
        else {
            getRosters();
        }
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
};

var formatPlayers = function() {
    for(var o=0; o<roster_arr.length; o++) {
        for(var m=0; m<roster_arr[o].length; m++) {
            if(players[roster_arr[o][m]] !== undefined) {
                roster_arr[o][m] = players[roster_arr[o][m]].full_name;
            }
        }
    }
};

var searchRosters = function(obj, plyr) {
    for(var p=0; p<obj.length; p++) {
        for(var u=0; u<obj[p].length; u++) {
            if(obj[p][u] === plyr) {
                console.log(obj[p]);
                console.log(p);
                console.log(obj);
                document.querySelector('#injectHTML').innerHTML += '<li>'+league_arr[p].name+'</li>';
            }
        }
    }
}

