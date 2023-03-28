
const NotificationItem = ({
  statusColor,
  title,
  time,
  style=''
}) => {
  return (
    <li className={`border-b border-b-ayaNeutral-200 font-normal text-base flex item-center py-6 justify-between ${style}`}>
      <div className={`flex item-center gap-4 ${style}`}>
        <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
        <p>{title}</p>
      </div>
      <span>{time}</span>
    </li>
  )
}

export default NotificationItem
