import routes from '../navigation/routes'
import { Link } from 'react-router-dom'
import { useCurrentUserStore } from '../store/currentUserStore'
import UserAvater from '../assets/images/user_avatar.svg'

const NavBarAccount = ({
  isOpen
}) => {
  const { user, wipeAllData } = useCurrentUserStore()
  return (
    <>
    {(user && user.last_name && user.first_name) ? 
      <div className={`z-[1000] fixed right-14 transition ${isOpen ? `-top-40 translate-y-64` : `-top-80` } flex flex-wrap space-x-3 bg-white rounded-2xl h-auto w-[316px] py-8 px-6 shadow`}>
        <div className='border-b border-b-ayaNeutral-900 w-full flex flex-wrap items-center space-x-3 pb-4'>
          <img src={user.image || UserAvater} alt="" className='rounded-full border-2 border-ayaPrimary-900' />
          <span className='font-bold text-lg'>{`${user.first_name} ${user.last_name}`}</span>
        </div>
        <ul className='p-0 list-none space-y-6 mt-6 w-full'>
          <li>
            <Link to={user.user_role+'/'+routes.DASHBOARD_PAGE}>Dashboard</Link>
          </li>
          <li>
            {(user.user_role == 'buyer') ?
              <Link to={user.user_role+'/'+routes.TRACK_ORDER_PAGE}>Order Tracking</Link>
              :
              <Link to={user.user_role+'/'+routes.TRACK_ORDER_PAGE}>Orders</Link>
            }
          </li>
          <li>
            <Link onClick={() => wipeAllData()}>Sign Out</Link>
          </li>
        </ul>
      </div>
      :
      <div className={`z-[1000] fixed right-14 -top-40 transition ${isOpen && `translate-y-64` } flex flex-wrap justify-center space-x-3 bg-white rounded-2xl h-auto w-[316px] py-8 px-6 shadow`}>
        <Link to={routes.BUYER_SIGN_UP_PAGE}
          className='bg-ayaPrimary-600 font-bold rounded-[8px] text-white w-[120px] h-[50px] flex justify-center items-center'
        >
          Sign Up
        </Link>
        <Link to={routes.BUYER_SIGN_IN_PAGE}
          className='bg-ayaPrimary-100 font-bold rounded-[8px] text-ayaPrimary-600 w-[126px] h-[50px] flex justify-center items-center border border-ayaPrimary-600/20'
        >
          Log In
        </Link>
      </div>
    }
    </>
  )
}

export default NavBarAccount
