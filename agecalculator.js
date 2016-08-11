
var name;
var yearOfBirth;
var currentYear;

function ageCalculator(name, yearOfBirth, currentYear) {

  var age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";

}

console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Jack", 1988, 2015));
console.log(ageCalculator("Ali", 2015, 2015));