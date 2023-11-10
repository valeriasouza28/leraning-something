import fetch from "node-fetch";

async function getAvailableModels() {
    const apiKey = "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";
    const apiUrl = "https://api.openai.com/v1/models";

    const headers = {
        Authorization: `Bearer ${apiKey}`
    };

    try {
        const response = await fetch(apiUrl, { headers });
        const data = await response.json();
        console.log("Modelos Disponíveis:");
        console.log(data.models);
    } catch (error) {
        console.error("Erro ao obter modelos disponíveis:", error);
    }
}

// Chama a função para listar modelos disponíveis
getAvailableModels();
