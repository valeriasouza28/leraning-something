// Essa constante contém um objeto com as taxas contratuais por pacote. As chaves do objeto são os nomes das taxas do pacote e os valores são números flutuantes correspondentes aos valores das taxas.
const { TAXAS_CONTRATUAIS_POR_PACOTE } = require("../constantes/constantes");

// Essa função é responsável por calcular as horas de duração do projeto com base em uma lista de funcionalidades.
const { calcularHorasDeProjeto } = require("./horasPorProjeto");

// Essa função é responsável por calcular o pacote apropriado com base no total de horas do projeto.
const { calcularPacote } = require("./pacote");

const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
    return totalDeHorasPorProjeto * valorHora;
};

// a função calcularValorBaseProjeto que recebe o total de horas do projeto e o valor da hora de trabalho como parâmetros. Essa função calcula o valor base do projeto multiplicando o total de horas pelo valor da hora de trabalho.
const calcularValorTotalProjeto = (funcionalidades, valorHora) => {
    // a constante **totalDeHorasPorProjeto** recebe a chamada da função **calcularHorasDeProjeto** que recebe como parãmetro **funcionalidades** oarâmetro passado pelo usuuário
    const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
    // a constante **pacote** recebe a chamada da função **calcularPacote** que recebe como parãmetro **totalDeHorasPorProjeto** que é a chamada da função acima
    const pacote = calcularPacote(totalDeHorasPorProjeto);

    // a constante **valorBase** recebe a chamada da função **calcularValorBaseProjeto** que recebe como parãmetro **totalDeHorasPorProjeto** que é a chamada da função acima e **valorHora** parãmetro  pelo usuário
    const valorBase = calcularValorBaseProjeto(
        totalDeHorasPorProjeto,
        valorHora
    );

    // calcula o valor total do projeto multiplicando o valor base pelo valor da taxa contratual correspondente ao pacote. O valor total é arredondado para o número inteiro mais próximo usando Math.round().
    return Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacote]);
};

exports.calcularValorTotalProjeto = calcularValorTotalProjeto;
