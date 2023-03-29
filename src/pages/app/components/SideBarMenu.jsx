import routes from '../../../navigation/routes'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router';
import SideBarData from '../../../navigation/SideBarData';
import Logo from '../../../assets/images/ayapone_logo.svg'
import { TbLogout } from 'react-icons/tb'
import { useCurrentUserStore } from '../../../store/currentUserStore'

const SideBarMenu = () => {
  const { pathname } = useLocation()
  const { user } = useCurrentUserStore()
  return (
    <aside className="w-64 h-screen bg-white px-6 text-ayaNeutral-900 sticky top-0">
      <div className='py-7 pl-6'>
        <Link to={routes.HOME_PAGE}>
          <img src={Logo} alt="Ayapone" srcSet={Logo} />
        </Link>
      </div>
      
      <ul className="ml-auto text-base items-center pt-10 space-y-2">
        {SideBarData.map((item, index) => {
          return item.for.includes(user.user_role) ?
            pathname.includes(item.path) ? (
              <Link key={index} to={item.path}>
                <li className={`h-14 py-4 pl-6 rounded-lg flex items-center text-white ${user.user_role == 'merchant' ?`hover:bg-ayaNeutral-200 hover:text-ayaNeutral-900 bg-ayaNeutral-900` : `hover:bg-ayaPrimary-200 hover:text-ayaPrimary-600 bg-ayaPrimary-600`}`}>
                  {item.icon}<span className='ml-4 '>{item.title}</span>
                </li>
              </Link>
            ) : (
              <Link key={index} to={item.path}>
                <li className={`h-14 py-4 pl-6 rounded-lg flex items-center ${user.user_role == 'merchant' ?`hover:bg-ayaNeutral-200` : `hover:bg-ayaPrimary-200`}`}>
                  {item.icon}<span className='ml-4 '>{item.title}</span>
                </li>
              </Link>
            )
          : ''
        })}
      </ul>

      <div className='text-ayaDanger-200 h-14 py-4 pl-6 mt-14 rounded-lg hover:bg-ayaDanger-100 flex items-center'>
        <TbLogout /><span className='ml-4 '>Logout</span>
      </div>
    </aside>
  )
}

export default SideBarMenu
