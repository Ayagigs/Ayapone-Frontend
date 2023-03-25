import InputBox from '../../../../components/forms/InputBox'
import { HiArrowNarrowRight } from 'react-icons/hi'

const StepOne = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <InputBox name={'first_name'} width={'w-full'} label={'First Name'} isCompulsory={true} placeholder={'First Name'} />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <InputBox name={'last_name'} width={'w-full'} label={'Last Name'} isCompulsory={true} placeholder={'Last Name'} />
        </div>
      </div>

      <InputBox name={'email'} label={'Email Address'} isCompulsory={true} type={'email'} placeholder={'Email Address'} />
      <InputBox name={'phone'} label={'Phone Number'} isCompulsory={true} placeholder={'Phone Number'} />
      <InputBox name={'password'} label={'Password'} isCompulsory={true} type={'password'} placeholder={'Password'} />

        <button className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[50px] flex space-x-2 justify-center items-center'>
          Next <HiArrowNarrowRight />
        </button>
    </>
  )
}

export default StepOne
