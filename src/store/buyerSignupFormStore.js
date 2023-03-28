import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

const buyerSignupFormStore = create((set, get) => ({
  last_name: '',
  first_name: '',
  email: '',
  phone: '',
  password: '',
  setLastName: (last_name) => set(() => ({ last_name })),
  setFirstName: (first_name) => set(() => ({ first_name })),
  setEmail: (email) => set(() => ({ email })),
  setPhone: (phone) => set(() => ({ phone })),
  setPassword: (password) => set(() => ({ password })),
}))

export const useBuyerSignupFormStore = () => {
  const store = buyerSignupFormStore(
    ({
      last_name,
      first_name,
      email,
      phone,
      password,
      setLastName,
      setFirstName,
      setEmail,
      setPhone,
      setPassword,
    }) => ({
      last_name,
      first_name,
      email,
      phone,
      password,
      setLastName,
      setFirstName,
      setEmail,
      setPhone,
      setPassword,
    }),
    shallow,
  )

  return store
}
