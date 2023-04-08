import { baseApi, token } from './baseApi'

baseApi.setHeader('Authorization', `Bearer ${token()}`)

const ProductPath = '/products';

export const CreateProduct = async (data) =>
  await baseApi.post(`${ProductPath}/`, data)

export const ListProducts = async (data) =>
  await baseApi.get(`${ProductPath}/`, data)

export const ListMyProducts = async () =>
  await baseApi.get(`${ProductPath}/user`)

export const FetchOneProduct = async (id) =>
  await baseApi.get(`${ProductPath}/${id}`)

export const ListProductsBy = async (data) =>
  await baseApi.get(`${ProductPath}/by`, data)

export const UpdateProduct = async (id, data) =>
  await baseApi.patch(`${ProductPath}/${id}`, data)

export const DeleteProduct = async (id) =>
  await baseApi.delete(`${ProductPath}/${id}`)
