const prompt = require("prompt-sync")();

const materias = [];

function inserirMateria() {
    const materia = prompt("Qual matéria deseja adicionar? ");
    if (materia.trim() !== "") {
        materias.push(materia);
    } else {
        console.log("Nome da matéria não pode ser vazio.");
    }
    console.log();
}

function cadastrarMaterias() {
    console.log("\n======== Cadastro de matérias ========\n");
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
        } else if (resposta == '2') {
            console.log("\nCadastro de matérias encerrado.");
            console.log("======== Próxima etapa ========\n");
            continuarExecutando = false;
        } else {
            console.log("Entrada inválida. Digite 1 para sim, 2 para não.");
        }
    }
}

module.exports = { cadastrarMaterias, materias };
