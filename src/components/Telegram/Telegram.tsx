import telegram from '../../assets/telegram.svg'

import './styles.css'

export const Telegram = () => {
  return (
    <div className="telegram">
      <a href='https://t.me/ch_ou'>
        <img src={telegram} alt="telegram" />
      </a>
    </div>
  )
}