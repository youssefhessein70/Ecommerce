import React from 'react'
import { FaStar, FaRegStarHalfStroke } from 'react-icons/fa6';
import { FaCartArrowDown, FaRegHeart, FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Product({ item }) {
    console.log(item);
    return (
        <div className='product'>
            <Link to={`products/${item.id}`}>
                <div className="img_product">
                    <img src={item.images[0]} alt='img_product' />
                </div>
                <p className='name_product'>{item.title}</p>
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStarHalfStroke />
                </div>
                <p className='price'><span>$ {item.price}</span></p>

                <div className="icons">
                    <span><FaCartArrowDown /></span>
                    <span><FaRegHeart /></span>
                    <span><FaShare /></span>
                </div>
            </Link>
        </div>
    )
}

export default Product;