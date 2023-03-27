import routes from './routes';
import { BiWallet } from 'react-icons/bi'
import { RiLayout2Line, RiNotification3Line } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineShoppingCart, MdTrackChanges } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { FiArchive } from 'react-icons/fi'

const sideBarData = [
  {
    icon: <RiLayout2Line />,
    title: 'Dashboard',
    path: routes.DASHBOARD_PAGE,
    for: ['buyer', 'merchant', 'admin']
  },
  {
    icon: <FiArchive />,
    title: 'Products',
    path: routes.MERCHANT_PRODUCT_PAGE,
    for: ['merchant', 'admin']
  },
  {
    icon: <MdOutlineShoppingCart />,
    title: 'Cart',
    path: routes.CART_DASHBOARD_PAGE,
    for: ['buyer']
  },
  {
    icon: <SlCalender />,
    title: 'Orders',
    path: routes.DASHBOARD_PAGE,
    for: ['merchant', 'admin']
  },
  {
    icon: <MdTrackChanges />,
    title: 'Track Order',
    path: routes.TRACK_ORDER_PAGE,
    for: ['buyer']
  },
  {
    icon: <BiWallet />,
    title: 'Wallet',
    path: routes.WALLET_PAGE,
    for: ['buyer', 'merchant', 'admin']
  },
  {
    icon: <CgProfile />,
    title: 'Profile',
    path: routes.PROFILE_PAGE,
    for: ['buyer', 'merchant', 'admin']
  },
  {
    icon: <RiNotification3Line />,
    title: 'Notifications',
    path: routes.NOTIFICATION_PAGE,
    for: ['buyer', 'merchant', 'admin']
  },
];

export default sideBarData;
