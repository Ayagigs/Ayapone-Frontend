import UserAvater from '../../../assets/images/user_avatar.svg'

const NavBar = ({
  pageName
}) => {
  return (
    <header className='ml-1'>
    <nav className="container flex bg-white rounded-bl-lg py-7 px-12 h-24 items-center fixed w-[calc(100vw-80px)] sm:w-[calc(100vw-16.5em)]">
      <span className="text-2xl">{pageName}</span>
      <ul className="hidden sm:flex ml-auto font-poppins text-base gap-x-6 items-center">
        <li>
          <img src={UserAvater} alt="User" srcset={UserAvater} />
        </li>
        <li>
          <input
            className="flex h-[43px] bg-white text-sm border rounded-[16px] border-ayaNeutral-600 w-[309px] outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm "
            type="text"
            id=""
            name=""
            placeholder='Search'
          />
        </li>
      </ul>
    </nav></header>
  )
}

export default NavBar
