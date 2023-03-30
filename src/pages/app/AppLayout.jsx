import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import SideBarData from '../../navigation/SideBarData'
import SideBarMenu from './components/SideBarMenu'
import NavBar from './components/NavBar'

const AppLayout = () => {
  const [activeTabTitle, setActiveTabTitle] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    SideBarData.forEach(({ title, path }) => {
      
      if (pathname.includes(path)) {
        setActiveTabTitle(title)
        console.log(path, title)
      }
    })
  }, [pathname])

  return (
    <main className="container bg-ayaNeutral-100 text-ayaNeutral-900 h-auto flex">
      <SideBarMenu />
      <NavBar pageName={activeTabTitle} />

      <main className="p-12">
        <Outlet />
      </main>
    </main>
  )
}

export default AppLayout
