import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'

const merchantSignupStore = create(
  persist(
    (set) => ({
      activeStep: 1,
      last_name: '',
      first_name: '',
      email: '',
      phone: '',
      password: '',
      id_number: '',
      selectedDoc: '',
      setLastName: (last_name) => set(() => ({ last_name })),
      setFirstName: (first_name) => set(() => ({ first_name })),
      setEmail: (email) => set(() => ({ email })),
      setPhone: (phone) => set(() => ({ phone })),
      setPassword: (password) => set(() => ({ password })),
      setIdNumber: (id_number) => set(() => ({ id_number })),
      setSelectedDoc: (selectedDoc) => set(() => ({ selectedDoc })),
      setActiveStep: (step) => set(() => ({ activeStep: step })),
    }),
    {
      name: 'useMerchantSignupStore',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export const useMerchantSignupStore = () => {
  const store = merchantSignupStore(
    ({
      activeStep,
      last_name,
      first_name,
      email,
      phone,
      password,
      id_number,
      selectedDoc,
      setLastName,
      setFirstName,
      setEmail,
      setPhone,
      setPassword,
      setIdNumber,
      setSelectedDoc,
      setActiveStep
    }) => ({
      activeStep,
      last_name,
      first_name,
      email,
      phone,
      password,
      id_number,
      selectedDoc,
      setLastName,
      setFirstName,
      setEmail,
      setPhone,
      setPassword,
      setIdNumber,
      setSelectedDoc,
      setActiveStep
    }),
    shallow,
  )

  return store
}
