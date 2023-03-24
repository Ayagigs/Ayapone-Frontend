import InputBox from '../../../../components/forms/InputBox'

const StepOne = () => {
  return (
    <>
      <li
        data-te-stepper-step-ref
        data-te-stepper-step-active
        class="w-[4.5rem] flex-auto">
        <div
          data-te-stepper-head-ref
          class="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
          <span
            data-te-stepper-head-icon-ref
            class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
            1
          </span>
          <span
            data-te-stepper-head-text-ref
            class="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
            Seller Information
          </span>
        </div>
        <div
          data-te-stepper-content-ref
          class="absolute w-full p-4 transition-all duration-500 ease-in-out">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <InputBox name={'first_name'} width={'w-full'} label={'First Name'} isCompulsory={true} placeholder={'First Name'} />
              {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <InputBox name={'last_name'} width={'w-full'} label={'Last Name'} isCompulsory={true} placeholder={'Last Name'} />
            </div>
          </div>

          <InputBox name={'email'} label={'Email Address'} isCompulsory={true} placeholder={'Email Address'} />
          <InputBox name={'phone'} label={'Phone Number'} isCompulsory={true} placeholder={'Phone Number'} />
          <InputBox name={'password'} label={'Password'} isCompulsory={true} type={'password'} placeholder={'Password'} />

          <button type="submit" className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[54px]'>
            Sign Up
          </button>
        </div>
      </li>
    </>
  )
}

export default StepOne
