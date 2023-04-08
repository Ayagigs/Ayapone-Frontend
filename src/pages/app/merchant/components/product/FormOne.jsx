import InputBox from '../../../../../components/forms/InputBox'
import { HiArrowNarrowRight } from 'react-icons/hi'
import ProductBrands from '../../../../../data/ProductBrands'
import ProductCategories from '../../../../../data/ProductCategories'
import ProductAvailability from '../../../../../data/ProductAvailability'
import { useProductCreateStore } from '../../../../../store/productCreateStore'
import { toast } from 'react-toastify'

const FormOne = () => {
  const { name, brand, category, description, product_availability, activeStep, setActiveStep, setName, setBrand, setCategory, setDescription, setProductAvailability } = useProductCreateStore()
  const next = () => {
    setActiveStep(activeStep+1)
  }
  return (
    <>
      <h3 className='text-center'>Product Information</h3>

      <InputBox name={'name'} width={'w-full'} label={'Product Name'} isCompulsory={true} placeholder={'Product Name'} value={name} onChange={(e) => setName(e.target.value)} />

      <div className="mt-6">
        <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor={'brand'}>
          Brand<span className="text-ayaDanger-200">*</span>
        </label>
        <select id="brand" className="text-gray-900 focus:ring-blue-500 flex h-[54px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-full outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm" name='brand' onChange={(e) => setBrand(e.target.value)}>
          <option defaultValue={`selected`}>Select Brand</option>
          {ProductBrands.map((item, index) => {
            return (item.id == brand) ? <option key={index} value={item.id} selected='selected'>{item.name}</option> : <option key={index} value={item.id}>{item.name}</option>
          })}
        </select>
      </div>

      <div className="mt-6 ">
        <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor={'brand'}>
          Category<span className="text-ayaDanger-200">*</span>
        </label>
        <select id="category" className="text-gray-900 focus:ring-blue-500 flex h-[54px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-full outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm" name='category' onChange={(e) => setCategory(e.target.value)}>
          <option defaultValue={`selected`}>Select Category</option>
          {ProductCategories.map((item, index) => {
            return (item.id == category) ? <option key={index} value={item.id} selected='selected'>{item.name}</option> : <option key={index} value={item.id}>{item.name}</option>
          })}
        </select>
      </div>

      <div className="mt-6 ">
        <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor={'product_availability'}>
          Product Availability<span className="text-ayaDanger-200">*</span>
        </label>
        <select id="product_availability" className="text-gray-900 focus:ring-blue-500 flex h-[54px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-full outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm" name='product_availability' onChange={(e) => setProductAvailability(e.target.value)}>
          {ProductAvailability.map((item, index) => {
            return (item.id == product_availability) ? <option key={index} value={item.id} selected='selected'>{item.name}</option> : <option key={index} value={item.id}>{item.name}</option>
          })}
        </select>
      </div>

      <div className="mt-6 ">
        <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor='description'>
          Product Description <span className="text-ayaDanger-200">*</span>
        </label>
        <textarea
          className={`flex h-[260px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-full outline-none px-6 py-6 placeholder:text-ayaNeutral-500 placeholder:text-sm`}
          id='description' name='description' placeholder='Product Description'
          onChange={(e) => setDescription(e.target.value)}
        >{description}</textarea>
      </div>

      <div className='flex flex-row space-x-4 justify-end'>
        <button 
          className='bg-ayaPrimary-600 font-bold rounded-[8px] text-white w-[228px] h-[50px] flex space-x-2 justify-center items-center'
          onClick={() => next()}
        >
          Save & Continue <HiArrowNarrowRight />
        </button>
      </div>
    </>
  )
}

export default FormOne
