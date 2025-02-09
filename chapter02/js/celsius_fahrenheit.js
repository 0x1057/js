/*
Convert a temperature from Celsius to Fahrenheit degrees
*/
const celsius = Number(prompt("What is the temperature in celsius?"));
let fahrenheit = celsius * (9.0/5.0) + 32;
alert(`The fahrenheit conversion of ${celsius}C is ${fahrenheit}F`);