import { Link } from 'react-router-dom'
import routes from '../navigation/routes'
import NavBar from '../components/NavBar'
import Carousel from 'react-multi-carousel'
import SlideOne from '../components/home/SlideOne'
import CategoryCard from '../components/home/CategoryCard'

import phoneCat from '../assets/images/products/design_startframe.svg'
import headset from '../assets/images/products/headset.svg'
import laptop from '../assets/images/products/laptop.svg'


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

      <section className='py-[90px] px-24 flex flex-row w-full justify-center space-x-6'>
        <CategoryCard text={'Phones & Tablets'} bgColor={'ayaPrimary-100'} image={phoneCat} />
        <CategoryCard text={'Accessories'} bgColor={'ayaNeutral-100'} image={headset} scale={'scale-[1.8]'} />
        <CategoryCard text={'Laptops'} bgColor={'ayaPrimary-100'} image={laptop} scale={'scale-[1.7]'} />
      </section>

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
