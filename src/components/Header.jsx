import NavBar from '../components/NavBar'
import Carousel from 'react-multi-carousel'
import SlideOne from './home/slides/SlideOne'
import SlideTwo from './home/slides/SlideTwo'
import SlideThree from './home/slides/SlideThree'
import SlideFour from './home/slides/SlideFour'

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
      <section className='min-h-[550px] select-none bg-ayaNeutral-100'>
        <Carousel {...options}>
          <div className='pt-12 px-24'>
            <SlideOne />
          </div>
          <SlideTwo />
          <div className='pt-12 px-24'>
            <SlideThree />
          </div>
          <SlideFour />
        </Carousel>
      </section>
    </header>
  )
}

export default Header
