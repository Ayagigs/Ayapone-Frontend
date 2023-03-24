import React, { useState } from "react";
import AyaponeLogo from '../../../assets/images/ayapone_logo.svg'
import InputBox from '../../../components/forms/InputBox'
import { Link } from 'react-router-dom'
import routes from '../../../navigation/routes'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <div className='bg-ayaNeutral-100 h-auto min-h-screen w-full grid place-items-center text-ayaNeutral-900'>
        <img src={AyaponeLogo} alt="logo" className='py-12 scale-150'/>

        <div className='bg-white rounded-[36px] h-auto w-[508px] py-16 px-10 mb-14 shadow'>
          <div className="text-center mb-10">
            <span className="font-bold text-2xl ">Sign Up</span><br />
            <span className="text-base ">Create your Ayapone account</span>
          </div>
          <InputBox name={'name'} label={'Name'} isCompulsory={true} placeholder={'First Name and Last Name'} />
          <InputBox name={'email'} label={'Email Address'} isCompulsory={true} placeholder={'Enter Email Address'} />
          <InputBox name={'phone'} label={'Phone Number'} isCompulsory={true} placeholder={'Enter Phone Number'} />
          <InputBox name={'password'} label={'Password'} isCompulsory={true} type={'password'} placeholder={'Enter Password'} />

          <button type="submit" className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[54px]'>
            Sign Up
          </button>

          <div className="text-center mt-10">
            <span className="text-base">Already have an account? <Link to={routes.BUYER_SIGN_IN_PAGE} className='font-bold text-ayaPrimary-600'>Log In</Link></span>
            
            <div className="text-lg pt-6">By signing up you accept our <Link to={routes.TERMS_AND_CONDITION_PAGE} className='text-ayaPrimary-600'>terms and condition & private policy</Link></div>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
