const prompt = require("prompt-sync")();

console.log("==========Bem vindo ao controle de notas!==========\n");

const aluno = prompt("informe o nome do aluno. ");

const materias = [];
function inserirMateria() {
    console.log();
    materias.push(prompt("Qual matéria deseja adicionar? "));
    console.log();
}

function cadastrarMaterias() {
    let cont = 0;
    let continuarExecutando = true;
    let quantidadeMaterias = materias.length;
    for (let i = 0; i <3; i++){
        inserirMateria();
    }

    while (continuarExecutando) {
        quantidadeMaterias = materias.length;
        console.log(`\n${quantidadeMaterias} matérias adicionadas `);
        console.log("Deseja continuar adicionando matérias? ");
        let resposta = +prompt("Digite 1 para sim, 2 para não. ")

        if (resposta == 1) {
            inserirMateria();
        }else {
            console.log("\nCadastro encerrado");
            console.log("Próxima etapa.\n");
            continuarExecutando = false;
        }
    }

}


function cadastrarNotas() {
    const notas = {};

    materias.forEach((materia, cont) => {
        notas[materia] = [];
        console.log(`\n=====Cadastro de notas para ${materia}=====\n`);

        for (let i = 0; i < 3; i++) {
            let nota = parseFloat(+prompt(`Digite a ${i + 1}ª nota para ${materia} `));
            notas[materia].push(nota);
        }
    });

    console.log("\nNotas cadastradas!\n");
    

}



cadastrarMaterias();
cadastrarNotas();