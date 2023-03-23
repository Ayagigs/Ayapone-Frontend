import { useState } from 'react'

import Logo from '../assets/ayapone_logo.svg'
import routes from '../navigation/routes'
import { Link } from 'react-router-dom'

const DashboardSideBar = () => {
  return (
    <div className="">
      <nav className="flex  responsive-padx-container py-5 items-center relative ">
        
        <ul className="hidden sm:flex ml-auto font-poppins text-base gap-x-6 items-center  ">
          <li>
            <Link to={routes.NAVIGATION_PAGE}>Other Links</Link>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <Link to={routes.PRICING_PAGE}>Pricing</Link>
          </li>
          <li>
            <Link to={routes.SIGN_IN_PAGE}>Log In</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default DashboardSideBar
