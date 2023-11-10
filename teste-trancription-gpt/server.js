import http from "http";
import fetch from "node-fetch";
import fs from "node:fs";

// Sua chave de API do ChatGPT
const apiKey = "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";

// Caminho para o arquivo de áudio
const audioFilePath = "./example.mp3";

async function convertAudioToText() {
    try {
        // Lê o arquivo de áudio como um buffer
        const audioData = fs.readFileSync(audioFilePath);

        // Converte o buffer para base64
        const audioBase64 = audioData.toString("base64");

        // Configuração da solicitação para a API do ChatGPT
        const apiUrl = "https://api.openai.com/v1/audio/transcriptions";
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`
        };
        const requestBody = JSON.stringify({
            audio: audioBase64,
            model: "whisper-1",
            language: "pt-BR", // Idioma do áudio (altere conforme necessário)
            response_format: "json"
        });

        // Faz a solicitação POST para a API do ChatGPT
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: headers,
            body: requestBody
        });

        // Verifica se a solicitação foi bem-sucedida
        if (response.status === 200) {
            const data = await response.json();
            // A transcrição do áudio estará em data.text
            console.log("Transcrição do Áudio:");
            console.log(data.text);
        } else {
            console.error("Erro ao converter áudio em texto:", response.status);
            console.error(await response.text());
        }
    } catch (error) {
        console.error("Erro ao processar o áudio:", error);
    }
}

const port = 3335;

// Crie um servidor HTTP simples
const server = http.createServer((req, res) => {
    if (req.url === "/transcription" && req.method === "POST") {
        // Lógica para lidar com a solicitação POST
        // Chama a função para converter o áudio em texto
        convertAudioToText()
            .then(() => {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("Transcrição concluída.");
            })
            .catch(error => {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(`Erro: ${error.message}`);
            });
    } else {
        // Rota desconhecida ou método de solicitação
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

// Inicie o servidor na porta especificada
server.listen(port, () => {
    console.log(`Servidor HTTP está ouvindo na porta ${port}`);
});
