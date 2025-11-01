import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

export const apiChatBot = async () => {
    const endpoint = "https://directline.botframework.com/v3/directline/tokens/generate";
    const headers = {
        Authorization: `Bearer ${process.env.API_KEY_DIRECT_LINE_CHATBOT}`,
    };

    try {
        const response = await axios.post(endpoint, {}, { headers });
        return response.data;
    } catch (error) {
        console.error(
            "Error al generar token del chatbot:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};
