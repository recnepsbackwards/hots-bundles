var dmgList = ['Alarak', 'Chromie', 'Falstad', 'Greymane', 'Gul-dan', 'Kael-thas', 'Kerrigan', 'Li-Ming', 'Lunara', 'Nazeebo', 'Nova', 'Raynor', 'Sylvanas', 'The Butcher', 'Tracer', 'Tychus', 'Valeera', 'Valla', 'Zeratul', 'Zul-jin'];

var flexList = ['Abathur', 'Arthas', 'Azmodan', 'Brightwing', 'Diablo', 'E.T.C.', 'Greymane', 'Johanna', 'Kerrigan', 'Li Li', 'Li-Ming', 'Lt. Morales', 'Nazeebo', 'Rehgar', 'Rexxar', 'Sylvanas', 'The Lost Vikings', 'Tychus', 'Varian', 'Zul-jin'];

var supportList = ['Abathur', 'Auriel', 'Brightwing', 'Chen', 'Dehaka', 'E.T.C.', 'Johanna', 'Kharazim', 'Li Li', 'Lt. Morales', 'Lúcio', 'Malfurion', 'Medivh', 'Muradin', 'Rehgar', 'Stitches', 'Tassadar', 'Tyrael', 'Uther', 'Zarya'];

var tankList = ['Alarak', 'Anub-arak', 'Artanis', 'Arthas', 'Chen', 'Diablo', 'Dehaka', 'Illidan', 'Kharazim', 'Leoric', 'Muradin', 'Ragnaros', 'Rexxar', 'Samuro', 'Sonya', 'Stitches', 'Thrall', 'Varian', 'Xul', 'Zarya'];', '

var myList = ['Zeratul', 'Valla', 'Nazeebo', 'E.T.C.', 'Nova', 'Stiches', 'Li-Li', 'Xul', 'Illidan', 'Sgt. Hammer', 'Zagara', 'Sonya', 'Sylvanas', 'Muradin', 'Murky', 'Cho', 'Gall', 'Tassadar', 'Raynor', 'Jaina', 'Falstad', 'Malfurion', 'Greymane', 'Kerrigan', 'Tracer', 'Azmodan', 'Li-Ming', 'Diablo', 'Gaz', 'Zarya', 'Auriel']

var userList = [];

Array.prototype.diff = function(arr2) {
    var ret = [];
    this.sort();
    arr2.sort();
    for(var i = 0; i < this.length; i += 1) {
        if(arr2.indexOf( this[i] ) > -1){
            ret.push( this[i] );
        }
    }
    return ret;
};

console.log( 'Damage List' + ' ' + (20 - dmgList.diff(myList).length ));
console.log( 'Flex List' + ' ' + (20 - flexList.diff(myList).length ));
console.log( 'Support List' + ' ' + (20 - supportList.diff(myList).length ));
console.log( 'Tank List' + ' ' + (20 - tankList.diff(myList).length ));
