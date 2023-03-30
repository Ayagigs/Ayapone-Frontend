import InputBox from '../../../../components/forms/InputBox'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useMerchantSignupStore } from '../../../../store/merchantSignupStore'
import { toast } from 'react-toastify'

const FormOne = () => {
  const { email, first_name, last_name, phone, password, setLastName, setFirstName, setEmail, setPhone, setPassword, activeStep, setActiveStep } = useMerchantSignupStore()
  const next = () => {
    setActiveStep(activeStep+1)
  }
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <InputBox name={'first_name'} width={'w-full'} label={'First Name'} isCompulsory={true} placeholder={'First Name'} value={first_name} onChange={(e) => setFirstName(e.target.value)} />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <InputBox name={'last_name'} width={'w-full'} label={'Last Name'} isCompulsory={true} placeholder={'Last Name'} value={last_name} onChange={(e) => setLastName(e.target.value)} />
        </div>
      </div>

      <InputBox name={'email'} label={'Email Address'} isCompulsory={true} type={'email'} placeholder={'Email Address'} value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputBox name={'phone'} label={'Phone Number'} isCompulsory={true} placeholder={'Phone Number'} value={phone} onChange={(e) => setPhone(e.target.value)} />
      <InputBox name={'password'} label={'Password'} isCompulsory={true} type={'password'} placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)} />

      <button 
        className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[50px] flex space-x-2 justify-center items-center'
        onClick={() => next()}
      >
        Next <HiArrowNarrowRight />
      </button>
    </>
  )
}

export default FormOne
