import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/slideProducts/product'
import './CategoryPage.css'
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading'
import PageTransition from '../../components/PageTransition'

function CategoryPage() {

    const { category } = useParams()

    const [categoryProducts, setCategoryProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setCategoryProducts(data.products)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [category])

    console.log(categoryProducts)
    return (

        <PageTransition key={category}>
            <div className="category_products">
                {loading ? (
                    <SlideProductLoading key={category} />
                ) : (
                    <div className="container">

                        <div className="top_slide">
                            <h2>{category} {categoryProducts.length}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, voluptatum</p>
                        </div>

                        <div className="products">
                            {categoryProducts.map((item, index) => (
                                <Product item={item} key={index} />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </PageTransition>
    );
}

export default CategoryPage