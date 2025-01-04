import './ThanksPopUp.scss'

const ThanksPopUp = ({ changeValue, value }) => {
  return (
    <section className='popUp' onClick={() => changeValue(!value)}>
      <div className='popUp__body'>
        <button onClick={() => changeValue(!value)} className='popUp__close'>
          <div></div>
          <div></div>
        </button>
        <h2 className='popUp__text'>Спасибо за обратную связь!</h2>
      </div>
    </section>
  )
}

export default ThanksPopUp
