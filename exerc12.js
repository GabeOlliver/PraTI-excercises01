/*
Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
Create a program that displays the multiplication table (from 1 to 10) of a number provided by the user using a for loop.
*/

const prompt = require('prompt-sync')();

let num = Number(prompt("Enter a number / Insira um numero: "))

for(let i = 1 ; i < 11; i++){
    let mult = (i * num);

    console.log(num + " X " + i + " = " + mult);
}