import qr from '../../../../assets/images/qr.svg'
import React, {useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ModalData = ({
  closeModal
}) => {
  const [qrIsOpen, setQrOpen] = useState(true)
  const [copied, setCopied] = useState(false)
  const walletAddress = '0x9693Ga0jks33453bj34bH3d3djk3k4r333F2e'
  
  return (
    <div className="px-11 py-1 flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row item-center justify-center w-full space-x-12">
          <div className={`pb-2 ${qrIsOpen && 'border-b-2 border-b-ayaPrimary-600'}`}
           onClick={() =>setQrOpen(true)}
          >QR Code</div>
          <div className={`pb-2 ${!qrIsOpen && 'border-b-2 border-b-ayaPrimary-600'}`}
           onClick={() =>setQrOpen(false)}
          >Wallet Address</div>
        </div>
        <button onClick={closeModal}>X</button>
      </div>
      { qrIsOpen ? 
        <div className='pt-12 text-center flex flex-col item-center'>
          <img src={qr} alt="" className='border border-ayaPrimary-600 rounded-lg max-h-[248px] max-w-[248px]' />
          <p className='pt-8 pb-3'>Scan the QR Code to (other information goes here)</p>
        </div>
      :
        <div className='pt-12 text-center flex flex-col item-center'>
          <p className='p-4 w-[378px] h-14 border border-ayaPrimary-600 rounded-lg'>{walletAddress}</p>
          <CopyToClipboard
            text={walletAddress}
            onCopy={() => setCopied(true)}
          >
            <button
              className='bg-ayaPrimary-600 font-semibold rounded-[8px] text-white w-[104px] h-[50px] flex justify-center items-center mt-6'
            >
              Copy
            </button>
          </CopyToClipboard>
          {copied && <span style={{color: 'red'}}>Copied.</span>}
          <p className='pt-10 pb-3'>Copy the wallet address and (other information goes here)</p>
        </div>
      }
    </div>
  )
}

export default ModalData
