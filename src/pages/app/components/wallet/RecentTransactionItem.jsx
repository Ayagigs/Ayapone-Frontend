
const RecentTransactionItem = ({
  reason,
  amount,
  date,
  statusColor
}) => {
  return (
    <li className='border-b border-b-ayaNeutral-200 font-normal text-base flex item-center py-4 justify-between'>
      <div className='flex item-center gap-4'>
        <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
        <div>
          <p>{reason}</p>
          <p className='font-medium text-xs'>{date}</p>
        </div>
      </div>
      <span>{amount}</span>
    </li>
  )
}

export default RecentTransactionItem
