const DIAS_UTEIS_NO_MES = 22;
const HORAS_POR_DIA = 8;

const MAX_HORAS_POR_PACOTE = {
    pacote_basico: 50,
    pacote_intermediario: 100,
    pacote_premium: 200
};

const TAXAS_CONTRATUAIS_POR_PACOTE = {
    pacote_basico: 1.1, // 10%
    pacote_intermediario: 1.2, // 12%
    pacote_premium: 1.5 // 15%
};

const HORAS_POR_FUNCIONALIDADE = {
    setup: 8,
    formulario: 16,
    responsividade: 16,
    otimizacao_seo: 16,
    construcao_1_pagina: 8,
    integracao_mailchimp: 16,
    ssr: 8,
    integracao_api_propria: 16
};

module.exports = {
    DIAS_UTEIS_NO_MES,
    HORAS_POR_DIA,
    HORAS_POR_FUNCIONALIDADE,
    MAX_HORAS_POR_PACOTE,
    TAXAS_CONTRATUAIS_POR_PACOTE
};

const calcularValorPorHora = rendaMensal => {
    const horasTrabalhadasPorMes = HORAS_POR_DIA * DIAS_UTEIS_NO_MES;
    const valorPorHora = rendaMensal / horasTrabalhadasPorMes;

    return Math.ceil(valorPorHora);
};

const calcularHorasDeProjeto = listaDeFuncionalidades =>
    listaDeFuncionalidades
        .map(func => HORAS_POR_FUNCIONALIDADE[func])
        .reduce((sum, currentValue) => sum + currentValue, 0);

const calcularPacote = totalDeHorasPorProjeto =>
    Object.entries(MAX_HORAS_POR_PACOTE).find(
        ([key, value]) => value > totalDeHorasPorProjeto
    )[0];

const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
    return totalDeHorasPorProjeto * valorHora;
};

const calcularValorTotalProjeto = (funcionalidades, valorHora) => {
    const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);

    const pacote = calcularPacote(totalDeHorasPorProjeto);

    const valorBase = calcularValorBaseProjeto(
        totalDeHorasPorProjeto,
        valorHora
    );

    return Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacote]);
};
