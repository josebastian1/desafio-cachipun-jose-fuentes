let rondas = parseInt(prompt("Cuántas rondas quieres que tenga el juego?"));
if (isNaN(rondas) || rondas < 1) {
    rondas = parseInt(prompt("Ingrese un número de rondas válido."));
}

let contadorUser = 0;
let contadorCPU = 0;

function juego() {
    for (let i = 0; i < rondas; i++) {
        let jugadas = ["piedra", "papel", "tijera"];

        let jugadaUser = prompt("Piedra, papel o tijera?").toLocaleLowerCase();

        let jugadaCPU = jugadas[Math.floor(Math.random() * 3)];

        let resultadoRonda;
        if ((jugadaUser === "piedra" && jugadaCPU === "tijera") ||
            (jugadaUser === "papel" && jugadaCPU === "piedra") ||
            (jugadaUser === "tijera" && jugadaCPU === "papel")) {
            contadorUser++;
            resultadoRonda = "Ganaste esta ronda!";
        } else if (jugadaUser === jugadaCPU) {
            resultadoRonda = "Empate!";
        } else {
            contadorCPU++;
            resultadoRonda = "Pierdes esta ronda.";
        }
        alert("La computadora elige " + jugadaCPU + "." + `\n` + resultadoRonda + `\nMarcador: \n Tú: ` + contadorUser + " - " + "Computadora: " + contadorCPU);
    }
}


function final() {
    let resultadoFinal = "El juego termina en empate.";
    if (contadorUser > contadorCPU) {
        resultadoFinal = "Felicidades, ganaste el juego!";
    } else if (contadorUser < contadorCPU) {
        resultadoFinal = "Gana la computadora! Suerte para la próxima..."
    }
    alert(resultadoFinal + "\nMarcador final: Tú " + contadorUser + " - " + contadorCPU + " Máquina")
}

juego();
final();