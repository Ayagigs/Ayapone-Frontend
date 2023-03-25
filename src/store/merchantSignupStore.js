import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const merchantSignupStore = create(
  persist (
    (set, get) => ({
      history: [],
      setHistory: (pathName) =>
        set(() => ({ history: [...get().history, pathName] })),
    }),
    {
      name: 'useMerchantSignupStore',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useMerchantSignupStore = () => {
  const store = merchantSignupStore(({ history, setHistory }) => ({
    history,
    setHistory,
  }))

  return store
};
