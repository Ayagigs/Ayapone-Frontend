import { Link } from 'react-router-dom'
import routes from '../navigation/routes'
import NavBar from '../components/NavBar'
import Carousel from 'react-multi-carousel'
import SlideOne from '../components/home/SlideOne'

const HomePage = () => {
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
    <main>
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
      home page
      <br /><br /><br />
      <Link to={routes.BUYER_SIGN_UP_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Buyer Sign Up</Link>
      <br /><br />
      <Link to={routes.BUYER_SIGN_IN_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Buyer Sign In</Link>
      <br /><br />
      <Link to={routes.BUYER_DASHBOARD_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Buyer Dashboard</Link>
      <br /><br /><br /><br />
      <Link to={routes.MERCHANT_SIGN_IN_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Merchant Sign In</Link>
      <br /><br />
      <Link to={routes.MERCHANT_SIGN_UP_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Merchant Sign Up</Link>
      <br /><br />
      <Link to={routes.MERCHANT_DASHBOARD_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Merchant Dashboard</Link>
      <br /><br />
      <Link to={routes.FORGOT_PASSWORD_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Forgot password</Link>
      <br /><br /><br /><br />
      <Link to={routes.CREATE_PASSWORD_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Create new password</Link>
    </main>
  );
};

export default HomePage;
