document.getElementById("formNumeros").addEventListener("submit", (e) => {
    e.preventDefault(); // evita recargar la página

    let numeros = [
        Number(num1.value),
        Number(num2.value),
        Number(num3.value)
    ];

    let ente = 0;
    let indice = 0;
    let rompebucle = false;

    do {
        indice = 0;
        rompebucle = false;

        while (indice < numeros.length - 1) {
            if (numeros[indice] < numeros[indice + 1]) {

                ente = numeros[indice];
                numeros[indice] = numeros[indice + 1];
                numeros[indice + 1] = ente;

                rompebucle = true;
            }
            indice++;
        }
    } while (rompebucle);

    let resultado = document.getElementById("resultado");

    if (numeros[0] === numeros[1] && numeros[1] === numeros[2]) {
        resultado.className = "alert alert-warning";
        resultado.textContent = "Los tres números son iguales";
    } else {
        resultado.className = "alert alert-success";
        resultado.textContent =
            `Mayor a menor: ${numeros.join(", ")} | Inverso: ${[...numeros].reverse().join(", ")}`;
    }
});
