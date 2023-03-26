import { Route, Routes } from 'react-router-dom'

import routes from './routes'
import AdminSignInPage from '../pages/auth/admin/SignIn'
import AppLayout from '../pages/app/AppLayout'
import BuyerDashboardPage from '../pages/app/buyer/Dashboard'
import BuyerSignInPage from '../pages/auth/buyer/SignIn'
import BuyerSignUpPage from '../pages/auth/buyer/SignUp'
import CreatePasswordPage from '../pages/auth/CreatePassword'
import ForgotPasswordPage from '../pages/auth/ForgotPassword'
import MerchantDashboardPage from '../pages/app/merchant/Dashboard'
import MerchantSignInPage from '../pages/auth/merchant/SignIn'
import MerchantSignUpPage from '../pages/auth/merchant/SignUp'
import HomePage from '../pages/HomePage'
import MerchantProductsPage from '../pages/app/merchant/Products'
import PageNotFound from '../pages/PageNotFound'
import TermsAndConditionPage from '../pages/TermsAndCondition'
import useEnhancedCustomRouterUtilities from './useEnhancedCustomRouterUtilities'

const AppRouter = () => {
  useEnhancedCustomRouterUtilities()
  console.log('in router')
  return (
    <Routes>
      <Route path={routes.HOME_PAGE} element={<HomePage />} />
      <Route path={routes.ADMIN_SIGN_IN_PAGE} element={<AdminSignInPage />} />
      <Route path={routes.BUYER_SIGN_IN_PAGE} element={<BuyerSignInPage />} />
      <Route path={routes.BUYER_SIGN_UP_PAGE} element={<BuyerSignUpPage />} />
      <Route path={routes.MERCHANT_SIGN_IN_PAGE} element={<MerchantSignInPage />} />
      <Route path={routes.MERCHANT_SIGN_UP_PAGE} element={<MerchantSignUpPage />} />
      <Route path={routes.FORGOT_PASSWORD_PAGE} element={<ForgotPasswordPage />} />
      <Route path={routes.CREATE_PASSWORD_PAGE} element={<CreatePasswordPage />} />
      <Route path={routes.TERMS_AND_CONDITION_PAGE} element={<TermsAndConditionPage />} />

      {/* TODO: PROTECT THESE ROUTES */}
      {/* Buyer Only routes */}
      <Route path={'buyer'} element={<AppLayout />}>
        <Route path={routes.DASHBOARD_PAGE} element={<BuyerDashboardPage />} />

      </Route>

      {/* Merchant Only routes */}
      <Route path={'merchant'} element={<AppLayout />}>
        <Route path={routes.DASHBOARD_PAGE} element={<MerchantDashboardPage />} />
        <Route path={routes.MERCHANT_PRODUCT_PAGE} element={<MerchantProductsPage />} />

      </Route>

      {/* 404 PAGE */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRouter
