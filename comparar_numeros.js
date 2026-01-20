let numeros = [Number(prompt("Ingresa un numero: ")),
Number(prompt("Ingresa otro numero: ")),
Number(prompt("Ingresa un tercer numero: "))
];

let ente = 0;
let indice = 0;
let rompebucle = false;

do {

    indice = 0;
    rompebucle = false;
while (indice <numeros.length-1) {
    if (numeros[indice] < numeros[indice+1]) {
        
        ente = numeros[indice];
        numeros[indice] = numeros[indice+1];
        numeros[indice+1] = ente;

        rompebucle = true;

    }
   indice++;
}
} while (rompebucle);

indice = 0;

if (numeros[indice] === numeros[indice+1] && numeros[indice+1] === numeros[indice+2]) {
    console.log(`${numeros[indice]} = ${numeros[indice+1]} = ${numeros[indice+2]} los numeros son iguales`)
}

else {
    console.log(`El arreglo se ordenó del numero mayor al numero menor: ` + numeros);
console.log(`El mismo arreglo en orden inverso: ` + numeros.reverse());
}



