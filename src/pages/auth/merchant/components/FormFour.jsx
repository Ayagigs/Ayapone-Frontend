import InputBox from '../../../../components/forms/InputBox'
import { useMerchantSignupStore } from '../../../../store/merchantSignupStore'
import WalletTypes from '../../../../data/WalletTypes'
import { toast } from 'react-toastify'

const FormFour = () => {
  const { wallet_address, wallet_address_type, wallet_address_nickname, setWalletAddress, setWalletAddressType, setWalletAddressNickname, activeStep, setActiveStep } = useMerchantSignupStore()
  const next = () => {
    setActiveStep(activeStep+1)
  }
  return (
    <>
      <InputBox name={'wallet_address'} label={'Wallet Address'} isCompulsory={true} placeholder={'Wallet Address'} value={wallet_address} onChange={(e) => setWalletAddress(e.target.value)} />

      <div className="mt-6 ">
        <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor={'blockchain'}>
          Blockchain<span className="text-ayaDanger-200">*</span>
        </label>
        <select id="blockchain" className="text-gray-900 focus:ring-blue-500 flex h-[54px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-full outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm" name='blockchain' onChange={(e) => setWalletAddressType(e.target.value)}>
          <option defaultValue={`selected`}>Choose a Blockchain</option>
          {WalletTypes.map((item, index) => {
            return (item.id == wallet_address_type) ? <option key={index} value={item.id} selected='selected'>{item.name}</option> : <option key={index} value={item.id}>{item.name}</option>
          })}
        </select>
      </div>

      <InputBox name={'wallet_nickname'} label={'Wallet Nickname'} isCompulsory={true} placeholder={'Create a wallet Nickname'} value={wallet_address_nickname} onChange={(e) => setWalletAddressNickname(e.target.value)} />

      <button type='submit' className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[50px] flex space-x-2 justify-center items-center'>
        Submit
      </button>
      <button
        className='bg-ayaPrimary-100 font-bold rounded-[8px] mt-6 text-ayaPrimary-600 w-[426px] h-[50px] flex space-x-2 justify-center items-center border border-ayaPrimary-600/20'
        onClick={() => setActiveStep(activeStep-1)}
      >
        Return to previous
      </button>
    </>
  )
}

export default FormFour
