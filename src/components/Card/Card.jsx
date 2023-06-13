import React from 'react'
import { Link } from 'react-router-dom'

import './Card.scss'

const Card = ({item}) => {
  const url = import.meta.env.VITE_REACT_APP_UPLOAD_URL

  return (
    <Link to={`/product/${item.id}`} className='link'>
        <div className='card-item'>
            <div className="image">
                {item?.attributes.isNew && <span>Новинка</span>}
                <img src={url + item.attributes.img.data.attributes.url} alt="" className="mainImage" />
                <img src={url + item.attributes.img2.data.attributes.url} alt="" className="secondImage" />
            </div>
            <h2>{item?.attributes.title}</h2>
            <div className="prices">
                <h3>{item?.attributes.oldPrice || Math.floor(item?.attributes.price * .13) * 10} сом</h3>
                <h3>{item?.attributes.price} сом</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card