export const getWorks = async () => {
  const data = await fetch('https://725148df8a039a5c.mokky.dev/works')
  if (!data.ok) {
    throw new Error(`Ошибка HTTP: ${data.status}`)
  }
  return await data.json()
}
