import { baseApi } from './baseApi';

const AuthPath = '/auth';

export const LocalSignIn = async (data) =>
  await baseApi.post(`${AuthPath}/login`, data)

export const LocalSignUp = async (data) =>
  await baseApi.post(`${AuthPath}/register`, data)

export const VerifyEmail = async (data) =>
  await baseApi.post(`${AuthPath}/verify`, data)

export const RequestPasswordReset = async (data) =>
  await baseApi.post(`${AuthPath}/request-password-reset`, data)

export const ResetPassword = async (data) =>
  await baseApi.post(`${AuthPath}/reset-password`, data)

export const RegenerateJwt = async (data) =>
  await baseApi.post(`${AuthPath}/regenerate-token`, data)

export const AdminSignIn = async (data) =>
  await baseApi.post(`${AuthPath}/admin/request-login`, data)

export const AdminSignInVerify = async (data) =>
  await baseApi.post(`${AuthPath}/admin/verify-key`, data)