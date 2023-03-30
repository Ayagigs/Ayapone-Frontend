import React, { useState } from 'react'
import AyaponeLogo from '../../../assets/images/ayapone_logo.svg'
import GoogleIcon from '../../../assets/images/google_icon.svg'
import InputBox from '../../../components/forms/InputBox'
import { Link } from 'react-router-dom'
import routes from '../../../navigation/routes'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <div className='bg-ayaNeutral-100 h-auto min-h-screen w-full grid place-items-center text-ayaNeutral-900'>
      <Link to={routes.HOME_PAGE}>
        <img src={AyaponeLogo} alt="logo" className='py-12 scale-150'/>
      </Link>
      
      <div className='bg-white rounded-[36px] h-auto w-[508px] py-16 px-10 mb-14 shadow'>
        <div className="text-center mb-11">
          <span className="font-bold text-2xl ">Merchant Log In</span><br />
          <span className="text-base ">Login to your Ayapone Merchant account</span>
        </div>
        <div className="border border-ayaPrimary-900 hover:bg-ayaPrimary-200 grid place-items-center text-center mb-8 rounded-[8px] w-[426px] h-11">
          <span className="text-sm font-normal flex items-center">
            <img src={GoogleIcon} alt="google_icon" className='mr-4'/> Continue with Google
          </span>
        </div>
        <fieldset className="border-t border-ayaNeutral-500">
          <legend className="mx-auto px-4 text-lg">OR</legend>
        </fieldset>
        
        <InputBox name={'email'} label={'Email Address'} isCompulsory={true} placeholder={'Enter Email Address'} />
        <InputBox name={'password'} label={'Password'} isCompulsory={true} type={'password'} placeholder={'Enter Password'} />

        <button type="submit" className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[54px]'>
          Log In
        </button>

        <div className="text-center mt-10">
          <span className="text-base">Don’t have an account? <Link to={routes.MERCHANT_SIGN_UP_PAGE} className='font-bold text-ayaPrimary-600'>Sign Up as a Merchant</Link></span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
