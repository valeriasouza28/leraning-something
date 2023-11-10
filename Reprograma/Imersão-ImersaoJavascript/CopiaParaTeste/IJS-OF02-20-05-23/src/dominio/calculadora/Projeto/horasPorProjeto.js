// *****Código Original*****

// volta uma pasta  entra na pasta contanste e importa do arquivo constantes a constante **HORAS_POR_FUNCIONALIDADE** uma lista  de obejetos que tem como chave o nome  da funcinalidade e como valor as horas de duração de cad funcionalidade
const { HORAS_POR_FUNCIONALIDADE } = require("../constantes/constantes");

// cria constante calcularHorasPorProjeto que recebe  uma  arrow function que tem como parâmetro listaDeFuncionalidades
const calcularHorasDeProjeto = listaDeFuncionalidades =>
    // Usamos **.map** para percorrer cada elemento da listaDeFuncionalidades.
    // E para cada elemento da **listaDeFuncionalidades** estamos acessando o valor  correspondente no objeto HORAS_POR_FUNCIONALIDADE usando o elemeto como chave.
    // Isso retornará um novo array coma as horas correspondentes a cada funcionalidade.
    listaDeFuncionalidades
        .map(func => HORAS_POR_FUNCIONALIDADE[func])
        // Usando o método **reduce** para somar todas as horas do array retornado no pelo método **map** o reduce acumula os valores do array iniciando com 0 (último aragumaneto) e sommando cada elemento ao acumulador **sum**
        .reduce((sum, currentValue) => sum + currentValue, 0);

// chamamos a função **calcularHorasDeProjeto** e passamos como argumento  para ela uma array com uma lista de funcionalidades que contém dentro do arquivo constantes na constante **HORAS_POR_FUNCIONALIDADE** identificando as pela chave do  objetos.
console.log(
    calcularHorasDeProjeto([
        "setup",
        "construcao_1_pagina",
        "ssr",
        "otimizacao_seo",
        "responsividade",
        "formulario"
    ])
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
