function exibeResultado(medias, faltas) {
    console.log("\n===== Resultados das matérias: =====\n");

    for (const materia in medias) {
        const media = medias[materia].toFixed(2);
        const numeroDeFaltas = faltas[materia];
        let statusFinal = "";

        if (media >= 7 && numeroDeFaltas <= 5) {
            statusFinal = "Aprovado!";
        } else {
            statusFinal = "Reprovado!";
        }

        console.log(`${materia}: `);
        console.log(`  Média: ${media} `);
        console.log(`  Faltas: ${numeroDeFaltas}`);
        console.log(`  Status: ${statusFinal}\n`);
    }
}

module.exports = exibeResultado;