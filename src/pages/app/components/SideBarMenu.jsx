import routes from '../../../navigation/routes'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'
import SideBarData from '../../../navigation/SideBarData'
import Logo from '../../../assets/images/ayapone_logo.svg'
import { TbLogout } from 'react-icons/tb'
import { useCurrentUserStore } from '../../../store/currentUserStore'
import { toast } from 'react-toastify'

const SideBarMenu = () => {
  const { pathname } = useLocation()
  const { user, wipeAllData } = useCurrentUserStore()
  const navigate = useNavigate()
  const logout = () => {
    wipeAllData()
    toast.success('You have logged out.')
    navigate(routes.HOME_PAGE)
  }

  let activeUserStyle, userStyle
  if (user.user_role == 'buyer') {
    activeUserStyle = 'hover:bg-ayaPrimary-200 hover:text-ayaPrimary-600 bg-ayaPrimary-600'
    userStyle = 'hover:bg-ayaPrimary-200'
  }
  if (user.user_role == 'merchant') {
    activeUserStyle = 'hover:bg-ayaNeutral-200 hover:text-ayaNeutral-900 bg-ayaNeutral-900'
    userStyle = 'hover:bg-ayaNeutral-200'
  }
  if (user.user_role == 'admin') {
    activeUserStyle = 'hover:bg-ayaNeutral-200 hover:text-ayaNeutral-900 bg-ayaNeutral-500'
    userStyle = 'hover:bg-ayaNeutral-200'
  }

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
                <li className={`h-14 py-4 pl-6 rounded-lg flex items-center text-white ${activeUserStyle}`}>
                  {item.icon}<span className='ml-4 '>{item.title}</span>
                </li>
              </Link>
            ) : (
              <Link key={index} to={item.path}>
                <li className={`h-14 py-4 pl-6 rounded-lg flex items-center ${userStyle}`}>
                  {item.icon}<span className='ml-4 '>{item.title}</span>
                </li>
              </Link>
            )
          : ''
        })}
      </ul>

      <div className='text-ayaDanger-200 h-14 py-4 pl-6 mt-14 rounded-lg hover:bg-ayaDanger-100 flex items-center' onClick={() => logout()}>
        <TbLogout /><span className='ml-4 '>Logout</span>
      </div>
    </aside>
  )
}

export default SideBarMenu
