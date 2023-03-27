import { MdCheckCircleOutline } from 'react-icons/md'

const AypActivityItem = ({
  isCompleted=false,
  reason,
  points
}) => {
  return (
    <li className='border-b border-b-ayaNeutral-200 font-normal text-base flex item-center py-6 justify-between'>
      <div className='flex item-center gap-4'>
        <span>
          <MdCheckCircleOutline className={`w-6 h-6 rounded-full text-white border-none ${isCompleted ? 'bg-ayaPrimary-600' : 'bg-ayaNeutral-500'} `}/>
        </span>
        <p>{reason}</p>
      </div>
      <span>{points}</span>
    </li>
  )
}

export default AypActivityItem
