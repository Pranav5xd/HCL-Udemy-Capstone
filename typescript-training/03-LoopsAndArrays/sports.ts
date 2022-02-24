let sportsOne: string[] = ["Golf", "Cricket", "Football", "Soccer"];

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
for (let tempSport of sportsOne) {
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}