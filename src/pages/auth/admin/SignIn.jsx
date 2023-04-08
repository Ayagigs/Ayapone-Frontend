import React, { useState } from 'react'
import AyaponeLogo from '../../../assets/images/ayapone_logo.svg'
import InputBox from '../../../components/forms/InputBox'
import { Link, useNavigate } from 'react-router-dom'
import routes from '../../../navigation/routes'
import { AdminSignIn } from '../../../api/authApi'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const SignIn = () => {
  const signin = useMutation((adminData) => AdminSignIn(adminData))
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const response = await signin.mutateAsync({email})
      if (response) {
        console.log(response)
        if (response.ok) {
          localStorage.setItem('avs', response.data?.data.code)
          navigate(`/admin/verify-self/${response.data?.data.code}`)
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

      <div className='bg-white rounded-[36px] h-auto w-[508px] py-16 px-10 mb-14 shadow'>
        <div className="text-center mb-11">
          <span className="font-bold text-2xl ">Admin Log In</span><br />
        </div>
        
        <InputBox name={'email'} label={'Email Address'} isCompulsory={true} placeholder={'Enter Email Address'} onChange={(e) => setEmail(e.target.value)} />
        <button className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[54px]'
          onClick={() => handleSubmit()}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
