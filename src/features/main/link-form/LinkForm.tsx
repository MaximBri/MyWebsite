import { MouseEvent, useRef, useState } from 'react'

import { useMainContext } from '@/app/context/MainContext'
import { sendMessageInTg } from '@/shared/utils/sendMessageInTg'
import ThanksPopUp from '@/widgets/pop-ups/thanks/ThanksPopUp'
import loaderSvg from './icons/loader.svg'
import './LinkForm.scss'
import Image from 'next/image'
import { createPortal } from 'react-dom'

export const LinkForm = () => {
  const { chatId, token } = useMainContext()

  const hiddenInput = useRef<HTMLInputElement>(null)

  const [message, setMessage] = useState<string>('')
  const [popUp, setPopUp] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const sendForm = async (e: MouseEvent) => {
    e.preventDefault()
    if (message && !hiddenInput.current?.value && !loading && chatId && token) {
      setLoading(true)
      try {
        const text = `Сообщение: ${message}`
        await sendMessageInTg(chatId, token, text)
        setMessage('')
        setPopUp(true)
        setTimeout(() => setPopUp(false), 3000)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
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
          disabled={loading}
        />
        <button
          className='form__btn'
          onClick={(e) => sendForm(e)}
          disabled={loading || !message}
        >
          {loading ? (
            <Image
              src={loaderSvg}
              width={35}
              height={35}
              className='form__loader'
              alt='loading'
            />
          ) : (
            'Отправить'
          )}
        </button>
      </form>
      {popUp &&
        createPortal(
          <ThanksPopUp changeValue={setPopUp} value={popUp} />,
          document.body
        )}
    </>
  )
}
