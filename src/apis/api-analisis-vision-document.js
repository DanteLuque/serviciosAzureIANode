import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

export const apiVisionComputacional = async (url) => {
  const endpoint = "https://senaticomputervision.cognitiveservices.azure.com/computervision/imageanalysis:analyze?features=read&model-version=latest&language=es&api-version=2024-02-01";
  const headers = {
    'Ocp-Apim-Subscription-Key': process.env.API_KEY_COMPUTER_VISION,
    'Content-Type': 'application/json'
  };
  const body = {
    "url": url
  }

  try {

    const response = await axios.post(endpoint, body, { headers });
    return response.data;

  } catch (error) {
    console.error("Error al analizar el texto de la imagen:", error.response ? error.response.data : error.message);
    throw error;
  }
}