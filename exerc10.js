/* 
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
Write an algorithm to read an integer and display it on the screen 10 times.
*/

const prompt = require('prompt-sync')();

let number = Number(prompt("Enter an integer: / Digite um número inteiro: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${i}: ${number}`);
}
