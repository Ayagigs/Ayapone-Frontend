import routes from '../navigation/routes'
import { Link } from 'react-router-dom'

const NavBarAccount = ({
  isOpen
}) => {
  return (
    <>
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
    </>
  )
}

export default NavBarAccount
