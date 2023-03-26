import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { shallow } from "zustand/shallow"

const sidebarStore = create(
  persist (
    (set) => ({
      activeStep: 1,
      setActiveStep: (step) =>
        set(() => ({ activeStep: step })),
    }),
    {
      name: 'useSidebarStore',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useSidebarStore = () => {
  const store = sidebarStore(({ activeStep, setActiveStep }) => ({
      activeStep,
      setActiveStep,
    }),
    shallow
  )

  return store
};
