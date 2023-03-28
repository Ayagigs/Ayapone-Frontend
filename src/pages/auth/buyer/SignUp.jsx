import React, { useState } from "react";
import AyaponeLogo from '../../../assets/images/ayapone_logo.svg'
import InputBox from '../../../components/forms/InputBox'
import { Link } from 'react-router-dom'
import routes from '../../../navigation/routes'
import { useBuyerSignupFormStore } from '../../../store/buyerSignupFormStore'
import { LocalSignUp } from '../../../api/authApi'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const { first_name, last_name, email, phone, password, setLastName, setFirstName, setEmail, setPhone, setPassword } = useBuyerSignupFormStore()
  const login = useMutation((userData) => LocalSignUp(userData));

  const handleSubmit = async () => {
    console.log('....submitting')
    try {
      const response = await login.mutateAsync({first_name, last_name, email, phone, password});
      if (response.ok) {
        console.log(response)
        // toast(response.data.message)
        toast("Account created Successfully!")
      }
      // if (verifyResponse(response)) {
      //   setToast({
      //     type: 'success',
      //     message: formatResponseMessage(response, 'Login Successful'),
      //   });
      //   resetForm();
      //   // navigate(routes.HOME_NAVIGATOR);
      // } else {
      //   setToast({
      //     type: 'error',
      //     message: formatResponseError(response),
      //   });
      // }
    } catch (error) {
      // setToast({
      //   type: 'error',
      //   message: formatError(error),
      // });
      console.log(error);
    }

  }

  return (
    <div className='bg-ayaNeutral-100 h-auto min-h-screen w-full grid place-items-center text-ayaNeutral-900'>
      <Link to={routes.HOME_PAGE}>
        <img src={AyaponeLogo} alt="logo" className='py-12 scale-150'/>
      </Link>
      
      <div className='bg-white rounded-[36px] h-auto w-[508px] py-16 px-10 mb-14 shadow'>
        <div className="text-center mb-10">
          <span className="font-bold text-2xl ">Sign Up</span><br />
          <span className="text-base ">Create your Ayapone account</span>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <InputBox name={'last_name'} width={'w-full'} label={'Last Name'} isCompulsory={true} placeholder={'Last Name'} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <InputBox name={'first_name'} width={'w-full'} label={'First Name'} isCompulsory={true} placeholder={'First Name'} onChange={(e) => setFirstName(e.target.value)} />
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
    </div>
  );
}

export default SignUp
