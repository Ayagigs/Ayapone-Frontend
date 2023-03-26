import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import SideBarData from '../../navigation/SideBarData';
import SideBarMenu from './components/SideBarMenu';

const AppLayout = () => {
  const [activeTabTitle, setActiveTabTitle] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    SideBarData.forEach(({ title, path }) => {
      if (pathname.includes(path)) setActiveTabTitle(title);
    });
  }, [pathname]);

  return (
    <main className="container bg-ayaNeutral-100 h-auto flex">
      <SideBarMenu />
      <NavBar pagename={'Dashboard'}/>

      <main className='p-12'>
        <Outlet />
      </main>
    </main>
  );
};

export default AppLayout;
