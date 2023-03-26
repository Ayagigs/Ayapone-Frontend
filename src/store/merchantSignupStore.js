import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { shallow } from "zustand/shallow"

const merchantSignupStore = create(
  persist (
    (set) => ({
      activeStep: 1,
      setActiveStep: (step) =>
        set(() => ({ activeStep: step })),
    }),
    {
      name: 'useMerchantSignupStore',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useMerchantSignupStore = () => {
  const store = merchantSignupStore(({ activeStep, setActiveStep }) => ({
      activeStep,
      setActiveStep,
    }),
    shallow
  )

  return store
};
