import React, { useState } from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import AyaponeLogo from '../assets/images/ayapone_logo.svg'
import routes from '../navigation/routes'
import { Link } from 'react-router-dom'
import NavBarAccount from './NavBarAccount'

const NavBar = () => {
  const [showMini, setShowMini] = useState(false);
  return (
    <>
      <nav className="z-[1000] container flex bg-white rounded-bl-lg py-7 px-24 h-24 items-center fixed w-[100vw]">
        <span className="text-2xl pr-[114px]">
          <img src={AyaponeLogo} alt="Ayapone" srcSet={AyaponeLogo} />
        </span>
        <span className='flex flex-row space-x-3'>
          <input
            className="flex h-[43px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-[309px] outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm "
            type="text"
            id=""
            name=""
            placeholder='Search'
          />
          <button className='h-[43px] w-[112px] rounded-lg bg-ayaPrimary-600 text-white font-semibold'>
            Search
          </button>
        </span>
        <ul className="hidden sm:flex ml-auto font-poppins text-base gap-x-6 items-center">
          <li>
            <Link
              to={routes.MERCHANT_SIGN_IN_PAGE}
              className='text-ayaPrimary-600 font-semibold'
            >
              Sell on Ayapone
            </Link>
          </li>
          <li>
            <span onClick={() => setShowMini(!showMini)}> Account</span>
          </li>
          <li>
            Support
          </li>
          <li>
            <MdOutlineShoppingCart />
          </li>
        </ul>
      </nav>

       <NavBarAccount isOpen={showMini}/> 
    </>
  )
}

export default NavBar
