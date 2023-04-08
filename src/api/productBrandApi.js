import { baseApi, token } from './baseApi'

baseApi.setHeader('Authorization', `Bearer ${token()}`)

const ProductBrandPath = '/brands';

export const CreateBrand = async (data) =>
  await baseApi.post(`${ProductBrandPath}`, data)

export const ListBrands = async () =>
  await baseApi.get(`${ProductBrandPath}`)

export const FetchOneBrand = async (id) =>
  await baseApi.get(`${ProductBrandPath}/${id}`)

export const UpdateBrand = async (id, data) =>
  await baseApi.patch(`${ProductBrandPath}/${id}`, data)

export const DeleteBrand = async (id) =>
  await baseApi.delete(`${ProductBrandPath}/${id}`)
