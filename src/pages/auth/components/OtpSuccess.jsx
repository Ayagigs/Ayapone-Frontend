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
          <div className="text-center text-xs mb-2">
            <span className="font-semibold text-2xl">Registration Successful</span>
          </div>
          <p>Welcome onboard, { user.user_role == 'merchant' ? 'Merchant' : user.first_name }!</p>

          <div className="text-base font-normal space-x-4 text-center mt-10">
            { user.user_role == 'merchant' ? 
              <>
                <Link to={routes.HOME_PAGE} className='font-bold text-ayaPrimary-600 py-3 px-[14px] border border-ayaPrimary-600 rounded-[8px] bg-ayaPrimary-100'>Return to Home</Link>

                <Link to={'/merchant/dashboard'} className='font-bold bg-ayaPrimary-600 rounded-[8px] text-white py-3 px-[14px] h-[50px]'>Proceed to Dashboard</Link>
              </>
            :
              <Link to={routes.HOME_PAGE} className='font-bold bg-ayaPrimary-600 rounded-[8px] text-white py-3 px-[14px] h-[50px]'>Continue</Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpSuccess;
