/*
Number comparison
*/
const num1 = Number(prompt("Give first number:"));
const num2 = Number(prompt("Give second number:"));

if (num1 > num2) {
    alert(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
    alert(`${num1} is less than ${num2}`);
} else {
    alert(`You entered ${num1} for both num1 and num2 thus num1 and num2 are equal`);
}