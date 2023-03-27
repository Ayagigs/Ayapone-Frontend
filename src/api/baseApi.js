import { create } from 'apisauce';

// TODO PUT THIS IN ENV
const BASE_URL =
  'https://isplbz99kl.execute-api.us-east-1.amazonaws.com/dev/api/v1';

export const baseApi = create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
