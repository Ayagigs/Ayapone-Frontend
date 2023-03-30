import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCurrentUserStore } from '../../../../store/currentUserStore'

const MerchantBusinessCard = () => {
  const { user, businessKyc } = useCurrentUserStore()
  return (
    <div className='bg-white shadow-8 rounded-lg font-medium h-auto w-[536px] p-6 flex flex-col space-y-6'>
      <div className='text-base'>
        <span>Business Information</span>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Business Name</span>
          <span className='text-base'>{ businessKyc.business_name }</span>
        </div>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Address</span>
          <span className='text-base'>{ businessKyc.address || '--' }</span>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Registration Number</span>
          <span className='text-base'>{ businessKyc.registration_number || '--' }</span>
        </div>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Business Type</span>
          <span className='text-base'>{ businessKyc.business_type }</span>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Location</span>
          <span className='text-base'>{ `${businessKyc.city}, ${businessKyc.state}, ${businessKyc.country}` }</span>
        </div>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Verification Status</span>
          <span className='text-base italic'>{ businessKyc.verification_status }</span>
        </div>
      </div>
      <div className='text-sm font-normal'>
        <p>To modify business information, contact <Link to={'mailto:support@ayapone.com'} className='text-ayaPrimary-600'>support@ayapone.com</Link></p>
      </div>
    </div>
  )
}

export default MerchantBusinessCard
