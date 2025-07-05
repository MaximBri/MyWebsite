export const sendMessageInTg = async (
  chatId: string,
  token: string,
  text: string
) => {
  return await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  })
}
