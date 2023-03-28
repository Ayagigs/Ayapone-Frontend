import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'

const currentUserStore = create(
  persist(
    (set, get) => ({
      token: '',
      setToken: (token) => set(() => ({ token: token })),
    }),
    {
      name: 'currentUserStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export const useCurrentUserStore = () => {
  const store = currentUserStore(
    ({ token, setToken }) => ({
      token,
      setToken,
    }),
    shallow,
  )

  return store
}
