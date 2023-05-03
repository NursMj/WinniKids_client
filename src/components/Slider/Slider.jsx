import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West'
import EastIcon from '@mui/icons-material/East'

import './Slider.scss'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        'https://images.pexels.com/photos/14930452/pexels-photo-14930452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/47220/shoes-pregnancy-child-clothing-47220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : prev => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : prev => prev + 1)
    }


    const style = {
        transform: `translateX(-${currentSlide * 100}vw)`,
    }

    return (
        <div className='slider'>
            <div className="wrapper" style={style}>
                {data.map(url => {
                    return <img src={url} alt='' />
                })}
            </div>
            <div className="slider_btns">
                <div 
                    className="slider_btn pointer" 
                    onClick={prevSlide}>
                    <WestIcon />
                </div>
                <div 
                    className="slider_btn pointer" 
                    onClick={nextSlide}>
                    <EastIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider