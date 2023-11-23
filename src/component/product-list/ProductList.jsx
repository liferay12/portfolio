import React from 'react'
import { Product } from "../product/Product"
import "./product-list.css"
import { products } from "../../data";
export const ProductList = () => {
    return (
        <div className='pl'>
            <div className='pl-bg'></div>
            <div className='pl-texts'>
                <h1 className='pl-title'>Create & Inspire. It's Ashwani</h1>
                <p className='pl-desc'>
                    Ashwani is Creative Portfolio that your work has been waiting
                    beautifull homes, stunning Portfolio styles & a whole lot more inside.
                </p>
            </div>
            <div className='pl-list'>
                {
                    products.map((item) =>
                        <>
                            <Product key={item.id} img={item.img} link={item.link}></Product>
                        </>
                    )
                }
            </div>

        </div>
    )
}
