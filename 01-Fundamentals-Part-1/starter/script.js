/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is fun!');
console.log(9 + 9);

console.log("Brian");
console.log("23");

let firstName = "Bob";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Practice 1

let country = "Singapore";
const continent = "Asia";
let population = 5900000;
console.log(country + " is in " + continent + " and has a population of " + population);

var isIsland = country;
var Language = "English";
console.log(isIsland, population, country, Language);

let newPopulation = population / 2;
console.log(newPopulation + " million");

let newPopulationPlusOne = population + 1;
console.log(newPopulationPlusOne + " million");

if (population < 33000000)
    console.log("The population of " + country + " is less than average country population");

var description = country + " is in " + continent + ", and has a population of " + population + " million" + " who speaks " + Language;
console.log(description);
*/

////////////////////////////////////////////////////////////////////////
// Coding Challenge 1

/*
let mark, john;
const markWeight1 = 78;
const markHeight1 = 169;
const markWeight2 = 95;
const markHeight2 = 188;

const johnWeight1 = 92;
const johnHeight1 = 195;
const johnWeight2 = 85;
const johnHeight2 = 176;
*/

/*

let markWeight, markHeight, markBmi, johnWeight, johnHeight, johnBmi;

// test data 1
const markWeight1 = 78;
const markHeight1 = 1.69;
const markWeight2 = 95;
const markHeight2 = 1.88;
// test data 2
const johnWeight1 = 92;
const johnHeight1 = 1.95;
const johnWeight2 = 85;
const johnHeight2 = 1.76;
// compare Bmi
let markHigherBMI;
// Operations
markWeight = markWeight1, markHeight = markHeight1;
johnWeight = johnWeight1, johnHeight = johnHeight1;
markBmi = (markWeight/markHeight**2);
johnBmi = (johnWeight/johnHeight**2);
if (markBmi > johnBmi)
markHigherBMI = true;
else
markHigherBMI = false;

console.log (markBmi, johnBmi, markHigherBMI)

markWeight = markWeight2, markHeight = markHeight2;
johnWeight= johnWeight2, johnHeight = johnHeight2;
markBmi = (markWeight/markHeight**2);
johnBmi = (johnWeight/johnHeight**2);
if (markBmi > johnBmi)
markHigherBMI = true;
else
markHigherBMI = false;

console.log (markBmi, johnBmi, markHigherBMI)

*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' years old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}`;
console.log(jonasNew)

console.log('string with \n\
multiple \n\
lines')

console.log(`string
with
multiple
lines`)
*/

const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsleft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsleft} years :)`)
}

const birthYear = 1998;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);