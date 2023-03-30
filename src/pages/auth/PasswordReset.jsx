import React, { useState } from 'react'
import AyaponeLogo from '../../assets/images/ayapone_logo.svg'
import InputBox from '../../components/forms/InputBox'
import { Link, useParams } from 'react-router-dom'
import routes from '../../navigation/routes'
import { ResetPassword } from '../../api/authApi'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const PasswordReset = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { token } = useParams()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const requestReset = useMutation((userData) => ResetPassword(userData))

  const handleSubmit = async () => {
    if (comparePassword()) {
      try {
        const response = await requestReset.mutateAsync({ token, new_password:password })
        if (response) {
          console.log(response)
          if (response.ok) {
            toast.success(response.data.message)
          } else {
            toast.error(response.data?.message || response.problem)
          }
        }
      } catch (error) {
        toast.error('an error occured!')
        console.log('error is: ', error)
      }
    }
  }

  const comparePassword = () => {
    if ((password.trim() == '') || (confirmPassword.trim() == '')) {
      console.log('empty');
      toast.error('password cannot be empty.')
      return false
    }
    if (password.trim() != confirmPassword.trim()) {
      console.log('mismatch');
      toast.error('password mismatch.')
      return false
    }
    console.log('passed');
    return true
  }

  return (
    <div className='bg-ayaNeutral-100 h-auto min-h-screen w-full grid place-items-center text-ayaNeutral-900'>
        <Link to={routes.HOME_PAGE}>
          <img src={AyaponeLogo} alt="logo" className='py-12 scale-150'/>
        </Link>

        <div className='bg-white rounded-[36px] h-auto w-[508px] py-16 px-10 mb-14 shadow'>
          <div className="text-center mb-11">
            <span className="font-bold text-2xl ">New Password</span><br />
            <span className="text-base ">Create your new Ayapone password</span>
          </div>
          
          <InputBox name={'new_password'} label={'New Password'} isCompulsory={true} type={'password'} placeholder={'Password'} required={'required'} onChange={(e) => setPassword(e.target.value)} />
          <InputBox name={'verify_password'} label={'Verify Password'} isCompulsory={true} type={'password'} placeholder={'Password'} required={'required'} onChange={(e) => setConfirmPassword(e.target.value)} />

          <button className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[54px]'
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
          <button
            className='bg-ayaPrimary-100 font-bold rounded-[8px] mt-6 text-ayaPrimary-600 w-[426px] h-[50px] flex space-x-2 justify-center items-center border border-ayaPrimary-600/20'
          >
            Cancel
          </button>
        </div>
    </div>
  );
};

export default PasswordReset;
