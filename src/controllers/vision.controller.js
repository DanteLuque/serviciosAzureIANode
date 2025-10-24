import { apiVisionComputacional } from "../apis/api-analisis-vision-document.js";

export const showUI = async (_, res) => {
  res.render('vision/index', { analysisResult: null });
};

export const analyzeVision = async (req, res) => {
  const { urlText } = req.body;
    const result = await apiVisionComputacional(urlText);
    res.render('vision/index', { analysisResult: result });
}