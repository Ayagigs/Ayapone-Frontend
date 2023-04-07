import Step from "./Step"
import { useProductCreateStore } from '../../../../../store/productCreateStore'

const Stepper = () => {
  const { activeStep } = useProductCreateStore()
  return (
    <>
      <ol className="flex justify-center items-center w-full">
        <Step
          title='Product Information'
          index={1}
          isActive={activeStep == 1}
          isPast={activeStep > 1}
        />
        <Step
          title='Product Pricing'
          index={2}
          isActive={activeStep == 2}
          isPast={activeStep > 2}
        />
        <Step
          title='Images'
          index={3}
          isActive={activeStep == 3}
          isPast={activeStep > 3}
        />
        <Step
          title='Overview & Specification'
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
