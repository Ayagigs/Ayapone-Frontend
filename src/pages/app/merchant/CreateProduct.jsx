import Stepper from './components/product/Stepper'
import FormOne from './components/product/FormOne'
import FormTwo from './components/product/FormTwo'
import FormThree from './components/product/FormThree'
import FormFour from './components/product/FormFour'
import { useProductCreateStore } from '../../../store/productCreateStore'

const CreateProduct = () => {
  const { activeStep } = useProductCreateStore()
  return (
    <main className='p-11 mt-12'>
      {/* <div className='flex flex-wrap gap-4 mt-6'> */}
        <div className='bg-white shadow-8 rounded-lg h-auto w-[720px] mt-6 p-6 flex flex-col space-y-8'>
          <Stepper />

          {activeStep == 1 && <FormOne />}
          {activeStep == 2 && <FormTwo />}
          {activeStep == 3 && <FormThree />}
          {activeStep == 4 && <FormFour />}
          
        </div>
      {/* </div> */}
    </main>
  );
};

export default CreateProduct;
