import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'

const currentUserStore = create(
  persist(
    (set, get) => ({
      token: '',
      user_role: '',
      setToken: (token) => set(() => ({ token: token })),
      setUserRole: (role) => set(() => ({ user_role: role })),
    }),
    {
      name: 'currentUserStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export const useCurrentUserStore = () => {
  const store = currentUserStore(
    ({ token, user_role, setToken, setUserRole }) => ({
      token,
      user_role,
      setToken,
      setUserRole
    }),
    shallow,
  )

  return store
}
