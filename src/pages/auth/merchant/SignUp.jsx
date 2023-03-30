import AyaponeLogo from '../../../assets/images/ayapone_logo.svg'
import { Link } from 'react-router-dom'
import routes from '../../../navigation/routes'
import FormOne from './components/FormOne'
import FormTwo from './components/FormTwo'
import FormThree from './components/FormThree'
import FormFour from './components/FormFour'
import Stepper from './components/Stepper'
import Otp from '../components/Otp'
import { useMerchantSignupStore } from '../../../store/merchantSignupStore'

const SignUp = () => {
  const { showOtp, activeStep } = useMerchantSignupStore()

  return (
    <div className='bg-ayaNeutral-100 h-auto min-h-screen w-full grid place-items-center text-ayaNeutral-900'>
      <Link to={routes.HOME_PAGE}>
        <img src={AyaponeLogo} alt="logo" className='py-12 scale-150'/>
      </Link>

      { !showOtp ?
        <div className='bg-white rounded-[36px] h-auto w-[508px] py-16 px-10 mb-14 shadow'>
          <div className="text-center mb-10">
            <span className="font-bold text-2xl ">Merchant Sign Up</span><br />
            <span className="text-base ">Create an account to sell on Ayapone</span>
          </div>

          <Stepper />

          {activeStep == 1 && <FormOne />}
          {activeStep == 2 && <FormTwo />}
          {activeStep == 3 && <FormThree />}
          {activeStep == 4 && <FormFour />}

          <div className="text-center mt-10">
            <span className="text-base">Already a Merchant? <Link to={routes.MERCHANT_SIGN_IN_PAGE} className='font-bold text-ayaPrimary-600'>Log In</Link></span>
          </div>
        </div>
        :
        <Otp />
      }
    </div>
  );
};

export default SignUp;
