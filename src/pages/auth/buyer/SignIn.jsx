import React, { useState } from 'react'
import AyaponeLogo from '../../../assets/images/ayapone_logo.svg'
import GoogleIcon from '../../../assets/images/google_icon.svg'
import InputBox from '../../../components/forms/InputBox'
import { Link, useNavigate } from 'react-router-dom'
import routes from '../../../navigation/routes'
import { useSignInFormStore } from '../../../store/signInFormStore'
import { useCurrentUserStore } from '../../../store/currentUserStore'
import { LocalSignIn } from '../../../api/authApi'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const { email, password, setEmail, setPassword } = useSignInFormStore()
  const { user, setToken, setUser, setWallet } = useCurrentUserStore()
  const signin = useMutation((userData) => LocalSignIn(userData))
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const response = await signin.mutateAsync({email, password})
      if (response) {
        console.log(response)
        if (response.ok) {
          const buyer = response.data.data.user
          setUser(buyer)
          setToken(response.data.data.token)
          const wallet = {
            bonus_wallet: response.data.data.wallet.bonus_wallet,
            main_wallet: response.data.data.wallet.main_wallet,
            created_at: response.data.data.wallet.created_at,
            updated_at: response.data.data.wallet.updated_at
          }
          setWallet(wallet)
          toast.success(response.data.message)

          console.log(buyer.user_role);
          if (buyer.user_role != 'buyer') {
            toast.warning('Your account cannot access customers\' dashboard. You have been redirected to the merchants\' dashboard.')
          }
          
          navigate(`/${buyer.user_role}/${routes.DASHBOARD_PAGE}`)
        } else {
          toast.error(response.data?.message || response.problem)
        }
      }
    } catch (error) {
      toast.error('an error occured!')
      console.log('error is: ', error);
    }
  }

  return (
    <div className='bg-ayaNeutral-100 h-auto min-h-screen w-full grid place-items-center text-ayaNeutral-900'>
      <Link to={routes.HOME_PAGE}>
        <img src={AyaponeLogo} alt="logo" className='py-12 scale-150'/>
      </Link>

      <div className='bg-white rounded-[36px] h-auto w-[508px] py-16 px-10 mb-14 shadow'>
        <div className="text-center mb-11">
          <span className="font-bold text-2xl ">Log In</span><br />
          <span className="text-base ">Login to your Ayapone account</span>
        </div>
        <div className="border border-ayaPrimary-900 hover:bg-ayaPrimary-200 grid place-items-center text-center mb-8 rounded-[8px] w-[426px] h-11">
          <span className="text-sm font-normal flex items-center">
            <img src={GoogleIcon} alt="google_icon" className='mr-4'/> Continue with Google
          </span>
        </div>
        <fieldset className="border-t border-ayaNeutral-500">
          <legend className="mx-auto px-4 text-lg">OR</legend>
        </fieldset>
        
        <InputBox name={'email'} label={'Email Address'} isCompulsory={true} placeholder={'Enter Email Address'} onChange={(e) => setEmail(e.target.value)} />
        <InputBox name={'password'} label={'Password'} isCompulsory={true} type={'password'} placeholder={'Enter Password'} onChange={(e) => setPassword(e.target.value)} />
        <Link to={routes.FORGOT_PASSWORD_PAGE} className='text-ayaPrimary-600 text-base font-normal text-right'><p>Forgot Password?</p></Link>
        <button className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[54px]'
          onClick={() => handleSubmit()}
        >
          Log In
        </button>

        <div className="text-center mt-10">
          <span className="text-base">Don’t have an account? <Link to={routes.BUYER_SIGN_UP_PAGE} className='font-bold text-ayaPrimary-600'>Sign Up</Link></span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
