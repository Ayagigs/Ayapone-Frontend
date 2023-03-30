import React, { useState } from 'react'
import AyaponeLogo from '../../assets/images/ayapone_logo.svg'
import InputBox from '../../components/forms/InputBox'
import { Link } from 'react-router-dom'
import routes from '../../navigation/routes'
import { RequestPasswordReset } from '../../api/authApi'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const requestReset = useMutation((userData) => RequestPasswordReset(userData))

  const handleSubmit = async () => {
    try {
      const response = await requestReset.mutateAsync({ email })
      if (response) {
        console.log(response)
        if (response.ok) {
          toast.success(response.data.message)
        } else {
          toast.error(response.data?.message || response.problem)
        }
      }
    } catch (error) {
      toast.error('an error occured!')
      console.log('error is: ', error)
    }
  }

  return (
    <div className='bg-ayaNeutral-100 h-auto min-h-screen w-full grid place-items-center text-ayaNeutral-900'>
        <Link to={routes.HOME_PAGE}>
          <img src={AyaponeLogo} alt="logo" className='py-12 scale-150'/>
        </Link>

        <div className='bg-white rounded-[36px] h-auto w-[508px] py-16 px-10 mb-14 shadow'>
          <div className="text-center mb-11">
            <span className="font-bold text-2xl ">Forgot Password?</span><br />
            <span className="text-base ">Reset your Ayapone password</span>
          </div>
          
          <InputBox name={'email'} label={'Email Address'} isCompulsory={true} placeholder={'Enter Email Address'} onChange={(e) => setEmail(e.target.value)} />

          <button className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[54px]'
            onClick={() => handleSubmit()}
          >
            Send code
          </button>
          <button
            className='bg-ayaPrimary-100 font-bold rounded-[8px] mt-6 text-ayaPrimary-600 w-[426px] h-[50px] flex space-x-2 justify-center items-center border border-ayaPrimary-600/20'
          >
            Back
          </button>
        </div>
    </div>
  );
};

export default ForgotPassword;
