import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import CallIcon from '@mui/icons-material/Call'

import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>БУДЬТЕ С НАМИ НА СВЯЗИ:</span>
            <div className="mail">
                <input type="text" placeholder='Введите ваш email...'/>
                <button>Присоединяйтесь</button>
            </div>
            <div className="icons">
                <InstagramIcon className='pointer' titleAccess='Instagram'/>
                <WhatsAppIcon className='pointer' titleAccess='WhatsApp'/>
                <TelegramIcon className='pointer' titleAccess='Telegram'/>
                <CallIcon className='pointer' titleAccess='Call'/>
            </div>
        </div>
    </div>
  )
}

export default Contact