import React, { useState } from 'react'
import AyaponeLogo from '../../../assets/images/ayapone_logo.svg'
import OtpInput from 'react-otp-input'
import { Link, useNavigate } from 'react-router-dom'
import routes from '../../../navigation/routes'
import { useCurrentUserStore } from '../../../store/currentUserStore'
import { AdminSignIn } from '../../../api/authApi'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const VerifySignIn = () => {
  const { setToken, setUser } = useCurrentUserStore()
  const [otpCode, setOtpCode] = useState('')
  const signin = useMutation((adminData) => AdminSignInVerify(adminData))
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const response = await signin.mutateAsync({code, otp: otpCode})
      if (response) {
        console.log(response)
        if (response.ok) {
          console.log(buyer.user_role);
          if (buyer.user_role == 'admin') {
            const admin = response.data.data.user
            setUser(admin)
            setToken(response.data.data.token)
            toast.success(response.data.message)
            
            navigate(`/admin/${routes.DASHBOARD_PAGE}`)
          }
          else {
            toast.error('ACCESS DENIED!!')
          }
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
        
        <div className="text-center text-xs mb-11">
          <span className="font-normal">Please enter the 8-digit code sent to your email</span>
        </div>

        <OtpInput
          value={otpCode}
          onChange={setOtpCode}
          numInputs={8}
          renderSeparator={<span>-</span>}
          inputStyle={'flex min-h-[48px] min-w-[48px] bg-white text-sm border rounded-lg border-ayaNeutral-600 outline-none px-2'}
          shouldAutoFocus={true}
          inputType={'tel'}
          renderInput={(props) => <input {...props} />}
        />

        <button className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[54px]'
          onClick={() => handleSubmit()}
        >
          Confirm
        </button>

        <div className="text-center mt-10">
          <span className="text-base">Didn't get the code? <Link to={routes.ADMIN_SIGN_IN_PAGE} className='font-bold text-ayaPrimary-600'>Try Again</Link></span>
        </div>
      </div>
    </div>
  );
};

export default VerifySignIn;
