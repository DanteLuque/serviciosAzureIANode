import { apiChatBot } from "../apis/api-chatbot.js";

export const showUI = async (_, res) => {
    const data = await apiChatBot();
    const botToken = data.token;
    res.render("chat/index", { botToken });
};