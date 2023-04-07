import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'

const productCreateStore = create(
  persist(
    (set) => ({
      activeStep: 1,
      name: '',
      brand: '',
      category: '',
      description: '',
      product_availability: '',
      price: '',
      overview: '',
      specification: '',
      setActiveStep: (activeStep) => set(() => ({ activeStep })),
      setName: (name) => set(() => ({ name })),
      setBrand: (brand) => set(() => ({ brand })),
      setCategory: (category) => set(() => ({ category })),
      setDescription: (description) => set(() => ({ description })),
      setProductAvailability: (product_availability) => set(() => ({ product_availability })),
      setPrice: (price) => set(() => ({ price })),
      setOverview: (overview) => set(() => ({ overview })),
      setSpecification: (specification) => set(() => ({ specification })),
      
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
      name,
      brand,
      category,
      description,
      product_availability,
      price,
      overview,
      specification,
      setActiveStep,
      setName,
      setBrand,
      setCategory,
      setDescription,
      setProductAvailability,
      setPrice,
      setOverview,
      setSpecification
    }) => ({
      activeStep,
      name,
      brand,
      category,
      description,
      product_availability,
      price,
      overview,
      specification,
      setActiveStep,
      setName,
      setBrand,
      setCategory,
      setDescription,
      setProductAvailability,
      setPrice,
      setOverview,
      setSpecification
    }),
    shallow,
  )

  return store
}
