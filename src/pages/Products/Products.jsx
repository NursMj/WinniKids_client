import React, { useState } from 'react'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'

import './Products.scss'

const Products = () => {

    const categoryId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState('def')

    return (
        <div className="container">
            <div className='products'>
                <div className="left">
                    <div className="filterItem">
                        <h2>Категории</h2>
                        <div className="inputItem">
                            <input type="checkbox" value={1} id="1" />
                            <label htmlFor="1">Верх</label>
                        </div>
                        <div className="inputItem">
                            <input type="checkbox" value={2} id="2" />
                            <label htmlFor="2">Низ</label>
                        </div>
                        <div className="inputItem">
                            <input type="checkbox" value={3} id="3" />
                            <label htmlFor="3">Обувь</label>
                        </div>
                    </div>
                    <div className="filterItem">
                        <h2>Филтровать по цене</h2>
                        <div className="inputItem">
                            <span>0</span>
                            <input 
                                type="range"
                                value={maxPrice} 
                                min={0} 
                                max={5000} 
                                onChange={e => setMaxPrice(e.target.value)}
                            />
                            <span>{maxPrice}</span>
                        </div>
                    </div>
                    <div className="filterItem">
                        <h2>Сортировать</h2>
                        <div className="inputItem">
                            <input 
                                type="radio" 
                                id="def" 
                                value="def" 
                                name='sort' 
                                onChange={(e) => setSort("def")}/>
                            <label htmlFor="def">По умолчанию</label>
                        </div>
                        <div className="inputItem">
                            <input 
                                type="radio" 
                                id="asc" 
                                value="asc" 
                                name='sort' 
                                onChange={(e) => setSort("asc")}/>
                            <label htmlFor="asc">Цена (По возростанию)</label>
                        </div>
                        <div className="inputItem">
                            <input 
                                type="radio" 
                                id="desc"
                                value="desc" 
                                name='sort' 
                                onChange={(e) => setSort("desc")}/>
                            <label htmlFor="desc">Цена (По убыванию)</label>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img
                        className='categoryImg'
                        src="https://imagebee.org/wwide/cute-desktop-wallpapers/girl_and_dog-wallpapers/girl_and_dog-wallpaper-1024x576.jpg" 
                        alt="" 
                    />
                    <List categoryId={categoryId} maxPrice={maxPrice} sort={sort}/>
                </div>
            </div>
        </div>
    )
}

export default Products