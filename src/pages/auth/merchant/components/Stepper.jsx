import Step from "./Step"
import { useMerchantSignupStore } from '../../../../store/merchantSignupStore'

const Stepper = () => {
  const { activeStep } = useMerchantSignupStore()
  return (
    <>
      <ol className="flex items-center w-full my-14">

        <Step
          title='Seller Information'
          index={1}
          isActive={activeStep == 1}
          isPast={activeStep > 1}
        />
        <Step
          title='Identity Verification'
          index={2}
          isActive={activeStep == 2}
          isPast={activeStep > 2}
        />
        <Step
          title='Business Information'
          index={3}
          isActive={activeStep == 3}
          isPast={activeStep > 3}
        />
        <Step
          title='Account Information'
          index={4}
          isActive={activeStep == 4}
          isPast={activeStep > 4}
          isLast={true}
        />
      </ol>    
    </>
  )
}

export default Stepper
