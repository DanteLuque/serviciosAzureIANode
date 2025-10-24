import { apiAnalisisSentimientos } from "../apis/api-analisis-sentimientos.js";


export const showUI = async (req, res) => {
  res.render('sentimientos/index',{ analysisResult: null });
};

export const analyzeSentiment = async (req, res) => {
  const { userText } = req.body;
  const result = await apiAnalisisSentimientos(userText);
  res.render('sentimientos/index', { analysisResult: result });
}