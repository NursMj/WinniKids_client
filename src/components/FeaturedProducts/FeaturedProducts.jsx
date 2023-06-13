import React from 'react'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    return (
        <div className='featuredProducts'>
            <div className="container">
                <div className="top">
                    <h2>
                        {type === 'featured' ? 'Рекомендуемые' : 'Трендовые'}
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ut numquam quis blanditiis, facilis odit corrupti dolor debitis in nihil! Molestiae impedit quaerat ullam sunt vel fuga delectus, repellat ipsam.
                    </p>
                </div>
                <div className="bottom">
                    {error ?
                       'Что то пошло не так!' 
                    :
                    (loading ? 
                    'Загружается' 
                    :
                    data.map(item => <Card item={item} key={item.id}/>))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts