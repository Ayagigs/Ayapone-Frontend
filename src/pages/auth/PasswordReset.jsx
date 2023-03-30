import React, { useState } from "react";
import AyaponeLogo from '../../assets/images/ayapone_logo.svg'
import InputBox from '../../components/forms/InputBox'
import { Link, useParams } from 'react-router-dom'
import routes from '../../navigation/routes'

const PasswordReset = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { token } = useParams()
  console.log(token)

  return (
    <div className='bg-ayaNeutral-100 h-auto min-h-screen w-full grid place-items-center text-ayaNeutral-900'>
        <Link to={routes.HOME_PAGE}>
          <img src={AyaponeLogo} alt="logo" className='py-12 scale-150'/>
        </Link>

        <div className='bg-white rounded-[36px] h-auto w-[508px] py-16 px-10 mb-14 shadow'>
          <div className="text-center mb-11">
            <span className="font-bold text-2xl ">New Password</span><br />
            <span className="text-base ">Create your new Ayapone password</span>
          </div>
          
          <InputBox name={'new_password'} label={'New Password'} isCompulsory={true} type={'password'} placeholder={'Password'} />
          <InputBox name={'verify_password'} label={'Verify Password'} isCompulsory={true} type={'password'} placeholder={'Password'} />

          <button type="submit" className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[54px]'>
            Submit
          </button>
          <button
            className='bg-ayaPrimary-100 font-bold rounded-[8px] mt-6 text-ayaPrimary-600 w-[426px] h-[50px] flex space-x-2 justify-center items-center border border-ayaPrimary-600/20'
          >
            Cancel
          </button>
        </div>
    </div>
  );
};

export default PasswordReset;
