import React, { useContext } from 'react'
import { FaRegHeart, FaRegStarHalfStroke, FaShare, FaStar } from 'react-icons/fa6'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../components/context/CartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ProductInfo({ Product }) {

    const { cartItems, addToCart } = useContext(CartContext)
    const isInCart = cartItems.some(i => i.id === Product.id)

    const navigate = useNavigate()

    const handelAddToCart = () => {
        addToCart(Product)

        toast.success(
            <div className="toast-wrapper">
                <img src={Product.images[0]} alt='toast-img' className='toast-img' />
                <div className="toast-content">
                    <strong>{Product.title}</strong>
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

        <div className="details_item">
            <h1 className='name'> {Product.title}</h1>
            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
            </div>
            <p className='price'>$ {Product.price}</p>
            <h5>Availability: <span>{Product.availabilityStatus}</span> </h5>
            <h5>Brand: <span>{Product.brand}</span></h5>
            <p className='desc'>{Product.description}</p>
            <h5 className='stock'><span>Hurry Up! Only {Product.stock} products left in stock</span></h5>

            <button onClick={handelAddToCart} className={`btn ${isInCart ? 'in-cart' : ''}`}>
                {isInCart ? 'Item In Cart' : 'Add to cart'} <TiShoppingCart />
            </button>

            <div className="icons">

                <span><FaRegHeart /></span>
                <span><FaShare /></span>
            </div>
        </div>
    )
}

export default ProductInfo