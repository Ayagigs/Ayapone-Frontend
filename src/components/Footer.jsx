import { MdOutlineShoppingCart } from 'react-icons/md'
import AyoponeWhiteLogo from '../assets/images/ayapone_logo_white.svg'
import routes from '../navigation/routes'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-ayaNeutral-900 text-white px-24 py-14 space-y-20'>
      <div className='flex flex-wrap'>
        <div className='space-y-4'>
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
        <div>
          
        </div>
        <div>
          
        </div>
        <div>
          
        </div>
      </div>
      <div className='text-center w-full'>
        ©Ayapone - All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
