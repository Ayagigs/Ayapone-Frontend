import React, { useState } from 'react'
import { useCurrentUserStore } from '../../../../store/currentUserStore'

const UserProfileCard = () => {
  const { user, setUser } = useCurrentUserStore()
  return (
    <div className='bg-white shadow-8 rounded-lg font-medium h-auto w-[526px] p-6 flex flex-col space-y-6'>
      <div className='flex justify-between text-base'>
        <span>Personal Information</span>
        <span className='text-ayaPrimary-600'>Edit</span>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Name</span>
          <span className='text-base'>{ user.last_name + ', ' + user.first_name }</span>
        </div>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Email Address</span>
          <span className='text-base'>{ user.email }</span>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Username</span>
          <span className='text-base'>{ user.username || '--' }</span>
        </div>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Phone Number</span>
          <span className='text-base'>{ user.phone_number || '--' }</span>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Gender</span>
          <span className='text-base'>{ user.gender || '--' }</span>
        </div>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Date of Birth</span>
          <span className='text-base'>{ user.date_of_birth || '--' }</span>
        </div>
      </div>
    </div>
  )
}

export default UserProfileCard
