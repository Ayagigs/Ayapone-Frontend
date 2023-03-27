import React from 'react'
import './CarouselShowcase2.css'
import Shopper_image from '../../assets/132 1.svg'

const CarouselShowcase2 = () => {
    return (
        <div>
            <div className="hero-slider-container">
                <div>
                    <p>SHOP WITH AYAPONE</p>
                    <h2>EXCLUSIVE SALES<br /> ON GADGETS</h2>
                    <button className="hero-slider-btn">Shop Now</button>
                </div>
                <div className="hero-slider-image">
                    <img src={Shopper_image} />
                </div>
                <div class="right-header">
                    <h2>
                        <span className="white">UP TO</span>
                        <br />
                        <span class="white bigger">20%</span>
                        <br />
                        <span class="pink">OFF</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default CarouselShowcase2