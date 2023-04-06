import { MdContentCopy } from 'react-icons/md'
import React, { useState } from 'react'
import image from '../../../assets/images/cart_oraimo.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const OrderedInfo = () => {
  const [ copiedTranx, setCopiedTranx ] = useState(false)
  const [ copiedRef, setCopiedRef ] = useState(false)
  const tranx_id = '01020323023024vyrfd323'
  const ref_id = '93832483334232'
  return (
    <main className='pl-2 pt-4 mt-12'>
      <div className='flex flex-wrap gap-4 mt-6'>
        <div className='bg-white shadow-8 rounded-2xl h-auto w-[1112px] p-6 flex flex-row justify-between'>
          <div className="flex flex-col justify-between min-w-[88px] min-h-[108px]">
            <img src={image} alt="" className="" />
          </div>
          <div className={`font-bold text-base w-full grid grid-cols-1 gap-1 place-content-center`}>
            Oraimo Freepods 3
            <div className={`font-normal text-sm pt-2 text-ayaNeutral-600`}>
              Order #12345678
            </div>
            <div className={`font-normal text-sm pt-2 text-ayaNeutral-600 space-x-6`}>
              <span>Colour: Black</span>
              <span>Qty: 1</span>
            </div>
          </div>
          <div className={`font-bold text-sm text-ayaNeutral-600 w-full grid grid-cols-1 gap-1 place-content-center`}>
            <div>Ordered</div>
            <div>22 Jan, 2023</div>
          </div>
          <div className={`font-bold text-base w-full grid grid-cols-2 place-content-center space-x-8`}>
            <button
              className='bg-ayaPrimary-500 font-bold rounded-[8px] text-white w-[186px] border h-[50px] flex space-x-2 justify-center items-center'
            >
              Confirm Delivery
            </button>
            <button
              className='bg-ayaPrimary-100 text-ayaPrimary-600 font-bold rounded-[8px] w-[186px] border border-ayaPrimary-200 h-[50px] flex space-x-2 justify-center items-center'
            >
              Cancel Order
            </button>
          </div>
        </div>
        <div className='bg-white shadow-8 rounded-2xl font-medium h-auto w-[626px] p-6 flex flex-col space-y-6'>
          <div className='text-base'>
            <span>Order Information</span>
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col w-full'>
              <span className='text-ayaNeutral-500 text-xs'>Transaction ID</span>
              <span className='text-base flex flex-row'>
                { tranx_id }
                <CopyToClipboard
                  text={tranx_id}
                  onCopy={() => setCopiedTranx(true)}
                >
                  <span className='text-ayaPrimary-600 flex flex-row'> Copy <MdContentCopy className='rotate-180'/></span>

                </CopyToClipboard>
              </span>
            </div>
            <div className='flex flex-col w-full'>
              <span className='text-ayaNeutral-500 text-xs'>Reference Number</span>
              <span className='text-base flex flex-row'>
                { ref_id }
                <CopyToClipboard
                  text={ref_id}
                  onCopy={() => setCopiedRef(true)}
                >
                  <span className='text-ayaPrimary-600 flex flex-row'> Copy <MdContentCopy className='rotate-180'/></span>

                </CopyToClipboard>
              </span>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col w-full'>
              <span className='text-ayaNeutral-500 text-xs'>Delivery Method</span>
              <span className='text-base'>{ 'Door Delivery' }</span>
            </div>
            <div className='flex flex-col w-full'>
              <span className='text-ayaNeutral-500 text-xs'>Delivery Address</span>
              <span className='text-base'>{ '32, Olumo Str, Lokoja.' }</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderedInfo;
