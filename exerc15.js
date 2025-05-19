/*
Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
Write a program that generates and prints the first 10 numbers of the Fibonacci sequence using a for loop.
*/

let n1 = 0; 
let n2 = 1;

console.log("Fibonacci sequence (first 10 numbers) / Sequência de Fibonacci (primeiros 10 números):");

for (let i = 1; i <= 10; i++) {
    console.log(n1);
    let next = n1 + n2;
    n1 = n2;
    n2 = next;
}
