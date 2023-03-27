import {baseApi} from './base.api';

const AuthURL = '/auth';

export const RequestSignUpOTP = async (data) =>
  await baseApi.post(AuthURL + '/request-signup-otpup', data)

export const VerifyOTP = async (data) =>
  await baseApi.post(AuthURL + '/verify-otp', data)

export const SignUp = async (data) =>
  await baseApi.post(AuthURL + '/signup', data)

export const LogIn = async (data) =>
  await baseApi.post(AuthURL + '/login', data)

export const RequestPasswordOTP = async (data) =>
  await baseApi.post(AuthURL + '/reset-password-otp', data)

export const ResetPassword = async (data) =>
  await baseApi.post(AuthURL + '/reset-password', data)
