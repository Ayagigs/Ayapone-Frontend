import InputBox from '../../../../components/forms/InputBox'

const StepThree = () => {
  return (
    <>
      <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
        <div
          data-te-stepper-head-ref
          className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
          <span
            data-te-stepper-head-icon-ref
            className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
            3
          </span>
          <span
            data-te-stepper-head-text-ref
            className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
            Business Infromation
          </span>
        </div>
        <div
          data-te-stepper-content-ref
          className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
          Business Infromation - Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </div>
      </li>
    </>
  )
}

export default StepThree
