import InputBox from '../../../../components/forms/InputBox'

const StepFour = () => {
  return (
    <>
      <InputBox name={'wallet_address'} label={'Wallet Address'} isCompulsory={true} placeholder={'Wallet Address'} />

      <div className="mt-6 ">
        <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor={'blockchain'}>
          Blockchain<span className="text-ayaDanger-200">*</span>
        </label>
        <select id="blockchain" class="text-gray-900 focus:ring-blue-500 flex h-[54px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-full outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm" name='blockchain'>
          <option selected>Choose a Blockchain</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <InputBox name={'wallet_nickname'} label={'Wallet Nickname'} isCompulsory={true} placeholder={'Create a wallet Nickname'} />

      <button className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[50px] flex space-x-2 justify-center items-center'>
        Submit
      </button>
      <button className='bg-ayaPrimary-100 font-bold rounded-[8px] mt-6 text-ayaPrimary-600 w-[426px] h-[50px] flex space-x-2 justify-center items-center border border-ayaPrimary-600/20'>
        Return to previous
      </button>
    </>
  )
}

export default StepFour
