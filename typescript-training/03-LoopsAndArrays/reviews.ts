let reviews: number[] = [5, 5, 4.5, 1, 3];
/*
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
*/
let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total = total + reviews[i];
}
let average: number = total / reviews.length;
console.log("Review average " + average);