import axios from 'axios';

export const sendOrderToChat = async (chatId: string, token: string, text: string) => {
  await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
    chat_id: chatId,
    text,
    parse_mode: 'Markdown'
  });
};
