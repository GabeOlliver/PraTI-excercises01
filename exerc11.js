/*
Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
Write a program that asks the user for 5 numbers and calculates the total sum using a for loop.
*/

const prompt = require('prompt-sync')();

let total = 0;

for(let i = 1 ; i < 6; i++){
    
    let x = Number(prompt("Enter a number to sum / Insira um valor para ser somado: "));
    total += x;
}

console.log(total)