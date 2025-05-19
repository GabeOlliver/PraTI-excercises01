/* 
Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
Create a program that calculates the factorial of a number provided by the user using a for or while loop.
*/

const prompt = require('prompt-sync')();

let number = Number(prompt("Enter a number to calculate the factorial / Digite um número para calcular o fatorial: "));

let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log(`Factorial of ${number} is: ${factorial} / O fatorial de ${number} é: ${factorial}`);
