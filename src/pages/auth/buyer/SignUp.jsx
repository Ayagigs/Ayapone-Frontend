import React, { useState } from "react";
import AyaponeLogo from '../../../assets/images/ayapone_logo.svg'
import InputBox from '../../../components/forms/InputBox'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <div className='bg-ayaNeutral-100 h-auto min-h-screen w-screen grid place-items-center'>
        <img src={AyaponeLogo} alt="logo" className='py-12'/>

        <div className='bg-white rounded-[36px] min-h-[840px] min-w-[508px] py-16 px-10 shadow'>
          <InputBox name={'name'} label={'Name'} isCompulsory={true} placeHolder={'First Name and Last Name'} />
          <InputBox name={'email'} label={'Email Address'} isCompulsory={true} placeHolder={'Enter Email Address'} />
          <InputBox name={'phone'} label={'Phone Number'} isCompulsory={true} placeHolder={'Enter Phone Number'} />
          <InputBox name={'password'} label={'Password'} isCompulsory={true} placeHolder={'Enter Password'} />
        </div>
    </div>
  );
};

export default SignUp;
