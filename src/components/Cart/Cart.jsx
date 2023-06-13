import React from 'react'
import { useSelector } from 'react-redux'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useDispatch } from 'react-redux'
import { removeFromCart, resetCart } from '../../redux/cartReducer.js'
import {loadStripe} from '@stripe/stripe-js'
import {makeRequest} from '../../makeRequest.js'

import './Cart.scss'

const Cart = () => {
    const products = useSelector(state=>state.cart.products)
    const dispatch = useDispatch()

    const getTotal = () => {
        let total = 0
        products.forEach(item => (total += item.quantity * item.price))
        return total.toFixed(2)
    }

    const stripePromise = loadStripe('pk_test_51NICsFKpDIuvfP7YBzpxYMlMXJB6fKPpDEniAz3KRTLgvNJllky4UwRgGNrO5kO1z7ayWsWbH3s0R4NMAfBNS12Q004Gt4ffkz')

    const handlePayment = async () => {
        try {
            const stipe = await stripePromise
            const res = await makeRequest.post('/orders', {
                products,
            })

            await stipe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <div className='cart'>
        <h2>Товары в вашей корзине</h2>
        <div className="cartList">
            {products.length === 0 && <span>Ваша корзина пока пуста</span>}
            {products?.map(item => (
                <div className="item" key={item.id}>
                    <img src={ item.img} alt="" />
                    <div className="details">
                        <h3>{item.title}</h3>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className='price'>{item.quantity} x {item.price} сом</div>
                    </div>
                    <DeleteOutlineIcon 
                        className='delete pointer'
                        onClick={() => dispatch(removeFromCart(item.id))}
                    />
                </div>
            ))}
        </div>
        <div className="total">
            <span>Итого</span>
            <span>{getTotal()} сом</span>
        </div>
        <button onClick={handlePayment}>Перейти к оплате</button>

        <span 
            className="reset pointer"
            onClick={() => dispatch(resetCart())}
        >Очистить корзину</span>
    </div>
  )
}

export default Cart