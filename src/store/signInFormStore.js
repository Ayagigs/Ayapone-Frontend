import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

const signInFormStore = create((set, get) => ({
  email: '',
  password: '',
  setEmail: (email) => set(() => ({ email })),
  setPassword: (password) => set(() => ({ password })),
}))

export const useSignInFormStore = () => {
  const store = signInFormStore(
    ({
      email,
      password,
      setEmail,
      setPassword,
    }) => ({
      email,
      password,
      setEmail,
      setPassword,
    }),
    shallow,
  )

  return store
}
