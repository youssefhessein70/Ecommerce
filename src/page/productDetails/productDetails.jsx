import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaRegStarHalfStroke, FaShare, FaStar } from 'react-icons/fa6';
import { useParams } from 'react-router-dom'
import './productDetails.css'
import SlideProduct from '../../components/slideProducts/slideProduct'
import { TiShoppingCart } from 'react-icons/ti';

function ProductDetails() {
    const { id } = useParams()
    console.log(id);

    const [Product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const [relatedProducts, setRelatedProducts] = useState([])
    const [loadingrelatedProducts, setLoadingRelatedProducts] = useState([])


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setProduct(data)

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }


        }
        fetchProduct()
    }, [id])

    useEffect(() => {
        if (!Product) return
        fetch(`https://dummyjson.com/products/category/${Product.category}`)
            .then((res) => res.json())
            .then((data) => {
                setRelatedProducts(data.products)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoadingRelatedProducts(false))
    }, [Product?.category])

    console.log(Product);
    console.log(relatedProducts);


    if (loading) return <p>Loading....</p>
    if (!Product) return <p>Product Not Found</p>

    return (
        <div>
            <div className='item_details'>
                <div className="container">

                    <div className="imgs_item">
                        <div className="big_img">
                            <img id='big-img' src={Product.images[0]} alt={Product.title} />

                        </div>
                        <div className="sm_img">
                            {Product.images.map((img, index) => (
                                <div className="img_div_sm">
                                    <img key={index} src={img} alt={Product.title} onClick={() => document.getElementById("big-img").src = img} />

                                </div>
                            ))}

                        </div>
                    </div>

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

                        <button className='btn'>
                            Add to cart <TiShoppingCart />
                        </button>

                        <div className="icons">

                            <span><FaRegHeart /></span>
                            <span><FaShare /></span>
                        </div>
                    </div>
                </div>


            </div>

            {loadingrelatedProducts ? (
                <p>Loading...</p>
            ) : (
                <SlideProduct key={Product.category} data={relatedProducts} title={Product.category.replace("-", " ")} />
            )}

        </div>
    )
}

export default ProductDetails