const prompt = require("prompt-sync")();

function cadastrarEContarFaltas(materias) {
    const faltas = {};
    let reprovadoPorFaltas = false;

    materias.forEach((materia) => {
        let numeroDeFaltas;
        while (true) {
            const entrada = prompt(`Digite o número de faltas para ${materia}: `);
            if (/^\d+$/.test(entrada)) {
                numeroDeFaltas = parseInt(entrada, 10);
                break;
            }
            console.log("Entrada inválida. Por favor, insira um número inteiro positivo.");
        }
        faltas[materia] = numeroDeFaltas;

        if (numeroDeFaltas > 5) {
            reprovadoPorFaltas = true;
        }
    });

    return { faltas, reprovadoPorFaltas };
}

module.exports = cadastrarEContarFaltas;
