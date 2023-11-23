import React from 'react'
import "./product.css";
export const Product = ({ img, link }) => {
    return (
        <div className='p'>
            <div className='p-browser'>
                <div className='p-circle' style={{'--circle-color':'red'}} ></div>
                <div className='p-circle' style={{'--circle-color':'white'}}></div>
                <div className='p-circle' style={{'--circle-color':'black'}}></div>
            </div>
            <a href='www.google.com' target='_blank' ></a>
            <img src={img} alt='' className='p-img'></img>
        </div>
    )
}
