import React from 'react'
import Card from '../Card/Card'

import './List.scss'

const List = () => {
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
        {
            id: 5,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 6,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 7,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 8,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 9,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 10,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 11,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 12,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 13,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
        {
            id: 14,
            img: 'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 700,
            price: 480
        },
    ]

    return (
        <div className='list'>
            {data?.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default List