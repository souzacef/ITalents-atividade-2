Sistema de Gestão de Notas e Médias de Alunos
Descrição

Este projeto é uma aplicação em JavaScript utilizando Node.js que permite a gestão de notas e médias dos alunos. A aplicação permite cadastrar o nome do aluno, matérias, notas das matérias, calcular a média individual e contabilizar as faltas.
Funcionalidades

    Cadastro do Aluno:
        Solicita o nome do aluno.

    Cadastro das Matérias:
        Permite o cadastro de no mínimo 3 matérias.
        Permite continuar o cadastro de matérias até que o usuário decida parar.

    Cadastro de Notas:
        Solicita 3 notas para cada matéria cadastrada.

    Cálculo de Média:
        Calcula a média individual de cada matéria.

    Cadastro e Contabilização de Faltas:
        Solicita o número de faltas para cada matéria.
        Verifica se o aluno está reprovado por faltas (mais de 5 faltas em qualquer matéria).

    Resultados:
        Exibe a média de cada matéria.
        Indica se o aluno está aprovado ou reprovado em cada matéria, considerando tanto a média das notas quanto as faltas.

Requisitos

    Node.js
    Biblioteca prompt-sync

Instalação

    Clone o repositório:

git clone https://github.com/souzacef/ITalents-atividade-2.git 

2. Navegue até o diretório do projeto:
cd ITalents-atividade-2
cd src

3. Instale as dependências necessárias:
npm install prompt-sync

Como Executar

Para iniciar a aplicação, execute o seguinte comando no terminal:
node .\main.js

Código Principal

O código abaixo contém toda a lógica da aplicação, incluindo o cadastro de alunos, matérias, notas, faltas e exibição dos resultados.

const prompt = require("prompt-sync")();

// Função para cadastrar o nome do aluno
function cadastrarAluno() {
    console.log("=============== Bem vindo ao controle de notas! ===============\n");
    const aluno = prompt("Informe o nome do aluno: ");
    return aluno;
}

// Função para cadastrar matérias
const materias = [];
function inserirMateria() {
    const materia = prompt("Insira a matéria: ");
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
        console.log(`Insira a ${i + 1}ª matéria:`);
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

// Função para cadastrar notas das matérias
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

// Função para calcular a média das notas
function calcularMedia(notas) {
    const medias = {};

    for (const materia in notas) {
        const soma = notas[materia].reduce((acumula, nota) => acumula + nota, 0);
        const media = soma / notas[materia].length;
        medias[materia] = media;
    }
    return medias;
}

// Função para cadastrar e contar faltas
function cadastrarEContarFaltas(materias) {
    const faltas = {};
    let reprovadoPorFaltas = false;

    materias.forEach((materia) => {
        let numeroDeFaltas;
        while (true) {
            const entrada = prompt(`Digite o número de faltas para ${materia}: `);
            if (/^\d+$/.test(entrada)) {
                numeroDeFaltas = parseInt(entrada, 10);
                break;
            }
            console.log("Entrada inválida. Por favor, insira um número inteiro positivo.");
        }
        faltas[materia] = numeroDeFaltas;

        if (numeroDeFaltas > 5) {
            reprovadoPorFaltas = true;
        }
    });

    return { faltas, reprovadoPorFaltas };
}

// Função para exibir os resultados
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

// Função principal para processar os dados
function processarDados(materias) {
    const notas = cadastrarNotas(materias);
    const medias = calcularMedia(notas);
    const { faltas, reprovadoPorFaltas } = cadastrarEContarFaltas(materias);
    
    exibeResultado(medias, faltas);
}

// Execução da aplicação
const aluno = cadastrarAluno();
cadastrarMaterias();
processarDados(materias);

Tratamento de Erros

A aplicação possui mecanismos para tratar entradas inválidas, como notas não numéricas e faltas negativas. Além disso, lida com possíveis erros durante a execução, garantindo que a aplicação não quebre ou feche inesperadamente.
Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
Licença

Este projeto está licenciado sob a GNU General Public License v3.0.
Contato

Para mais informações, entre em contato através do souzacef@gmail.com.