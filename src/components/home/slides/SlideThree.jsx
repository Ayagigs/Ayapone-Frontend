import { Link } from 'react-router-dom'
import HeroImage from '../../../assets/images/slides/hero_image_01.svg'
import routes from '../../../navigation/routes'

const SlideThree = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 max-h-min pt-24 pb-14'>
      <div>
        <header className='font-semibold md:mt-12'>
          <h2 className='leading-10 md:leading-[3.1rem] text-ayaNeutral-600 text-[34px] font-medium'>
            Discover the new
          </h2>
          <h1 className='leading-10 md:leading-[3.1rem] text-ayaNeutral-900 text-6xl'>
            Macbook Pro 16”
          </h1>
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

      <img
        className='place-self-center '
        draggable={false}
        src={HeroImage}
        alt=''
      />
    </div>
  );
};

export default SlideThree;
