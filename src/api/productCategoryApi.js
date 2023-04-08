import { baseApi, token } from './baseApi'

baseApi.setHeader('Authorization', `Bearer ${token()}`)

const ProductCategoryPath = '/category';

export const CreateCategory = async (data) =>
  await baseApi.post(`${ProductCategoryPath}`, data)

export const ListCategories = async () =>
  await baseApi.get(`${ProductCategoryPath}`)

export const FetchOneCategory = async (id) =>
  await baseApi.get(`${ProductCategoryPath}/${id}`)

export const UpdateCategory = async (id, data) =>
  await baseApi.patch(`${ProductCategoryPath}/${id}`, data)

export const DeleteCategory = async (id) =>
  await baseApi.delete(`${ProductCategoryPath}/${id}`)
