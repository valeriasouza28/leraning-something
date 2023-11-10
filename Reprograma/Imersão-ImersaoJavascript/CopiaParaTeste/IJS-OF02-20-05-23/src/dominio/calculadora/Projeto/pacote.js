// volta uma pasta  entra na pasta contanste e importa do arquivo constantes a constante **MAX_HORAS_POR_PACOTE** que contém um objeto que recebe como chave o nome do pacote  e como valor dessa chave o valor do pacote correspondente
const { MAX_HORAS_POR_PACOTE } = require("../constantes/constantes");

// cria constante calcularPacote que recebe uma  arrow function que recebe como parâmetro **totalDeHorasPorProjeto**
const calcularPacote = totalDeHorasPorProjeto =>
    // Essa função será responsável por calcular o pacote apropriado com base no total de horas do projeto.
    // **object.entries** para obter um array  contendo os pares chave-valor do objeto **MAX_HORAS_POR_PACOTE**
    Object.entries(MAX_HORAS_POR_PACOTE)
        // **.find** para encontrar no arrray retornado no  passo anterior o primeiro elemento cujo valor seja maior  do que **totalDeHorasPorProjeto. O método **find()** retorna o primeiro elemento que satisfaz a condição de busca.
        // [0]Aqui, estamos acessando o primeiro elemento retornado pelo método find(). Como o método find() retorna um array de dois elementos (chave e valor), [0] nos permite obter a chave (o nome do pacote).
        .find(([key, value]) => value > totalDeHorasPorProjeto)[0];
console.log(calcularPacote(72));

exports.calcularPacote = calcularPacote;
