const prompt = require("prompt-sync")();

function cadastrarEContarFaltas(materias) {
    const faltas = {};
    let reprovadoPorFaltas = false;

    materias.forEach((materia) => {
        const numeroDeFaltas = parseInt(+prompt(`Digite o número de faltas para ${materia}: `),10);
        faltas[materia] = numeroDeFaltas;

        if (numeroDeFaltas > 5) {
            reprovadoPorFaltas = true;
        }
    });

    return {faltas, reprovadoPorFaltas};
}


module.exports = cadastrarEContarFaltas;