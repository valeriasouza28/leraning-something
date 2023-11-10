const { HORAS_POR_FUNCIONALIDADE } = require("../constantes/constantes");

const calcularHorasDeProjeto = listaDeFuncionalidades => {
    const horasTotais = listaDeFuncionalidades
        .map(func => HORAS_POR_FUNCIONALIDADE[func])
        .reduce((sum, currentValue) => sum + currentValue, 0);

    return horasTotais;
};

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;

// Chamada da função
const listaDeFuncionalidades = [
    "funcionalidade1",
    "funcionalidade2",
    "funcionalidade3"
];
const totalHoras = calcularHorasDeProjeto(listaDeFuncionalidades);

console.log("Total de horas do projeto:", totalHoras);
