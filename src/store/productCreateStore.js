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
      delivery: '',
      overview: '',
      specification: '',
      images: [],
      filesForUpload: [],
      setActiveStep: (activeStep) => set(() => ({ activeStep })),
      setName: (name) => set(() => ({ name })),
      setBrand: (brand) => set(() => ({ brand })),
      setCategory: (category) => set(() => ({ category })),
      setDescription: (description) => set(() => ({ description })),
      setProductAvailability: (product_availability) => set(() => ({ product_availability })),
      setPrice: (price) => set(() => ({ price })),
      setDelivery: (delivery) => set(() => ({ delivery })),
      setOverview: (overview) => set(() => ({ overview })),
      setSpecification: (specification) => set(() => ({ specification })),
      setImages: (images) => set(() => ({ images })),
      setFilesForUpload: (filesForUpload) => set(() => ({ filesForUpload })),
      
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
      delivery,
      overview,
      specification,
      filesForUpload,
      images,
      setActiveStep,
      setName,
      setBrand,
      setCategory,
      setDescription,
      setProductAvailability,
      setPrice,
      setDelivery,
      setOverview,
      setSpecification,
      setFilesForUpload,
      setImages
    }) => ({
      activeStep,
      name,
      brand,
      category,
      description,
      product_availability,
      price,
      delivery,
      overview,
      specification,
      filesForUpload,
      images,
      setActiveStep,
      setName,
      setBrand,
      setCategory,
      setDescription,
      setProductAvailability,
      setPrice,
      setDelivery,
      setOverview,
      setSpecification,
      setFilesForUpload,
      setImages
    }),
    shallow,
  )

  return store
}
