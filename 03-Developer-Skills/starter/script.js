// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

console.log(birthYear);
*/
// PROBLEM:
// WE WORK for a company build a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
let regexp = /error/;
let temperatureWithoutError = [];
let smallestNumber = temperatureWithoutError[0];
let biggestNumber = temperatureWithoutError[0];

for (let i = 0; i < temperatures.length; i++) {
  let temperature = temperatures[i];
  if (regexp.test(temperature)) {
    continue;
  } else {
    temperatureWithoutError.push(temperature);
  }
}

for (let i = 0; i < temperatureWithoutError.length; i++) {
  if (smallestNumber < temperatureWithoutError[i]) {
    continue;
  } else {
    smallestNumber = temperatureWithoutError[i];
  }
}

for (let i = 0; i < temperatureWithoutError.length; i++) {
  if (biggestNumber > temperatureWithoutError[i]) {
    continue;
  } else {
    biggestNumber = temperatureWithoutError[i];
  }
}
let temperatureAmplitude = biggestNumber - smallestNumber;

console.log(`Temperature Amplitude is ${temperatureAmplitude}`);
*/

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius")),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
