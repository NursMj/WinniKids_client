import React from 'react'
import { Link } from 'react-router-dom'

import './Card.scss'

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className='link'>
        <div className='card-item'>
            <div className="image">
                {item.isNew && <span>Новинка</span>}
                <img src={item.img} alt="" className="mainImage" />
                <img src={item.img2} alt="" className="secondImage" />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>{item.oldPrice} сом</h3>
                <h3>{item.price} сом</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card