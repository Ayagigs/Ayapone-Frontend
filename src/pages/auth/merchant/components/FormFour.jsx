import InputBox from '../../../../components/forms/InputBox'
import { useMerchantSignupStore } from '../../../../store/merchantSignupStore'
import { useCurrentUserStore } from '../../../../store/currentUserStore'
import WalletTypes from '../../../../data/WalletTypes'
import { LocalSignUp } from '../../../../api/authApi'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const FormFour = () => {
  const { last_name, first_name, email, phone, password, id_number, id_type, id_front_image_url, id_back_image_url, business_name, registration_number, business_type, address, city, state, country, postal_code, wallet_address, wallet_address_type, wallet_address_nickname, setWalletAddress, setWalletAddressType, setWalletAddressNickname, activeStep, setActiveStep, setShowOtp } = useMerchantSignupStore()
  const { setToken, setUser, setWallet, setBusinessKyc } = useCurrentUserStore()
  const signup = useMutation((userData) => LocalSignUp(userData))

  const handleSubmit = async () => {
    try {
      let businessKyc = {
        business_name,
        registration_number,
        business_type,
        address,
        city,
        state,
        country,
        postal_code,
        wallet_address,
        wallet_address_type,
        wallet_address_nickname
      }
      const response = await signup.mutateAsync({
        last_name,
        first_name,
        email,
        phone,
        password,
        id_number,
        id_type,
        id_front_image_url,
        id_back_image_url,
        businessKyc
      })
      if (response) {
        console.log(response)
        if (response.ok) {
          setToken(response.data.data.token)
          setUser(response.data.data.user)
          const wallet = {
            bonus_wallet: response.data.data.wallet.bonus_wallet,
            main_wallet: response.data.data.wallet.main_wallet,
            created_at: response.data.data.wallet.created_at,
            updated_at: response.data.data.wallet.updated_at
          }
          setWallet(wallet)
          setBusinessKyc(response.data.data.businessKyc)
          toast.success(response.data.message)
          setShowOtp(true)
        } else {
          toast.error(response.data?.message || response.problem)
        }
      }
    } catch (error) {
      toast.error('an error occured!')
      console.log('error is: ', error);
    }
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

      <button className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[50px] flex space-x-2 justify-center items-center' onClick={() => handleSubmit()}>
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
