import { create } from 'apisauce'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const baseApi = create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
