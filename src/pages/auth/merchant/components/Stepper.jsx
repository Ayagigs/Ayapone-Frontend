import InputBox from '../../../../components/forms/InputBox'

const Stepper = () => {
  return (
    <>
      <ol className="flex items-center w-full my-14">
        <li className='grid place-items-center'>
          <div className="flex w-full items-center text-ayaPrimary-900 after:content-[''] after:w-full after:h-0 after:border-b after:border-ayaPrimary-800 after:border-2 after:inline-block">
            <span className="flex items-center justify-center w-10 h-10 bg-white border-2 border-ayaPrimary-800 rounded-full lg:h-12 lg:w-12 shrink-0">
              1
            </span>
          </div>
          <div className='text-center text-sm font-bold'>Seller Information</div>
        </li>
        <li className='grid place-items-center'>
          <div className="flex w-full items-center after:content-[''] after:w-full after:h-0 after:border-b after:border-ayaPrimary-400 after:border-2 after:inline-block">
            <span className="flex items-center justify-center w-10 h-10 bg-white border-2 border-ayaPrimary-400 rounded-full lg:h-12 lg:w-12 shrink-0">
              2
            </span>
          </div>
          <div className='text-center text-sm font-normal'>Identity Verification</div>
        </li>
        <li className='grid place-items-center'>
          <div className="flex w-full items-center after:content-[''] after:w-full after:h-0 after:border-b after:border-ayaPrimary-400 after:border-2 after:inline-block">
            <span className="flex items-center justify-center w-10 h-10 bg-white border-2 border-ayaPrimary-400 rounded-full lg:h-12 lg:w-12 shrink-0">
              3
            </span>
          </div>
          <div className='text-center text-sm font-normal'>Business Information</div>
        </li>
        <li className='grid place-items-center'>
          <div className="flex w-full items-center">
            <span className="flex items-center justify-center w-10 h-10 bg-white border-2 border-ayaPrimary-400 rounded-full lg:h-12 lg:w-12 shrink-0">
              4
            </span>
          </div>
          <div className='text-center text-sm font-normal'>Account Information</div>
        </li>
      </ol>    
    </>
  )
}

export default Stepper
