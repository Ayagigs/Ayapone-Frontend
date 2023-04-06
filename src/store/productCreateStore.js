import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'

const productCreateStore = create(
  persist(
    (set) => ({
      activeStep: 1,
      setActiveStep: (step) => set(() => ({ activeStep: step })),
    }),
    {
      name: 'useProductCreateStore',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export const useProductCreateStore = () => {
  const store = productCreateStore(
    ({
      activeStep,
      setActiveStep,
    }) => ({
      activeStep,
      setActiveStep,
    }),
    shallow,
  )

  return store
}
