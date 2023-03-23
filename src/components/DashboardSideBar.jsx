import { useState } from 'react'

import routes from '../navigation/routes'
import { Link } from 'react-router-dom'

const DashboardSideBar = () => {
  return (
    <div className="">
      <nav className="flex  responsive-padx-container py-5 items-center relative ">
        
        <ul className="hidden sm:flex ml-auto font-poppins text-base gap-x-6 items-center  ">
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default DashboardSideBar
