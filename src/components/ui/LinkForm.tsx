import React from 'react'

import '../../scss/ui/form.scss'

const LinkForm = () => {
  // const [agree, setAgree] = React.useState<boolean>(false)
  const [message, setMessage] = React.useState<string>('')
  const sendForm = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (message) {
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
      } catch (error) {
        console.error(error)
      }
    }
    setMessage('')
  }
  return (
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
        placeholder='Не заполняйте это поле'
      />
      {/* <div className='form__proof' onClick={() => setAgree(!agree)}>
        {agree ? (
          <svg
            className='form_success'
            viewBox='0 0 24 24'
            fill='none'
            width='40px'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='Interface / Checkbox_Check'>
              <path
                id='Vector'
                d='M8 12L11 15L16 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z'
                stroke='#fff'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </g>
          </svg>
        ) : (
          <svg
            width='40px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='Interface / Checkbox_Unchecked'>
              <path
                id='Vector'
                d='M4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002Z'
                stroke='#fff'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </g>
          </svg>
        )}
        <p>Согласие на обработку персональных данных</p>
      </div> */}
      <button className='form__btn' onClick={(e) => sendForm(e)}>
        Отправить
      </button>
    </form>
  )
}

export default LinkForm
