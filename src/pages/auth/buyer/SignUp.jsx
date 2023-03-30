import React, { useState } from 'react'
import AyaponeLogo from '../../../assets/images/ayapone_logo.svg'
import InputBox from '../../../components/forms/InputBox'
import Otp from '../components/Otp'
import { Link } from 'react-router-dom'
import routes from '../../../navigation/routes'
import { useBuyerSignupFormStore } from '../../../store/buyerSignupFormStore'
import { useCurrentUserStore } from '../../../store/currentUserStore'
import { LocalSignUp } from '../../../api/authApi'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const SignUp = () => {
  const [showOtp, setShowOtp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)
  const { first_name, last_name, email, phone, password, setLastName, setFirstName, setEmail, setPhone, setPassword } = useBuyerSignupFormStore()
  const { setToken, setUser, setWallet } = useCurrentUserStore()
  const signup = useMutation((userData) => LocalSignUp(userData))

  const handleSubmit = async () => {
    try {
      const response = await signup.mutateAsync({first_name, last_name, email, phone, password})
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
    <div className='bg-ayaNeutral-100 h-auto min-h-screen w-full grid place-items-center text-ayaNeutral-900'>
      <Link to={routes.HOME_PAGE}>
        <img src={AyaponeLogo} alt="logo" className='py-12 scale-150'/>
      </Link>
      
      { !showOtp ?
        <div className='bg-white rounded-[36px] h-auto w-[508px] py-16 px-10 mb-14 shadow'>
          <div className="text-center mb-10">
            <span className="font-bold text-2xl ">Sign Up</span><br />
            <span className="text-base ">Create your Ayapone account</span>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <InputBox name={'first_name'} width={'w-full'} label={'First Name'} isCompulsory={true} placeholder={'First Name'} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <InputBox name={'last_name'} width={'w-full'} label={'Last Name'} isCompulsory={true} placeholder={'Last Name'} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <InputBox name={'email'} label={'Email Address'} isCompulsory={true} placeholder={'Enter Email Address'} onChange={(e) => setEmail(e.target.value)} />
          <InputBox name={'phone'} label={'Phone Number'} isCompulsory={true} placeholder={'Enter Phone Number'} onChange={(e) => setPhone(e.target.value)} />
          <InputBox name={'password'} label={'Password'} isCompulsory={true} type={'password'} placeholder={'Enter Password'} onChange={(e) => setPassword(e.target.value)} />

          <button
            className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[54px]'
            onClick={() => handleSubmit()}
          >
            Sign Up
          </button>

          <div className="text-center mt-10">
            <span className="text-base">Already have an account? <Link to={routes.BUYER_SIGN_IN_PAGE} className='font-bold text-ayaPrimary-600'>Log In</Link></span>
            
            <div className="text-base pt-6">By signing up you accept our <Link to={routes.TERMS_AND_CONDITION_PAGE} className='text-ayaPrimary-600'>terms and condition & private policy</Link></div>
          </div>
        </div>
        :
        <Otp />
      }
    </div>
  );
}

export default SignUp
