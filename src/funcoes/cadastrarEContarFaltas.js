const prompt = require("prompt-sync")();

// Função para cadastrar e contar faltas dos alunos
function cadastrarEContarFaltas(materias) {
    const faltas = {}; // Objeto para armazenar as faltas de cada matéria
    let reprovadoPorFaltas = false; // Flag para verificar se o aluno foi reprovado por faltas

    materias.forEach((materia) => {
        let numeroDeFaltas;
        while (true) {
            const entrada = prompt(`Digite o número de faltas para ${materia}: `);
            if (/^\d+$/.test(entrada)) {
                numeroDeFaltas = parseInt(entrada, 10); // Verifica se a entrada é um número inteiro positivo
                break;
            }
            console.log("Entrada inválida. Por favor, insira um número inteiro positivo.");
        }
        faltas[materia] = numeroDeFaltas; // Armazena o número de faltas

        if (numeroDeFaltas > 5) {
            reprovadoPorFaltas = true; // Verifica se o aluno foi reprovado por faltas
        }
    });

    return { faltas, reprovadoPorFaltas }; // Retorna o objeto faltas e a flag reprovadoPorFaltas
}

module.exports = cadastrarEContarFaltas;
