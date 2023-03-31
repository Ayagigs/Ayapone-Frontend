import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useCurrentUserStore } from '../../../../store/currentUserStore'
import { toast } from 'react-toastify'

const BusinessWalletCard = () => {
  const { user, businessKyc } = useCurrentUserStore()
  const [copied, setCopied] = useState(false)

  return (
    <div className='bg-white shadow-8 rounded-lg font-medium h-auto w-[526px] p-6 flex flex-col space-y-6'>
      <div className='text-base'>
        <span>Wallet Information</span>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Wallet Address</span>
          <span className='text-base'>
            { businessKyc.wallet_address }...
            <CopyToClipboard
              text={businessKyc.wallet_address}
              onCopy={() => {setCopied(true); toast.success('Address Copied.', {autoClose: 1000, hideProgressBar: true})}}
            >
              <span className='text-ayaPrimary-600'>Copy</span>
            </CopyToClipboard>
          </span>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Address Type</span>
          <span className='text-base'>{ businessKyc.wallet_address_type || '--' }</span>
        </div>
        <div className='flex flex-col w-full'>
          <span className='text-ayaNeutral-500 text-xs'>Address Nickname</span>
          <span className='text-base'>{ businessKyc.wallet_address_nickname }</span>
        </div>
      </div>
    </div>
  )
}

export default BusinessWalletCard
