import React from 'react'

import './Categories.scss'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="row">
            <div className="col-3">
                <div className="row">
                    <div className="item">item</div>
                </div>
                <div className="row">
                    <div className="item">item</div>
                </div>
            </div>
            <div className="col-3">
                <div className="item">item</div>
            </div>
            <div className="col-6">
                <div className="row top_row">
                    <div className="col-6">
                        <div className="item">item</div>
                    </div>
                    <div className="col-6">
                        <div className="item">item</div>
                    </div>
                </div>
                <div className="row">
                    <div className="item">item</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories