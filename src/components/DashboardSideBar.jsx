import { useState } from 'react'
import routes from '../navigation/routes'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/ayapone_logo.svg'

const DashboardSideBar = () => {
  return (
    <aside className="w-64 h-screen bg-white px-6 text-ayaNeutral-900 sticky top-0">
      <div className='py-7 pl-6'>
        <img src={Logo} alt="Ayapone" srcset={Logo} />
      </div>
      
      <ul className="ml-auto text-base items-center pt-10 space-y-2">
        <li className='h-14 py-4 pl-6 rounded-lg bg-ayaPrimary-600 text-white hover:bg-ayaPrimary-200'>
          Dashboard
        </li>
        <li className='h-14 py-4 pl-6 rounded-lg hover:bg-ayaPrimary-200'>
          Cart
        </li>
        <li className='h-14 py-4 pl-6 rounded-lg hover:bg-ayaPrimary-200'>
          Wallet
        </li>
        <li className='h-14 py-4 pl-6 rounded-lg hover:bg-ayaPrimary-200'>
          Track Order
        </li>
        <li className='h-14 py-4 pl-6 rounded-lg hover:bg-ayaPrimary-200'>
          Profile
        </li>
        <li className='h-14 py-4 pl-6 rounded-lg hover:bg-ayaPrimary-200'>
          Notifications
        </li>
      </ul>
      <div className='text-ayaDanger-200 h-14 py-4 pl-6 mt-14 rounded-lg hover:bg-ayaDanger-100'>Logout</div>
    </aside>
  )
}

export default DashboardSideBar
