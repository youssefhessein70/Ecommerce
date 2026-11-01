import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import './productDetails.css'
import SlideProduct from '../../components/slideProducts/slideProduct'

import ProductDetailsLoading from './productDetailsLoading';
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading';
import Productimages from './Productimages';
import ProductInfo from './ProductInfo';
import PageTransition from '../../components/PageTransition';




function ProductDetails() {
    const { id } = useParams()


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





    if (!Product) return <p>Product Not Found</p>

    return (
        <PageTransition key={id}>
            <div>

                {loading ? (
                    <ProductDetailsLoading />
                ) : (
                    <div className='item_details'>
                        <div className="container">
                            <Productimages Product={Product} />
                            <ProductInfo Product={Product} />
                        </div>
                    </div>
                )}



                {loadingrelatedProducts ? (
                    <SlideProductLoading />
                ) : (
                    <SlideProduct key={Product.category} data={relatedProducts} title={Product.category.replace("-", " ")} />
                )}

            </div>
        </PageTransition>
    )
}

export default ProductDetails