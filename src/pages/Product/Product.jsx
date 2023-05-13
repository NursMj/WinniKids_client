import {useState} from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'


import './Product.scss'

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const images = [
        'https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5560035/pexels-photo-5560035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]

    return (
        <div className='container'>
            <div className="product">
                <div className="left">
                    <div className="images">
                        <img 
                            className='pointer'
                            src={images[0]} 
                            alt="" 
                            onClick={() => setSelectedImg(0)}
                        />
                        <img 
                            className='pointer'
                            src={images[1]} 
                            alt="" 
                            onClick={() => setSelectedImg(1)}
                        />
                    </div>
                    <div className="mainImg">
                        <img src={images[selectedImg]} alt="" />
                    </div>
                </div>
                <div className="right">
                    <h2>Заголовок</h2>
                    <span className='price'>480 cом</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, exercitationem nisi. Asperiores praesentium illum saepe a dolores tempore nihil ut maxime modi? Ab tenetur fugit perspiciatis, velit mollitia id ipsum.</p>
                    <div className="quantity">
                        <button
                            onClick={()=> setQuantity(prev => prev != 1 ? prev - 1 : prev)}
                        >-</button>
                        <span>{quantity}</span>
                        <button
                            onClick={()=> setQuantity(prev => prev + 1)}
                        >+</button>
                    </div>
                    <button className="add">
                        <AddShoppingCartIcon /> ДОБАВИТЬ В КАРЗИНУ
                    </button>
                    <div className="links">
                        <div className="item pointer">
                            <FavoriteBorderIcon />  ДОБАВИТЬ В СПИСОК ЖЕЛАНИЙ
                        </div>
                    </div>
                    <div className="info">
                        <span>Бренд: H&M</span>
                        <span>Страна: Турция</span>
                        <span>Пол: Мальчик</span>
                        <span>Цвет: Серый</span>
                        <span>Материал: 100% хлопок</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;