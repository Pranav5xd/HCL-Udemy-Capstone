var found = true;
var grade = 88.6;
var firstName = "Pranav";
var lastName = 'Sharma';
//Breaking it
/*
found = 0;
grade = "A";
firstName = false;
*/
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
//use template strings
console.log("Hi ".concat(firstName, " ").concat(lastName));
