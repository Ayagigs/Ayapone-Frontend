import React, { useRef } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { MdPhotoCameraBack } from 'react-icons/md'
import { TiTimes } from 'react-icons/ti'
import { useProductCreateStore } from '../../../../../store/productCreateStore'
import { toast } from 'react-toastify'
import useFileUpload from 'react-use-file-upload'

const FormThree = () => {
  const { activeStep, setActiveStep } = useProductCreateStore()
  const next = () => {
    setActiveStep(activeStep+1)
  }

  const {
    files,
    handleDragDropEvent,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload()

  const inputRef = useRef()

  return (
    <>
      <h3 className='text-center'>Product Images</h3>

      <div
        className='w-full h-36 rounded-lg border-2 border-dashed border-ayaPrimary-600/20 bg-ayaPrimary-100 text-ayaPrimary-600 flex items-center justify-center flex-col space-y-4'
        onDragEnter={handleDragDropEvent}
        onDragOver={handleDragDropEvent}
        onDrop={(e) => {
          handleDragDropEvent(e);
          setFiles(e, 'a');
        }}
      >
        <MdPhotoCameraBack className='text-2xl'/>
        <button
          className='bg-ayaPrimary-500 font-medium rounded-lg px-3 text-white w-auto h-[30px] flex space-x-2 justify-center items-center'
          onClick={() => inputRef.current.click()}
        >
          Select Image(s)
        </button>

        <input
          ref={inputRef}
          type="file"
          multiple
          max={4}
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => {
            setFiles(e, 'a')
            inputRef.current.value = null
          }}
        />
      </div>

      <div className='w-full space-y-3'>
        {files.map((file) => (
          <div className='flex flex-row space-x-2' key={file.name}>
            <div className='border-2 border-ayaNeutral-400 rounded-md h-20 w-20 bg-center bg-cover' style={{backgroundImage: 'url('+URL.createObjectURL(file)+')'}}></div>
            <div className={`font-semibold text-xs w-full grid grid-cols-2 place-content-center`}>
              <span>{file.name}</span>
              <TiTimes onClick={() => removeFile(file.name)} />
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-row space-x-4 justify-end'>
        <button
          className='bg-ayaPrimary-100 font-bold rounded-[8px] text-ayaPrimary-600 w-[102px] h-[50px] flex space-x-2 justify-center items-center border border-ayaPrimary-600/20'
          onClick={() => setActiveStep(activeStep-1)}
        >
          Back
        </button>
        <button 
          className='bg-ayaPrimary-600 font-bold rounded-lg text-white w-[228px] h-[50px] flex space-x-2 justify-center items-center'
          onClick={() => next()}
        >
          Save & Continue <HiArrowNarrowRight />
        </button>
      </div>
    </>
  )
}

export default FormThree
