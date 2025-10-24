import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

export const apiAnalisisSentimientos = async (text) => {
  const endpoint = "https://senatiservicioslenguaje.cognitiveservices.azure.com/language/:analyze-text?api-version=2024-11-01";
  const headers = {
    'Ocp-Apim-Subscription-Key': process.env.API_KEY_SENTIMIENTOS,
    'Content-Type': 'application/json'
  };
  const body = {
    "kind": "SentimentAnalysis",
    "parameters": {
      "modelVersion": "latest",
      "opinionMining": "False"
    },
    "analysisInput": {
      "documents": [
        {
          "id": "1",
          "language": "es",
          "text": text
        }
      ]
    }
  }

  try {

    const response = await axios.post(endpoint, body, { headers });
    return response.data;

  } catch (error) {
    console.error("Error al analizar el sentimiento:", error.response ? error.response.data : error.message);
    throw error;
  }
}