var sportsOne = ["Golf", "Cricket", "Football", "Soccer"];
/*
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
*/
/* Simplified For Loop
for (let tempSport of sportsOne) {
    console.log(tempSport);
}
*/
// Conditionals
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
