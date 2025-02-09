/*
Calculate VAT and final price
*/
let rawPrice = Number(prompt("What is the price?"));
alert(`Final Price icnluding 20.6% VAT: ${rawPrice + (rawPrice * .206)}`);
