export const sendMessageInTg = async (
  text: string
) => {
  return await fetch('/api/send/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
    }),
  })
}
