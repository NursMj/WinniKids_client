import React from 'react'
import Card from '../Card/Card'

import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
    ]

    return (
        <div className='featuredProducts'>
            <div className="container">
                <div className="top">
                    <h2>{type} products</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ut numquam quis blanditiis, facilis odit corrupti dolor debitis in nihil! Molestiae impedit quaerat ullam sunt vel fuga delectus, repellat ipsam.
                    </p>
                </div>
                <div className="bottom">
                    {data.map(item => {
                        return <Card item={item} key={item.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts