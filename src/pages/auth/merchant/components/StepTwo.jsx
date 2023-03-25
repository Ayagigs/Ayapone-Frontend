import InputBox from '../../../../components/forms/InputBox'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { MdPhotoCameraBack } from 'react-icons/md'

const StepTwo = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <div className="mt-6 ">
            <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor={'documenttype'}>
              Select Document Type<span className="text-ayaDanger-200">*</span>
            </label>
            <select id="documenttype" class="text-gray-900 focus:ring-blue-500 flex h-[54px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-full outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm">
              <option selected>Choose a Document Type</option>
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

      <div className='text-sm w-[294px]'>
        <p className='font-bold pb-4'>Upload Image of your Identity Card</p>
        <ul className='list-disc list-inside text-ayaNeutral-600'>
          <li>Full color image</li>
          <li>All details on ID must be readable</li>
          <li>Image must not have watermark</li>
          <li>Image should not be blurred </li>
          <li>Image must not have any other obfuscation</li>
          <li>ID must be well lit</li>
          <li>ID details must not be obscured by light glare or reflections (be careful with flash!)</li>
          <li>ID must be in good shape</li>
        </ul>
      </div>

      <div className='text-sm mt-6'>
        <p className='font-bold pb-4'>File size must NOT exceed 512KB in jpg/jpeg/png</p>
        <div className='flex items-center'>
          <div className='flex items-center w-[154px] h-[118px] bg-ayaNeutral-100 border border-ayaNeutral-300 rounded-2xl'>
            <MdPhotoCameraBack /><br/>
            Upload Front Page
          </div>
          <div className='flex items-center w-[154px] h-[118px] bg-ayaNeutral-100 border border-ayaNeutral-300 rounded-2xl'>
            <MdPhotoCameraBack /><br/>
            Upload Back Page
          </div>
        </div>
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

export default StepTwo
