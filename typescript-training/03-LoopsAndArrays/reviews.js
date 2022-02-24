var reviews = [5, 5, 4.5, 1, 3];
/*
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
*/
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total = total + reviews[i];
}
var average = total / reviews.length;
console.log("Review average " + average);
