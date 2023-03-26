import { useMerchantSignupStore } from '../../../../store/merchantSignupStore'

const Step = ({
  title,
  index,
  isActive=false,
  isPast=false,
  isLast=false
}) => {
  const { setActiveStep } = useMerchantSignupStore()
  
  return (
    <>
      <li className='grid place-items-center' onClick={() => setActiveStep(index)}>
        <div className={`flex w-full items-center ${ !isLast && `after:content-[''] after:w-full after:h-0 after:border-b after:border-2 after:inline-block after:border-ayaPrimary-${(!isPast || isActive) ? '400' : '800' }` } text-${isPast ? `white` : `ayaPrimary-900`}` }>
          <span className={`flex items-center justify-center w-10 h-10 border-2 rounded-full lg:h-12 lg:w-12 shrink-0 border-ayaPrimary-${isPast ||isActive ? `800` : `400`} bg-${(!isPast || isActive) ? `white` : `ayaPrimary-600`}` }>
            { index }
          </span>
        </div>
        <div className={`text-center text-sm ${ (isActive || isPast) ? 'font-bold' : 'font-normal' }`}>{ title }</div>
      </li>
    </>
  )
}

export default Step
