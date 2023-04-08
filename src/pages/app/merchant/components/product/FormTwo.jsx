import InputBox from '../../../../../components/forms/InputBox'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useProductCreateStore } from '../../../../../store/productCreateStore'
import { toast } from 'react-toastify'

const FormTwo = () => {  
  const { price, delivery, activeStep, setActiveStep, setPrice, setDelivery } = useProductCreateStore()
  const next = () => {
    setActiveStep(activeStep+1)
  }
  return (
    <>
      <h3 className='text-center'>Product Pricing</h3>
      <InputBox name={'price'} width={'w-full'} label={'Your Price'} isCompulsory={true} placeholder={'Price'} value={price} onChange={(e) => setPrice(e.target.value)} />
      
      <InputBox name={'delivery'} width={'w-full'} label={'Delivery Timeline (eg. 7 days)'} isCompulsory={true} placeholder={'How long will it take to deliver'} value={delivery} onChange={(e) => setDelivery(e.target.value)} />

      <div className="mt-6 ">
        <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor={'brand'}>
          Fulfillment Channel<span className="text-ayaDanger-200">*</span>
        </label>
        <div className='w-full'>
          <label className="mb-4">
            <input type="radio" name="fulfillment_channel" id="" className='' /> I will ship this item myself (Merchant fulfilled)
          </label>
        </div>
        <div className='w-full'>
          <label className="mb-4">
            <input type="radio" name="fulfillment_channel" id="" className='' /> Ayapone will ship and provide customer services
          </label>
        </div>
      </div>

      <div className='flex flex-row space-x-4 justify-end'>
        <button
          className='bg-ayaPrimary-100 font-bold rounded-[8px] text-ayaPrimary-600 w-[102px] h-[50px] flex space-x-2 justify-center items-center border border-ayaPrimary-600/20'
          onClick={() => setActiveStep(activeStep-1)}
        >
          Back
        </button>
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

export default FormTwo
