import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import './Cart.scss'

const Cart = () => {

    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            desc: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            desc: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
    ]

    return (
    <div className='cart'>
        <h2>Товары в вашей корзине</h2>
        <div className="cartList">
            {data?.map(item => (
                <div className="item">
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h3>{item.title}</h3>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className='price'>1 x {item.price} сом</div>
                    </div>
                    <DeleteOutlineIcon className='delete pointer'/>
                </div>
            ))}
        </div>
        <div className="total">
            <span>Итого</span>
            <span>480 сом</span>
        </div>
        <button>Перейти к оплате</button>

        <span className="reset pointer">Очистить корзину</span>
    </div>
  )
}

export default Cart