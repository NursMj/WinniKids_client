import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="item">
                        <h2>Категории</h2>
                        <span className='pointer'>Мальчикам</span>
                        <span className='pointer'>Девочкам</span>
                        <span className='pointer'>Малышам</span>
                    </div>
                    <div className="item">
                    <h2>Категории</h2>
                        <span className='pointer'>Домашная</span>
                        <span className='pointer'>О нас</span>
                        <span className='pointer'>Контакты</span>
                    </div>
                    <div className="item">
                        <h2>О нас</h2>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui necessitatibus possimus maxime, dolor officia minima itaque ratione, quisquam velit sed cum consequatur quasi adipisci doloremque at quia, ab harum atque.</span>
                    </div>
                    <div className="item">
                        <h2>Контакты</h2>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui necessitatibus possimus maxime, dolor officia minima itaque ratione, quisquam velit sed cum consequatur quasi adipisci doloremque at quia, ab harum atque.</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <span className='logo'>WINNIE KIDS</span>
                        <span className='tagline'>Онлайн магазин детской одежды</span>
                    </div>
                    <div className="right">
                        <img src="/img/payment.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer