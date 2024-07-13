// Função para exibir os resultados das matérias
function exibeResultado(medias, faltas) {
    console.log("\n===== Resultados das matérias: =====\n");

    for (const materia in medias) {
        const media = medias[materia].toFixed(2); // Formata a média para duas casas decimais
        const numeroDeFaltas = faltas[materia];
        let statusFinal = "";

        if (media >= 7 && numeroDeFaltas <= 5) {
            statusFinal = "Aprovado!"; // Verifica se o aluno está aprovado
        } else {
            statusFinal = "Reprovado!"; // Verifica se o aluno está reprovado
        }

        console.log(`${materia}: `);
        console.log(`  Média: ${media} `);
        console.log(`  Faltas: ${numeroDeFaltas}`);
        console.log(`  Status: ${statusFinal}\n`);
    }
}

module.exports = exibeResultado;
