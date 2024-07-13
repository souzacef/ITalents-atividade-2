const prompt = require("prompt-sync")();

// Função para cadastrar as notas dos alunos
function cadastrarNotas(materias) {
    const notas = {}; // Objeto para armazenar as notas de cada matéria

    materias.forEach((materia) => {
        notas[materia] = [];
        console.log(`\n===== Cadastro de notas para ${materia} =====`);

        for (let i = 0; i < 3; i++) {
            let nota;
            while (true) {
                const entrada = prompt(`Digite a ${i + 1}ª nota para ${materia} (0 a 10): `);
                if (/^\d+(\.\d+)?$/.test(entrada)) {
                    nota = parseFloat(entrada);
                    if (!isNaN(nota) && nota >= 0 && nota <= 10) { // Verifica se a entrada é um número entre 0 e 10
                        break;
                    }
                }
                console.log("Entrada inválida. Por favor, insira um número entre 0 e 10.");
            }
            notas[materia].push(nota); // Adiciona a nota ao array
        }
    });

    console.log("\nNotas cadastradas:");
    console.log(notas);

    return notas; // Retorna o objeto notas
}

module.exports = cadastrarNotas;
