let rondas = parseInt(prompt("Cuántas rondas quieres que tenga el juego?"));
if (isNaN(rondas) || rondas <1){
    rondas = parseInt(prompt("Ingrese un número de rondas válido."));
}

let contadorUser = 0;
let contadorCPU = 0;

for (let i = 0; i < rondas; i++) {
    let jugadas = ["piedra","papel","tijera"];

    let jugadaUser = prompt("Piedra, papel o tijera?").toLocaleLowerCase();

    let jugadaCPU = jugadas[Math.floor(Math.random()*3)];

    let resultadoRonda;
    if ((jugadaUser === "piedra" && jugadaCPU === "tijera") || 
        (jugadaUser === "papel" && jugadaCPU=== "piedra") ||
        (jugadaUser === "tijera" && jugadaCPU=== "papel")){
            contadorUser++;
            resultadoRonda = "Felicidades! Ganaste esta ronda!";
        } else if (jugadaUser===jugadaCPU){
            resultadoRonda = "Empate!";
        } else {
            contadorCPU++;
            resultadoRonda = "Lastima! Perdiste esta ronda...";
        }
        alert("La computadora elige: "+ jugadaCPU + resultadoRonda + `\n Marcador: \n Tú: `+ contadorUser + " - " + "Computadora: " + contadorCPU);
}