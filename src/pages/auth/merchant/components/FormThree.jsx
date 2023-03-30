import InputBox from '../../../../components/forms/InputBox'
import { useMerchantSignupStore } from '../../../../store/merchantSignupStore'
import { HiArrowNarrowRight } from 'react-icons/hi'
import BusinessTypes from '../../../../data/BusinessTypes'
import { toast } from 'react-toastify'

const FormThree = () => {
  const { business_name, registration_number, business_type, address, city, state, country, postal_code, setBusinessName, setRegistrationNumber, setBusinessType, setAddress, setCity, setState, setCountry, setPostalCode, activeStep, setActiveStep } = useMerchantSignupStore()
  const next = () => {
    setActiveStep(activeStep+1)
  }
  return (
    <>
      <InputBox name={'business_name'} label={'Business Name'} isCompulsory={true} placeholder={'Business Name'} value={business_name} onChange={(e) => setBusinessName(e.target.value)} />

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <div className="mt-6 ">
            <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor={'business_type'}>
              Business Type<span className="text-ayaDanger-200">*</span>
            </label>
            <select id="business_type" className="text-gray-900 focus:ring-blue-500 flex h-[54px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-full outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm" name='business_type' onChange={(e) => setBusinessType(e.target.value)}>
              <option defaultValue={`selected`}>Choose a Business Type</option>
              {BusinessTypes.map((item, index) => {
                return (item.id == business_type) ? <option key={index} value={item.id} selected='selected'>{item.name}</option> : <option key={index} value={item.id}>{item.name}</option>
              })}
            </select>
          </div>

          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <InputBox name={'registration_number'} width={'w-full'} label={'Identification Number'} isCompulsory={true} placeholder={'Identification Number'} value={registration_number} onChange={(e) => setRegistrationNumber(e.target.value)} />
        </div>
      </div>

      <InputBox name={'address'} label={'Address'} isCompulsory={true} placeholder={'Address'} value={address} onChange={(e) => setAddress(e.target.value)} />
      <InputBox name={'city'} label={'City'} isCompulsory={true} placeholder={'City'} value={city} onChange={(e) => setCity(e.target.value)} />
      <InputBox name={'state'} label={'State'} isCompulsory={true} placeholder={'State'} value={state} onChange={(e) => setState(e.target.value)} />
      <InputBox name={'country'} label={'Country'} isCompulsory={true} placeholder={'Country'} value={country} onChange={(e) => setCountry(e.target.value)} />

      <button
        className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[50px] flex space-x-2 justify-center items-center'
        onClick={() => next()}
      >
        Next <HiArrowNarrowRight />
      </button>
      <button
        className='bg-ayaPrimary-100 font-bold rounded-[8px] mt-6 text-ayaPrimary-600 w-[426px] h-[50px] flex space-x-2 justify-center items-center border border-ayaPrimary-600/20'
        onClick={() => setActiveStep(activeStep-1)}
      >
        Return to previous
      </button>
    </>
  )
}

export default FormThree
