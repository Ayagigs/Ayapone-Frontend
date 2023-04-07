import React, { useRef } from 'react'
import { TiTimes } from 'react-icons/ti'
import { Editor } from '@tinymce/tinymce-react'
import { useProductCreateStore } from '../../../../../store/productCreateStore'
import { toast } from 'react-toastify'

const FormFour = () => {
  const { overview, specification, activeStep, setActiveStep, setOverview, setSpecification } = useProductCreateStore()

  const overviewRef = useRef(null)
  const specificationRef = useRef(null)
  setInterval(() => {
    // setOverview(overviewRef.current.getContent())
  //   setSpecification(specificationRef.current.getContent())
  }, 1000);

  return (
    <>
      <h3 className='text-center'>Product Overview & Specification</h3>

      <div className="mt-6 ">
        <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor='description'>
          Product Overview
        </label>
        <Editor
          apiKey={import.meta.env.VITE_TINYMCE_KEY}
          // onInit={(evt, editor) => setOverview(editor.getContent())}
          // onInit={(evt, overviewEditor) => overviewRef.current = overviewEditor}
          onChange={(evt, overviewEditor) => setOverview(overviewEditor.getContent())}
          initialValue={overview}
          init={{
            height: 400,
            menubar: false,
            statusbar: false,
            placeholder: 'Write a cool overview of your product.',
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
      </div>

      <div className="mt-6 ">
        <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor='description'>
          Product Specification
        </label>
        <Editor
          apiKey={import.meta.env.VITE_TINYMCE_KEY}
          // onInit={(evt, editor) => setSpecification(editor.getContent())}
          // onInit={(evt, specEditor) => specificationRef.current = specEditor}
          onChange={(evt, specEditor) => setSpecification(specEditor.getContent())}
          initialValue={specification}
          init={{
            height: 400,
            menubar: false,
            statusbar: false,
            placeholder: 'Give your customers more insight on the product.',
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
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
          
        >
          Done
        </button>
      </div>
    </>
  )
}

export default FormFour
