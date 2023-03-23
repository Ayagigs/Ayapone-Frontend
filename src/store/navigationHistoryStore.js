import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const navigationHistoryStore = create(
  persist (
    (set, get) => ({
      history: [],
      setHistory: (pathName) =>
        set(() => ({ history: [...get().history, pathName] })),
    }),
    {
      name: 'useNavigationHistoryStore',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useNavigationHistoryStore = () => {
  const store = navigationHistoryStore(({ history, setHistory }) => ({
    history,
    setHistory,
  }))

  return store
};
