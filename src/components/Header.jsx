import NavBar from '../components/NavBar'
import Carousel from 'react-multi-carousel'
import SlideOne from '../components/home/SlideOne'

const Header = () => {
  const responsive = {
    allBreakPoints: {
      breakpoint: { max: 40000, min: 0 },
      items: 1,
    },
  }

  const options = {
    autoPlay: true,
    rewind: true,
    rewindWithAnimation: true,
    swipeable: true,
    draggable: true,
    showDots: true,
    arrows: false,
    responsive,
    children: null,
    autoPlaySpeed: 6000,
  }
  
  return (
    <header className=''>
      <NavBar />
      <section className='min-h-[550px] pt-12 px-24 select-none bg-ayaNeutral-100'>
        <Carousel {...options}>
          <SlideOne />
          <SlideOne />
          <SlideOne />
        </Carousel>
      </section>
    </header>
  )
}

export default Header
