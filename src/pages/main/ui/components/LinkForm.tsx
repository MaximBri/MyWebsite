import { MouseEvent, useRef, useState } from 'react'

import ThanksPopUp from '@/shared/pop-ups/ThanksPopUp'
import './LinkForm.scss'

const LinkForm = () => {
  const hiddenInput = useRef(null)
  
  const [message, setMessage] = useState<string>('')
  const [popUp, setPopUp] = useState<boolean>(false)

  const sendForm = async (e: MouseEvent) => {
    e.preventDefault()
    if (message && !hiddenInput.current.value) {
      const data = await fetch('https://725148df8a039a5c.mokky.dev/token')
      if (!data.ok) {
        throw new Error(`Ошибка HTTP: ${data.status}`)
      }
      const res = await data.json()
      const { token, chat_id } = { ...res[0] }
      try {
        const text = `Сообщение: ${message}`
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id,
            text,
          }),
        })
        setMessage('')
        setPopUp(true)
        setTimeout(() => setPopUp(false), 3000)
      } catch (error) {
        console.error(error)
      }
    }
  }
  return (
    <>
      <form className='form'>
        <label htmlFor='message'>Сообщение:</label>
        <textarea
          name='message'
          placeholder='Напишите что-нибудь'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          className='form__input--hidden'
          type='text'
          ref={hiddenInput}
          placeholder='Не заполняйте это поле'
        />
        <button className='form__btn' onClick={(e) => sendForm(e)}>
          Отправить
        </button>
      </form>
      {popUp && <ThanksPopUp changeValue={setPopUp} value={popUp} />}
    </>
  )
}

export default LinkForm
