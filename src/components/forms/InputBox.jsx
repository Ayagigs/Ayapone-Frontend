
const InputBox = ({
  name,
  label,
  isCompulsory,
  ...otherProps
}) => {
  return (
      <div className="font-notosans mt-6 ">
        <label className="font-bold text-sm mb-2" htmlFor={name}>
          {label}
          {isCompulsory && <span className="text-red-500">*</span>}
        </label>
        <input
          className="flex h-[43px] bg-white text-sm border rounded-[8px] border-ayaNeutral-600 w-[309px] outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm "
          type="text"
          id={name}
          name={name}
          {...otherProps}
        />
      </div>
  )
}

export default InputBox
