'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio';

function logger() {
    console.log('My name is brian');
}

logger();

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log (fruitProcessor(2,3))



// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah
}
const age2 = calcAge2(1991)

console.log(age1,age2)

// Arrow function
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3)

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Brian'));


const calcAge = function(birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if(retirement > 0 ) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} retires in ${retirement} years`);
        return -1;
    }

    //return retirement;
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Brian'));
console.log(yearsUntilRetirement(1970, 'Brian'));


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991,1984,2008,2020);

friends[2] = 'Jay';

const firstName = 'Brian';
const brian = [firstName, 'Lim', 2037-1997, 'Devops', friends];
console.log(brian)

const calcAge = function(birthYeah) {
    return 2037 - birthYeah;
}

const years = [1990,1967,2002,2010,2018]
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])]
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength)

const newLength1 = friends.unshift('John');
console.log(friends);
console.log(newLength1)

// Remove Elements
const popped = friends.pop(); // Last
console.log(friends);
console.log(popped);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.includes('Steven'))

if (friends.includes('Steven')) {
    console.log('You have a friend called steven !')
}


const jonasArray = [
    'Jonas',
    'Schmedmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: '1991',
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age
    },

    getSummary: function(){
        return String(`${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`)
    }
}

console.log(jonas.calcAge());
console.log(jonas['calcAge']());
console.log(jonas.getSummary());
*/

const jonasArray = [
    'Jonas',
    'Schmedmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// continue and break
for(let i=0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i])
}

for(let i=0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i])
}