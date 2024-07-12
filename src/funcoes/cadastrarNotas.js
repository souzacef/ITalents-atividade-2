const prompt = require("prompt-sync")();

function cadastrarNotas(materias) {
    const notas = {};

    materias.forEach((materia, cont) => {
        notas[materia] = [];
        console.log(`\nCadastro de notas para ${materia}`);

        for (let i = 0; i < 3; i++) {
            let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota para ${materia}: `));
            notas[materia].push(nota);
        }
    });

    console.log("\nNotas cadastradas:");
    console.log(notas);
}

module.exports = cadastrarNotas;
