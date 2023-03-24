import React, { useState } from "react";
import AyaponeLogo from '../../../assets/images/ayapone_logo.svg'
import InputBox from '../../../components/forms/InputBox'
import { Link } from 'react-router-dom'
import routes from '../../../navigation/routes'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import StepFour from './components/StepFour'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <div className='bg-ayaNeutral-100 h-auto min-h-screen w-full grid place-items-center text-ayaNeutral-900'>
        <img src={AyaponeLogo} alt="logo" className='py-12 scale-150'/>

        <div className='bg-white rounded-[36px] h-auto w-[508px] py-16 px-10 mb-14 shadow'>
          <div className="text-center mb-10">
            <span className="font-bold text-2xl ">Merchant Sign Up</span><br />
            <span className="text-base ">Create an account to sell on Ayapone</span>
          </div>

          <ul data-te-stepper-init
            class="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
            <StepOne />
            <StepTwo />
            <StepThree />
            <StepFour />
          </ul>

          <div className="text-center mt-10">
            <span className="text-base">Already a Merchant? <Link to={routes.MERCHANT_SIGN_IN_PAGE} className='font-bold text-ayaPrimary-600'>Log In</Link></span>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
