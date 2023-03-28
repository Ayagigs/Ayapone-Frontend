import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'

const currentUserStore = create(
  persist(
    (set, get) => ({
      token: '',
      user: {},
      wallet: {},
      setToken: (token) => set(() => ({ token: token })),
      setUser: (user) => set(() => ({ user: user })),
      setWallet: (wallet) => set(() => ({ wallet: wallet })),
    }),
    {
      name: 'currentUserStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export const useCurrentUserStore = () => {
  const store = currentUserStore(
    ({ token, user, wallet, setToken, setUser, setWallet }) => ({
      token,
      user,
      wallet,
      setToken,
      setUser,
      setWallet,
    }),
    shallow,
  )

  return store
}
