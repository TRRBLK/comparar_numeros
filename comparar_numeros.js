let numeros = [Number(prompt("Ingresa un numero: ")),
Number(prompt("Ingresa otro numero: ")),
Number(prompt("Ingresa un tercer numero: "))
];

let ente = 0;
let indice = 0;
let rompebucle = false;

do {
console.log(numeros[indice]);
indice++;
} while (indice<numeros.length-1);
