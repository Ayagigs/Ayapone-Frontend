import { create } from 'apisauce';

const BASE_URL = 'http://localhost:8900/api/v1'

export const baseApi = create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
