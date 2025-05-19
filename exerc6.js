/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

Read three values for the sides of a triangle: A, B, and C. Check whether the given sides can actually form a triangle. 
If they do, indicate the type of triangle: Isosceles, Scalene, or Equilateral.
To check if the given sides can form a triangle:

A < B + C
B < A + C
C < A + B

Triangle types:
Isosceles Triangle: has two equal sides (A = B or A = C or B = C)
Scalene Triangle: has all different sides (A ≠ B and B ≠ C and A ≠ C)
Equilateral Triangle: has all sides equal (A = B and B = C)
*/

const prompt = require('prompt-sync')();

let a = Number(prompt("Insert the A side / Insira o lado A: "));
let b = Number(prompt("Insert the B side / Insira o lado B: "));
let c = Number(prompt("Insert the C side / Insira o lado C: "));

if(a < b + c && b < a + c && c < a + b){
   console.log("Thats a triangle! / Isso é um triangulo!");
   if (a === b && b === c) {
        console.log("Tipo: Triângulo Equilátero.");
    } else if (a === b || a === c || b === c) {
        console.log("Tipo: Triângulo Isósceles.");
    } else {
        console.log("Tipo: Triângulo Escaleno.");
    }
}else{
    console.log("These numbers can't make a triangle / Esses valores não formam ")
}