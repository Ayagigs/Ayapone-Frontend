import { useState } from 'react'
import routes from '../navigation/routes'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/ayapone_logo.svg'
import { BiWallet } from 'react-icons/bi'
import { RiLayout2Line, RiNotification3Line } from 'react-icons/ri'
import { MdOutlineShoppingCart, MdTrackChanges } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { TbLogout } from 'react-icons/tb'

const DashboardSideBar = () => {
  return (
    <aside className="w-64 h-screen bg-white px-6 text-ayaNeutral-900 sticky top-0">
      <div className='py-7 pl-6'>
        <Link to={routes.HOME_PAGE}>
          <img src={Logo} alt="Ayapone" srcset={Logo} />
        </Link>
      </div>
      
      <ul className="ml-auto text-base items-center pt-10 space-y-2">
        <li className='h-14 py-4 pl-6 rounded-lg bg-ayaPrimary-600 text-white hover:bg-ayaPrimary-200 flex items-center'>
          <RiLayout2Line /><span className='ml-4 '>Dashboard</span>
        </li>
        <li className='h-14 py-4 pl-6 rounded-lg hover:bg-ayaPrimary-200 flex items-center'>
          <MdOutlineShoppingCart /><span className='ml-4 '>Cart</span>
        </li>
        <li className='h-14 py-4 pl-6 rounded-lg hover:bg-ayaPrimary-200 flex items-center'>
          <BiWallet /><span className='ml-4 '>Wallet</span>
        </li>
        <li className='h-14 py-4 pl-6 rounded-lg hover:bg-ayaPrimary-200 flex items-center'>
          <MdTrackChanges /><span className='ml-4 '>Track Order</span>
        </li>
        <li className='h-14 py-4 pl-6 rounded-lg hover:bg-ayaPrimary-200 flex items-center'>
          <CgProfile /><span className='ml-4 '>Profile</span>
        </li>
        <li className='h-14 py-4 pl-6 rounded-lg hover:bg-ayaPrimary-200 flex items-center'>
          <RiNotification3Line /><span className='ml-4 '>Notifications</span>
        </li>
      </ul>
      <div className='text-ayaDanger-200 h-14 py-4 pl-6 mt-14 rounded-lg hover:bg-ayaDanger-100 flex items-center'>
        <TbLogout /><span className='ml-4 '>Logout</span>
      </div>
    </aside>
  )
}

export default DashboardSideBar
