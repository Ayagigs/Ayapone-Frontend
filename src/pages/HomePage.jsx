import { Link } from 'react-router-dom'
import routes from '../navigation/routes'

const HomePage = () => {
  return (
    <main>
      home page
      <br /><br /><br />
      <Link to={routes.BUYER_SIGN_UP_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Buyer Sign Up</Link>
      <br /><br />
      <Link to={routes.BUYER_SIGN_IN_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Buyer Sign In</Link>
      <br /><br /><br /><br />
      <Link to={routes.DASHBOARD_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Dashboard</Link>
      <br /><br /><br /><br /><br /><br />
      <Link to={routes.MERCHANT_SIGN_IN_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Merchant Sign In</Link>
      <br /><br />
      <Link to={routes.MERCHANT_SIGN_UP_PAGE} className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[200px] h-[54px]'>Merchant Sign Up</Link>
    </main>
  );
};

export default HomePage;
