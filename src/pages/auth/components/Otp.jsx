import React, { useState } from "react";
import OtpInput from 'react-otp-input'
import { Link } from 'react-router-dom'
import routes from '../../../navigation/routes'
import { useCurrentUserStore } from '../../../store/currentUserStore'
import { VerifyEmail } from '../../../api/authApi'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import OtpSuccess from './OtpSuccess'

const Otp = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [otp, setOtp] = useState('')
  const { user, setUser } = useCurrentUserStore()
  const verify = useMutation((verificationData) => VerifyEmail(verificationData))
  const handleSubmit = async () => {
    try {
      const response = await verify.mutateAsync({email: user.email, token: otp})
      if (response) {
        console.log(response)
        if (response.ok) {
          setUser(response.data.data.user)
          toast.success(response.data.message)
          setShowSuccess(true)

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
    <>
      { !showSuccess ?
        <div className='bg-white rounded-[36px] h-auto w-[406px] py-10 px-10 mb-14 shadow'>
          <div className="px-11 py-1 flex flex-col">
            <div className="flex flex-row items-center justify-between pb-10">
              <div className="flex flex-row item-center justify-center w-full space-x-12">
                <div className='font-semibold text-2xl'>Verification</div>
              </div>
              <button >X</button>
            </div>
            <div className='text-center flex flex-col item-center'>
              <div className="text-center text-xs mb-11">
                <span className="font-normal">Please enter the 4-digit code sent to</span><br />
                <span className="font-bold">{user.email}</span>
              </div>

              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                inputStyle={'flex min-h-[48px] min-w-[48px] bg-white text-sm border rounded-lg border-ayaNeutral-600 outline-none px-2'}
                shouldAutoFocus={true}
                inputType={'tel'}
                renderInput={(props) => <input {...props} />}
              />

              <button type="submit" className='bg-ayaPrimary-600 font-semibold text-base rounded-[8px] mt-12 text-white w-[264px] h-[50px]'
                onClick={() => handleSubmit()}
              >
                Verify Email
              </button>

              <p className="text-base font-normal text-center mt-5">Didn’t get a code? <Link to={routes.BUYER_SIGN_IN_PAGE} className='font-bold text-ayaPrimary-600'>Click to resend</Link></p>
            </div>
          </div>
        </div>
        :
        <OtpSuccess />
      }
    </>
  );
};

export default Otp;
