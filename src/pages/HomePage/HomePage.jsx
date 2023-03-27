import React from 'react';
// import Carousel from '../../components/Carousel/Carousel'
import CarouselShowcase1 from '../../components/CarouselShowcase/CarouselShowcase1';
import CarouselShowcase2 from '../../components/CarouselShowcase/CarouselShowcase2';
import NavBar from '../../components/NavBarComponent/NavBar';
import ProductsCategory from '../../components/ProductsCategory/ProductsCategory';

const HomePage = () => {
        return (
            <div>
                <NavBar />
                <CarouselShowcase1 />
                <CarouselShowcase2 />
                <ProductsCategory />
            </div>
        );
};

export default HomePage;