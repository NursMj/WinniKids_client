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
              <img width={'30'} src="/img/rus.png" alt="" />
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
            <Link className='link' to="/">Winnie kids</Link>
          </div>
          <div className="right">
            <div className="item">
              <Link className='link' to="/">Home</Link>
            </div>
            <div className="item">
              <Link className='link' to="/">About</Link>
            </div>
            <div className="item">
              <Link className='link' to="/">Contact</Link>
            </div>
            <div className="icons">
              <SearchIcon/>
              <PersonOutlineIcon/>
              <FavoriteBorderOutlinedIcon/>
              <div className="cartIcon">
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