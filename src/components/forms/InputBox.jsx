import { Link } from 'react-router-dom'

const InputBox = ({
  name,
  isCompulsory,
  ...otherProps
}) => {
  return (
    <>
      <div className="font-poppins mt-1 ">
        <label className="font-bold text-sm" htmlFor={name}>
          {name}
          {isCompulsory && <span className="text-red-500">*</span>}
        </label>
        <input
          className="flex h-8 bg-shuInputBackgroundGray text-sm border rounded-md border-shuInputBorderGray focus:border-shuYellowWarning w-full outline-none px-2 placeholder:text-shuGrey placeholder:font-nunito placeholder:text-sm "
          type="text"
          id={name}
          name={name}
          {...otherProps}
        />
      </div>
    </>
  )
}

export default InputBox
