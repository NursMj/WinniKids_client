import React, { useState } from 'react'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch.js'

import './Products.scss'

const Products = () => {
    const categoryId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState('asc')
    const [selectedSubCats, setSelectedSubCats] = useState([])

    const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${categoryId}`)

    const handleChange = (e) => {
        const value = e.target.value
        const isChecked = e.target.checked
        setSelectedSubCats(
            isChecked
                ? [...selectedSubCats, value]
                : selectedSubCats.filter((item) => item !== value)
        )
    }

    return (
        <div className="container">
            <div className='products'>
                <div className="left">
                    <div className="filterItem">
                        <h2>Категории</h2>
                        {data.map((item) => (
                            <div className="inputItem" key={item.id}>
                                <input type="checkbox" value={item.id} id={item.id} onChange={handleChange}/>
                                <label htmlFor={item.id}>{item.attributes.title}</label>
                            </div>
                        ))}
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
                    <List 
                        catId={categoryId} 
                        maxPrice={maxPrice} 
                        sort={sort} 
                        subCats={selectedSubCats}
                    />
                </div>
            </div>
        </div>
    )
}

export default Products