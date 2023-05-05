import React from 'react'

import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="my-col">
            <div className="my-row">
                
                    <img src="https://images.pexels.com/photos/10925186/pexels-photo-10925186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Новинки</Link>
                    </button>
            </div>
            <div className="my-row">
                
                    <img src="https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Девочкам</Link>
                    </button>
            </div>
        </div>
        <div className="my-col">
            <div className="my-row">
                
                    <img src="https://images.pexels.com/photos/3771679/pexels-photo-3771679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Скидки</Link>
                    </button>
            </div>
        </div>
        <div className="my-col my-col-l">
            <div className="my-row">
                <div className="my-col">
                    <div className="my-row">
                        
                            <img src="https://images.pexels.com/photos/5693888/pexels-photo-5693888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button>
                                <Link className='link' to='/products/1'>Мальчикам</Link>
                            </button>
                        
                    </div>
                </div>
                <div className="my-col">
                    <div className="my-row">
                        
                            <img src="https://images.pexels.com/photos/4715311/pexels-photo-4715311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button>
                                <Link className='link' to='/products/1'>В наличии</Link>
                            </button>
                        
                    </div>
                </div>
            </div>
            <div className="my-row">
                    <img src="https://image.hm.com/content/dam/global_campaigns/season_07/baby/4107-parenthood/editorial-hub/4107b-newborn-checklist/4107B-edi-newborn-checklist-16x9.jpg?imwidth=2160" alt="" />
                    <button className='pointer'>
                        <Link className='link' to='/products/1'>Малышам</Link>
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Categories