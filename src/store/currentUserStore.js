import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'

const currentUserStore = create(
  persist(
    (set, get) => ({
      token: '',
      user: {},
      wallet: {},
      businessKyc: {},
      setToken: (token) => set(() => ({ token: token })),
      setUser: (user) => set(() => ({ user: user })),
      setWallet: (wallet) => set(() => ({ wallet: wallet })),
      setBusinessKyc: (kyc) => set(() => ({ businessKyc: kyc })),
      wipeAllData: () => set(() => ({ token: '', user: {}, wallet: {}, businessKyc: {} })),
    }),
    {
      name: 'currentUserStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export const useCurrentUserStore = () => {
  const store = currentUserStore(
    ({ token, user, wallet, businessKyc, setToken, setUser, setWallet, setBusinessKyc, wipeAllData }) => ({
      token,
      user,
      wallet,
      businessKyc,
      setToken,
      setUser,
      setWallet,
      setBusinessKyc,
      wipeAllData
    }),
    shallow,
  )

  return store
}
