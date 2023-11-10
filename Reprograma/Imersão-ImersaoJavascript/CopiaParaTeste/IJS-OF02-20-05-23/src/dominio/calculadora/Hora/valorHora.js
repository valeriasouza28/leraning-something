// volta uma pasta  entra na pasta contanste e importa do arquivo constantes as constantes HORAS_POR_DIA e DIAS_UTEIS_NO_MES e ambas as constantes recebem um número inteiro
const {
    HORAS_POR_DIA,
    DIAS_UTEIS_NO_MES
} = require("../constantes/constantes");

// cria uma arrow function **calcularValorPorValor** que recebe como parâmetro rendaMensal
const calcularValorPorHora = rendaMensal => {
    // criamos a constante **horasTrabalhadasPorMes que recebe o **HORAS_POR_DIA** no caso **8** e multiplica por **DIAS_UTEIS_NO_MES** no caso **22**
    const horasTrabalhadasPorMes = HORAS_POR_DIA * DIAS_UTEIS_NO_MES;

    // cria a constante valorPorHora que recebe  o parâmetro  dessa função **rendaMensal** e divide esse valor pela contante criada acima **horasTrabalhadasPorMes**
    const valorPorHora = rendaMensal / horasTrabalhadasPorMes;

    // arredonda o valorPorHora para cima  tornando uum número inteiro
    return Math.ceil(valorPorHora);
};

console.log(calcularValorPorHora(6000));

exports.calcularValorPorHora = calcularValorPorHora;
