import InputBox from '../../../../components/forms/InputBox'

const StepTwo = () => {
  return (
    <>
      <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
        <div
          data-te-stepper-head-ref
          className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
          <span
            data-te-stepper-head-icon-ref
            className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
            2
          </span>
          <span
            data-te-stepper-head-text-ref
            className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
            Identity Verification
          </span>
        </div>
        <div
          data-te-stepper-content-ref
          className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
          Identity Verification - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </div>
      </li>
    </>
  )
}

export default StepTwo
