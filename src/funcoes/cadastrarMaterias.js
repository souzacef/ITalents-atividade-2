const prompt = require("prompt-sync")();

const materias = [];

function inserirMateria() {
    console.log();
    materias.push(prompt("Qual matéria deseja adicionar? "));
    console.log();
}

function cadastrarMaterias() {
    let continuarExecutando = true;

    
    for (let i = 0; i < 3; i++) {
        inserirMateria();
    }

    while (continuarExecutando) {
        let quantidadeMaterias = materias.length;
        console.log(`\n${quantidadeMaterias} matérias adicionadas.\n`);
        console.log("Deseja continuar adicionando matérias?\n");
        let resposta = prompt("Digite 1 para sim, 2 para não: ");

        if (resposta == '1') {
            inserirMateria();
        } else {
            console.log("\nCadastro de matérias encerrado.");
            console.log("======== Próxima etapa ========\n");
            continuarExecutando = false;
        }
    }
}

module.exports = {
    cadastrarMaterias,
    materias
};
