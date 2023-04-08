import AyoponeWhiteLogo from '../assets/images/ayapone_logo_white.svg'
import fb from '../assets/icons/fb.svg'
import ig from '../assets/icons/ig.svg'
import tw from '../assets/icons/tw.svg'
import routes from '../navigation/routes'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-ayaNeutral-900 text-white px-24 py-14 space-y-20'>
      <div className='flex flex-wrap space-x-[144px] '>
        <div className='space-y-4 '>
          <img src={AyoponeWhiteLogo} alt="" />
          <p>
            Stay Updated! Subscribe to our newsletter
          </p>
          <span className='flex flex-row space-x-2'>
            <input
              className="flex h-[46px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-[302px] outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-xs placeholder:font-medium text-ayaNeutral-900"
              type="text"
              id=""
              name=""
              placeholder='Email Address'
            />
            <button className='h-[43px] w-[112px] rounded-lg bg-ayaPrimary-600 text-white font-semibold'>
              Subscribe
            </button>
          </span>
        </div>
        <div className='space-y-10'>
          <h1 className='font-semibold text-lg'>About Ayapone</h1>
          <ul className='space-y-1'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>
              <Link to={routes.MERCHANT_SIGN_IN_PAGE}>Sell on Ayapone</Link>
            </li>
            <li>Privacy Policy</li>
            <li>
              <Link to={routes.TERMS_AND_CONDITION_PAGE}>Terms and Conditions</Link>
            </li>
            <li>
              <Link to={routes.ADMIN_SIGN_IN_PAGE}>Admin</Link>
            </li>
          </ul>
        </div>
        <div className='space-y-10'>
          <h1 className='font-semibold text-lg'>Categories</h1>
          <ul className='space-y-1'>
            <li>Phones & Tablets</li>
            <li>Laptops</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className='space-y-3'>
          <h1 className='font-semibold text-lg'>Connect With Us</h1>
          <div className='flex flex-wrap space-x-2'>
            <img src={fb} alt="" className='h-9 w-9' />
            <img src={ig} alt="" className='h-9 w-9' />
            <img src={tw} alt="" className='h-9 w-9' />
          </div>
        </div>
      </div>
      <div className='text-center w-full'>
        ©Ayapone - All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
