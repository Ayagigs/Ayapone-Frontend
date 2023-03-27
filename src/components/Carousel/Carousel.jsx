import React from 'react';
import { Carousel } from '@material-ui/core'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import CarouselShowcase1 from '../CarouselShowcase/CarouselShowcase1'
import CarouselShowcase2 from '../CarouselShowcase/CarouselShowcase2'


this.state = {
    slides: [<CarouselShowcase1 />, <CarouselShowcase2 />],
    activeSlideIndex: 0,
};

handleChangeIndex = (index) => {
    this.setState({ activeSlideIndex: index });
    };
    
    renderSlides = () => {
        const { slides, activeSlideIndex } = this.state;
    
        return slides.map((slide, index) => (
        <div key={index} style={{ display: index === activeSlideIndex ? 'block' : 'none' }}>
            {slide}
        </div>
        ));
};

<Carousel
    index={activeSlideIndex}
    onChangeIndex={this.handleChangeIndex}
    navButtonsProps={{
        style: {
        backgroundColor: 'transparent',
        },
    }}
    >
    {this.renderSlides()}
</Carousel>


// const Carousel = () => {
//     const settings = {
//         dots: true, // show dots below the carousel
//         infinite: true, // allow infinite scrolling
//         speed: 500, // set the speed of transitions
//         slidesToShow: 1, // number of slides to show at once
//         slidesToScroll: 1 // number of slides to scroll at a time
//     };
//     return (
//         <div>
//             <Slider {...settings}>
//                 <div>
//                     <CarouselShowcase1 />
//                 </div>
//                 <div>
//                     <CarouselShowcase2 />
//                 </div>
//             </Slider>
//         </div>
//     )
// }

// export default Carousel
