import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <div className="item">
              <img src="/img/rus.png" alt="" />
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <Link className='link' to="/products/1">Мальчикам</Link>
            </div>
            <div className="item">
              <Link className='link' to="/products/2">Девочкам</Link>
            </div>
            <div className="item">
              <Link className='link' to="/products/3">Малышам</Link>
            </div>
          </div>
          <div className="center">
            <Link className='link' to="/">WINNIE KIDS</Link>
          </div>
          <div className="right">
            <div className="item">
              <Link className='link' to="/">Домашная</Link>
            </div>
            <div className="item">
              <Link className='link' to="/">О нас</Link>
            </div>
            <div className="item">
              <Link className='link' to="/">Контакты</Link>
            </div>
            <div className="icons">
              <SearchIcon className='pointer'/>
              <PersonOutlineIcon className='pointer'/>
              <FavoriteBorderOutlinedIcon className='pointer'/>
              <div className="cartIcon pointer">
                <ShoppingCartOutlinedIcon/>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header