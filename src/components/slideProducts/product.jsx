import React from 'react'
import { FaStar, FaRegStarHalfStroke } from 'react-icons/fa6';
import { FaCartArrowDown, FaRegHeart, FaShare, FaCheck } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';

function Product({ item }) {

    const navigate = useNavigate()
    const { cartItems, addToCart } = useContext(CartContext)

    const isInCart = cartItems.some(i => i.id === item.id)

    const handelAddToCart = () => {
        addToCart(item)

        toast.success(
            <div className="toast-wrapper">
                <img src={item.images[0]} alt='toast-img' className='toast-img' />
                <div className="toast-content">
                    <strong>{item.title}</strong>
                    added to Cart
                    <div>
                        <button className='btn' onClick={() => navigate('/cart')}>View Cart</button>
                    </div>
                </div>
            </div>
            , { duration: 3500 }
        )
    }

    return (
        <div className={`product ${isInCart ? 'in-cart' : ''}`}>
            <Link to={`/products/${item.id}`}>

                <span className='status_cart'> <FaCheck /> in cart</span>


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
                    <span className='btn_addtocart' onClick={() => handelAddToCart()}><FaCartArrowDown /></span>
                    <span><FaRegHeart /></span>
                    <span><FaShare /></span>
                </div>
            </Link>
        </div>
    )
}

export default Product;