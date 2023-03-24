
const InputBox = ({
  name,
  label,
  isCompulsory,
  width = 'w-[426px]',
  height = 'h-[54px]',
  style = '',
  type = 'text',
  ...otherProps
}) => {
  return (
    <div className="mt-6 ">
      <label className="text-sm text-ayaNeutral-900 font-normal mb-4" htmlFor={name}>
        {label}
        {isCompulsory && <span className="text-ayaDanger-200">*</span>}
      </label>
      <input
        className={`flex ${height} bg-white text-sm border rounded-[8px] border-ayaNeutral-600 ${width} outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-sm ${style}`}
        type={type}
        id={name}
        name={name}
        {...otherProps}
      />
    </div>
  )
}

export default InputBox
