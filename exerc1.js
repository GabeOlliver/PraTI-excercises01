/*
1) Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.

Write a program that receives an integer number and verify if it is an odd or even number
using the conditional structure if / else.

*/
const prompt = require('prompt-sync')();

let x = prompt('Write a number / Digite um número: ');

let num = Number(x);

const ANS = isEven(num);

function isEven(x){

    if(isNaN(x)){
        return(console.log("Invalid input / Entrada invalida"))
    }
    if(x % 2 == 0){
        return(console.log(x + " It's a even Number / É um número Par"));
    }else{ 
        return(console.log(x + " It's a Odd Number / É um número Impar"));

    }
}

console.log(ANS);
