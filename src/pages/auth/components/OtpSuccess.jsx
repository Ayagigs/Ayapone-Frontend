import React, { useState } from "react";
import { Link } from 'react-router-dom'
import routes from '../../../navigation/routes'
import successImg from '../../../assets/images/success_check.svg'
import { useCurrentUserStore } from '../../../store/currentUserStore'

const OtpSuccess = () => {
  const { user } = useCurrentUserStore()
  return (
    <div className='bg-white rounded-[36px] h-auto w-[585px] py-10 px-10 mb-14 shadow'>
      <div className="px-11 py-1 flex flex-col">
        <div className="flex flex-row items-center justify-between pb-10">
          <div className="flex flex-row item-center justify-center w-full space-x-12">
            <img src={successImg} alt="" />
          </div>
        </div>
        <div className='text-center flex flex-col item-center'>
          <div className="text-center text-xs mb-11">
            <span className="font-normal">Please enter the 4-digit code sent to</span><br />
            <span className="font-bold">{user.email}</span>
          </div>
          <h3>Account Activated</h3>
          <p>Welcome, { user.user_role }!</p>

          <p className="text-base font-normal text-center mt-5">
            <Link to={routes.HOME_PAGE} className='font-bold text-ayaPrimary-600 py-3 px-[14px] border border-ayaPrimary-600 bg-ayaPrimary-100'>Return to Home</Link>

            <Link to={user.user_role == 'merchant' ? '/merchant/dashboard' : '/buyer/dashboard'} className='font-bold bg-ayaPrimary-600 text-white py-3 px-[14px] h-[50px]'>Proceed to Dashboard</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpSuccess;
