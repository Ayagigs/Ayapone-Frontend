import InputBox from '../../../../components/forms/InputBox'
import { HiArrowNarrowRight } from 'react-icons/hi'

const FormThree = () => {
  return (
    <>
      <InputBox name={'business_name'} label={'Business Name'} isCompulsory={true} placeholder={'Business Name'} />

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <div className="mt-6 ">
            <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor={'business_type'}>
              Business Type<span className="text-ayaDanger-200">*</span>
            </label>
            <select id="business_type" class="text-gray-900 focus:ring-blue-500 flex h-[54px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-full outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm" name='business_type'>
              <option selected>Choose a Business Type</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <InputBox name={'id_number'} width={'w-full'} label={'Identification Number'} isCompulsory={true} placeholder={'Identification Number'} />
        </div>
      </div>

      <InputBox name={'address'} label={'Address'} isCompulsory={true} placeholder={'Address'} />
      <InputBox name={'city'} label={'City'} isCompulsory={true} placeholder={'City'} />

      <div className="mt-6 ">
        <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor={'state'}>
          State<span className="text-ayaDanger-200">*</span>
        </label>
        <select id="state" class="text-gray-900 focus:ring-blue-500 flex h-[54px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-full outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm" name='state'>
          <option selected>Choose a State</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <button className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[50px] flex space-x-2 justify-center items-center'>
        Next <HiArrowNarrowRight />
      </button>
      <button className='bg-ayaPrimary-100 font-bold rounded-[8px] mt-6 text-ayaPrimary-600 w-[426px] h-[50px] flex space-x-2 justify-center items-center border border-ayaPrimary-600/20'>
        Return to previous
      </button>
    </>
  )
}

export default FormThree
