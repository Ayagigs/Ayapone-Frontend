import React from 'react'
import './CarouselShowcase1.css'
import Laptop_image from '../../assets/image 20.svg'

const CarouselShowcase1 = () => {
    return (
        <div>
            <header className="carousel-header">
                <div className="left-container">
                    <p>Discover the new</p>
                    <h1>Macbook Pro 16” </h1>
                    <button className="shop-now-btn">Shop Now</button>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
                <div>
                    <img src={Laptop_image} />
                </div>
            </header>
        </div>
    )
}

export default CarouselShowcase1