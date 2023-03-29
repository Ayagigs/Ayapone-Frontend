import { Link } from 'react-router-dom'
import routes from '../navigation/routes'
import NavBar from '../components/NavBar'
import Carousel from 'react-multi-carousel'
import SlideOne from '../components/home/SlideOne'
import CategoryCard from '../components/home/CategoryCard'

import phoneCat from '../assets/images/products/design_startframe.svg'
import headset from '../assets/images/products/headset.svg'
import laptop from '../assets/images/products/laptop.svg'
import watches from '../assets/images/products/watches.svg'


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

      <section className='py-[90px] px-24 flex flex-row w-full justify-center space-x-6 bg-ayaNeutral-100'>
        <div className='grid grid-cols-1 md:grid-cols-2 max-h-min'>
          <div>
            <header className='font-semibold md:mt-12'>
              <h2 className='leading-10 md:leading-[3.1rem] text-ayaNeutral-600 text-2xl font-medium'>
                Best Deals!
              </h2>
              <h1 className='leading-10 md:leading-[3.1rem] text-ayaNeutral-900 text-5xl pb-4'>
                Galaxy Watch5
              </h1>
              <p className='font-normal text-base max-w-[452px]'>
                Find your starting line with Auto Workout Tracking and BioActive Sensor to help see improvement with every movement.</p>
            </header>

            <div className='mt-8 space-x-6'>
              <Link
                to={routes.BUYER_SIGN_IN_PAGE}
                type='button'
                className='p-3 rounded-lg bg-ayaPrimary-600 text-white'
              >
                Shop Now
              </Link>
              <Link
                to={routes.BUYER_SIGN_IN_PAGE}
                type='button'
                className='p-3 rounded-lg border border-ayaPrimary-600 bg-ayaPrimary-100 text-ayaPrimary-600'
              >
                Add to Cart
              </Link>
            </div>
          </div>

          <div>
            <img
              className='place-self-center'
              src={watches}
              alt=''
            />
            <div className='flex flex-row justify-center text-center space-x-8 mt-4 text-ayaNeutral-700 font-medium'>
              <div className='flex flex-col items-center space-y-4'>
                <span className='border border-ayaNeutral-700 h-20 w-20 rounded-full text-2xl py-6'>03</span>
                <span className='text-lg'>DAYS</span>
              </div>
              <div className='flex flex-col justify-center space-y-4'>
                <span className='border border-ayaNeutral-700 h-20 w-20 rounded-full text-2xl py-6'>04</span>
                <span className='text-lg'>HOURS</span>
              </div>
              <div className='flex flex-col justify-center space-y-4'>
                <span className='border border-ayaNeutral-700 h-20 w-20 rounded-full text-2xl py-6'>54</span>
                <span className='text-lg'>MINUTES</span>
              </div>
            </div>

          </div>
        </div>
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
