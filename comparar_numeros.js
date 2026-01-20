let numeros = [Number(prompt("Ingresa un numero: ")),
Number(prompt("Ingresa otro numero: ")),
Number(prompt("Ingresa un tercer numero: "))
];

let ente = 0;
let indice = 0;
let rompebucle = false;

do {
while (indice <numeros.length-1) {
    if (numeros[indice] < numeros[indice+1]) {
        
        ente = numeros[indice];
        numeros[indice] = numeros[indice+1];
        numeros[indice+1] = ente;

        rompebucle = true;

    }
console.log(numeros);
    indice++;
}
} while (rompebucle);


