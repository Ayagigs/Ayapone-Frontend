import { Route, Routes } from 'react-router-dom'

import routes from './routes'
import AdminSignInPage from 'pages/authentication/SignIn'
import BuyerSignInPage from 'pages/authentication/SignIn'
import BuyerSignUpPage from 'pages/authentication/SignUp'
import MerchantSignInPage from 'pages/authentication/SignIn'
import MerchantSignUpPage from 'pages/authentication/SignUp'
import HomePage from 'pages/home/HomePage'
import DashboardPage from 'pages/edit/EditPage'
import PageNotFound from 'pages/PageNotFound'
import useEnhancedCustomRouterUtilities from './useEnhancedCustomRouterUtilities'

const AppRouter = () => {
  useEnhancedCustomRouterUtilities()
  return (
    <Routes>
      <Route path={routes.HOME_PAGE} element={<HomePage />} />
      <Route path={routes.ADMIN_SIGN_IN_PAGE} element={<AdminSignInPage />} />
      <Route path={routes.BUYER_SIGN_IN_PAGE} element={<BuyerSignInPage />} />
      <Route path={routes.BUYER_SIGN_UP_PAGE} element={<BuyerSignUpPage />} />
      <Route path={routes.MERCHANT_SIGN_IN_PAGE} element={<MerchantSignInPage />} />
      <Route path={routes.MERCHANT_SIGN_UP_PAGE} element={<MerchantSignUpPage />} />

      {/* TODO: PROTECT THESE ROUTES */}
      <Route path={routes.DASHBOARD_PAGE} element={<DashboardPage />} />

      {/* 404 PAGE */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRouter
