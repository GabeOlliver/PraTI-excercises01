/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.

Apples cost R$ 0.30 each if fewer than a dozen are purchased, and R$ 0.25 each if 
twelve or more are purchased. Write an algorithm that reads the number of apples 
bought, calculates, and displays the total purchase amount.
*/

const prompt = require('prompt-sync')();

let quantity = Number(prompt("Enter the number of apples bought / Insira a quantidade de maçãs compradas: "));

let pricePerApple;
if (quantity < 12) {
    pricePerApple = 0.30;
} else {
    pricePerApple = 0.25;
}

let total = quantity * pricePerApple;

console.log(`Total amount / Valor total: R$ ${total.toFixed(2)}`);
