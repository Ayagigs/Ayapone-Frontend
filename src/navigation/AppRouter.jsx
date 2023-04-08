import { Route, Routes } from 'react-router-dom'

import routes from './routes'

import AdminDashboardPage from '../pages/app/admin/Dashboard'
import AdminSignInPage from '../pages/auth/admin/SignIn'
import AdminVerifySelfPage from '../pages/auth/admin/VerifySignIn'
import AppLayout from '../pages/app/AppLayout'
import BuyerDashboardPage from '../pages/app/buyer/Dashboard'
import BuyerSignInPage from '../pages/auth/buyer/SignIn'
import BuyerSignUpPage from '../pages/auth/buyer/SignUp'
import CartDashboardPage from '../pages/app/buyer/Cart'
import ForgotPasswordPage from '../pages/auth/ForgotPassword'
import MerchantDashboardPage from '../pages/app/merchant/Dashboard'
import MerchantSignInPage from '../pages/auth/merchant/SignIn'
import MerchantSignUpPage from '../pages/auth/merchant/SignUp'
import NotificationPage from '../pages/app/Notification'
import HomePage from '../pages/HomePage'
import MerchantCreateProductPage from '../pages/app/merchant/CreateProduct'
import MerchantProductsPage from '../pages/app/merchant/Products'
import OrdersPage from '../pages/app/merchant/Orders'
import OrderInfoPage from '../pages/app/merchant/OrderedInfo'
import PageNotFound from '../pages/PageNotFound'
import PasswordResetPage from '../pages/auth/PasswordReset'
import ProfilePage from '../pages/app/Profile'
import TermsAndConditionPage from '../pages/TermsAndCondition'
import TrackOrderPage from '../pages/app/buyer/TrackOrder'
import WalletPage from '../pages/app/Wallet'

import useEnhancedCustomRouterUtilities from './useEnhancedCustomRouterUtilities'

const AppRouter = () => {
  useEnhancedCustomRouterUtilities()
  console.log('in router')
  return (
    <Routes>
      <Route path={routes.HOME_PAGE} element={<HomePage />} />
      <Route path={routes.ADMIN_SIGN_IN_PAGE} element={<AdminSignInPage />} />
      <Route path={routes.ADMIN_VERIFY_SELF_PAGE} element={<AdminVerifySelfPage />} />
      <Route path={routes.BUYER_SIGN_IN_PAGE} element={<BuyerSignInPage />} />
      <Route path={routes.BUYER_SIGN_UP_PAGE} element={<BuyerSignUpPage />} />
      <Route path={routes.MERCHANT_SIGN_IN_PAGE} element={<MerchantSignInPage />} />
      <Route path={routes.MERCHANT_SIGN_UP_PAGE} element={<MerchantSignUpPage />} />
      <Route path={routes.FORGOT_PASSWORD_PAGE} element={<ForgotPasswordPage />} />
      <Route path={routes.PASSWORD_RESET_PAGE} element={<PasswordResetPage />} />
      <Route path={routes.TERMS_AND_CONDITION_PAGE} element={<TermsAndConditionPage />} />

      {/* TODO: PROTECT THESE ROUTES */}
      {/* Admin Only routes */}
      <Route path={'admin'} element={<AppLayout />}>
        <Route path={routes.DASHBOARD_PAGE} element={<AdminDashboardPage />} />
        <Route path={routes.PROFILE_PAGE} element={<ProfilePage />} />
        <Route path={routes.NOTIFICATION_PAGE} element={<NotificationPage />} />

      </Route>

      {/* Buyer Only routes */}
      <Route path={'buyer'} element={<AppLayout />}>
        <Route path={routes.DASHBOARD_PAGE} element={<BuyerDashboardPage />} />
        <Route path={routes.CART_DASHBOARD_PAGE} element={<CartDashboardPage />} />
        <Route path={routes.WALLET_PAGE} element={<WalletPage />} />
        <Route path={routes.TRACK_ORDER_PAGE} element={<TrackOrderPage />} />
        <Route path={routes.PROFILE_PAGE} element={<ProfilePage />} />
        <Route path={routes.NOTIFICATION_PAGE} element={<NotificationPage />} />

      </Route>

      {/* Merchant Only routes */}
      <Route path={'merchant'} element={<AppLayout />}>
        <Route path={routes.DASHBOARD_PAGE} element={<MerchantDashboardPage />} />
        <Route path={routes.MERCHANT_PRODUCT_PAGE} element={<MerchantProductsPage />} />
        <Route path={routes.MERCHANT_PRODUCT_CREATE_PAGE} element={<MerchantCreateProductPage />} />
        <Route path={routes.WALLET_PAGE} element={<WalletPage />} />
        <Route path={routes.PROFILE_PAGE} element={<ProfilePage />} />
        <Route path={routes.NOTIFICATION_PAGE} element={<NotificationPage />} />
        <Route path={routes.ORDERS_PAGE} element={<OrdersPage />} />
        <Route path={routes.ORDER_INFO_PAGE} element={<OrderInfoPage />} />

      </Route>

      {/* 404 PAGE */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRouter
