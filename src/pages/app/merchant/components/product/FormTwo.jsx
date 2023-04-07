import InputBox from '../../../../../components/forms/InputBox'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useMerchantSignupStore } from '../../../../../store/merchantSignupStore'
import { toast } from 'react-toastify'

const FormTwo = () => {
  const { email, first_name, last_name, phone, password, setLastName, setFirstName, setEmail, setPhone, setPassword, activeStep, setActiveStep } = useMerchantSignupStore()
  const next = () => {
    setActiveStep(activeStep+1)
  }
  return (
    <>
      <h3>Product Pricing</h3>
      <InputBox name={'price'} width={'w-full'} label={'Your Price'} isCompulsory={true} placeholder={'Price'} value={first_name} onChange={(e) => setFirstName(e.target.value)} />
      
      <InputBox name={'delivery_timeline'} width={'w-full'} label={'Delivery Timeline'} isCompulsory={true} placeholder={'How long will it take to deliver'} value={first_name} onChange={(e) => setFirstName(e.target.value)} />

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

      <button 
        className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[50px] flex space-x-2 justify-center items-center'
        onClick={() => next()}
      >
        Next <HiArrowNarrowRight />
      </button>
    </>
  )
}

export default FormTwo
