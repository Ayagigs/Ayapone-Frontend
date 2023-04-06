import { HiPlus } from 'react-icons/hi'
import Stepper from './components/product/Stepper'
import FormOne from './components/product/FormOne'
import FormTwo from './components/product/FormTwo'
import { useProductCreateStore } from '../../../store/productCreateStore'

const CreateProduct = () => {
  const { activeStep } = useProductCreateStore()
  return (
    <main className='p-11 mt-12'>
      {/* <div className='flex flex-wrap gap-4 mt-6'> */}
        <div className='bg-white shadow-8 rounded-lg h-auto w-[1112px] mt-6 p-6 flex flex-col space-y-8'>
          <Stepper />

          {activeStep == 1 && <FormOne />}
          {activeStep == 2 && <FormTwo />}
          
        </div>
      {/* </div> */}
    </main>
  );
};

export default CreateProduct;
