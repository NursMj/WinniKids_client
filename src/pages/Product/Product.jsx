import {useState} from 'react'
import { useParams } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer.js'

import './Product.scss'

const Product = () => {
    const url = import.meta.env.VITE_REACT_APP_UPLOAD_URL
    const id = useParams().id
    const [selectedImg, setSelectedImg] = useState('img')
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const {data, loading, error} = useFetch(`/products/${id}?populate=*`)

    const handleAdd = () => {
        dispatch(addToCart({
            id: data.id,
            title: data.attributes.title,
            des: data.attributes.desc,
            price: data.attributes.price,
            img: url + data?.attributes?.img?.data?.attributes?.url,
            quantity: quantity
        }))
    }

    return (
        <div className='container'>
            <div className="product">
                {loading 
                    ? 'Загружается...'
                    : (<><div className="left">
                    <div className="images">
                        <img 
                            className='pointer'
                            src={url + data?.attributes?.img?.data?.attributes?.url} 
                            alt="" 
                            onClick={() => setSelectedImg('img')}
                        />
                        <img 
                            className='pointer'
                            src={url + data?.attributes?.img2?.data?.attributes?.url} 
                            alt="" 
                            onClick={() => setSelectedImg('img2')}
                        />
                    </div>
                    <div className="mainImg">
                        <img src={url + data?.attributes?.[selectedImg]?.data?.attributes?.url}  alt="" />
                    </div>
                </div>
                <div className="right">
                    <h2>{data?.attributes?.title}</h2>
                    <span className='price'>{data?.attributes?.price}</span>
                    <p>{data?.attributes?.desc}</p>
                    <div className="quantity">
                        <button
                            onClick={()=> setQuantity(prev => prev != 1 ? prev - 1 : prev)}
                        >-</button>
                        <span>{quantity}</span>
                        <button
                            onClick={()=> setQuantity(prev => prev + 1)}
                        >+</button>
                    </div>
                    <button 
                        className="add"
                        onClick={handleAdd}
                    >
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
                </div></>)}
            </div>
        </div>
    );
};

export default Product;