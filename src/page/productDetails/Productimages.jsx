import React from 'react'

function Productimages({ Product }) {
    return (
        <div className="imgs_item">
            <div className="big_img">
                <img id='big-img' src={Product.images[0]} alt={Product.title} />

            </div>
            <div className="sm_img">
                {Product.images.map((img, index) => (
                    <div className="img_div_sm" key={index}>
                        <img src={img} alt={Product.title} onClick={() => document.getElementById("big-img").src = img} />

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Productimages