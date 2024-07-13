const prompt = require("prompt-sync")();

function cadastrarNotas(materias) {
    const notas = {};

    materias.forEach((materia) => {
        notas[materia] = [];
        console.log(`\n===== Cadastro de notas para ${materia} =====`);

        for (let i = 0; i < 3; i++) {
            let nota;
            while (true) {
                const entrada = prompt(`Digite a ${i + 1}ª nota para ${materia} (0 a 10): `);
                if (/^\d+(\.\d+)?$/.test(entrada)) {
                    nota = parseFloat(entrada);
                    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
                        break;
                    }
                }
                console.log("Entrada inválida. Por favor, insira um número entre 0 e 10.");
            }
            notas[materia].push(nota);
        }
    });

    console.log("\nNotas cadastradas:");
    console.log(notas);

    return notas;
}

module.exports = cadastrarNotas;
