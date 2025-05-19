/*
fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
Write an algorithm to receive decimal numbers until the user enters 0, then calculate the arithmetic mean of those numbers. 

*/

const prompt = require('prompt-sync')();

let number;         
let sum = 0;          
let count = 0;         

do {
    console.log("Enter decimal numbers / Insira números decimais:");
    console.log("Enter 0 to exit / Insira 0 para sair");

    number = Number(prompt());

    if (number !== 0) {
        sum += number;
        count++;
    }

} while (number !== 0);

if (count > 0) {
    let average = sum / count;
    console.log(`Average / Média: ${average.toFixed(2)}`);
} else {
    console.log("No numbers entered / Nenhum número foi inserido.");
}