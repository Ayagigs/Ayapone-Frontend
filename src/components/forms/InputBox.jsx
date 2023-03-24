
const InputBox = ({
  name,
  label,
  isCompulsory,
  type = 'text',
  ...otherProps
}) => {
  return (
    <div className="font-notosans mt-6 ">
      <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor={name}>
        {label}
        {isCompulsory && <span className="text-ayaDanger-200">*</span>}
      </label>
      <input
        className="flex h-[54px] bg-white text-sm border rounded-[8px] border-ayaNeutral-600 w-[426px] outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm "
        type={type}
        id={name}
        name={name}
        {...otherProps}
      />
    </div>
  )
}

export default InputBox
