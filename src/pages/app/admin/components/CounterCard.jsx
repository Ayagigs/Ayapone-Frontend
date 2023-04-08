
const CounterCard = ({
  title,
  icon,
  count = 0
}) => {
  return (
    <div className='bg-white shadow-8 rounded-lg h-[183px] w-64 py-6 px-8 flex justify-between flex-col'>
      <img src={icon} alt="" className="h-[60px] w-[60px]" />
      <h3 className={`font-semibold text-2xl text-ayaNeutral-900`}>{count}</h3>
      <p className={`font-normal text-base`}>{title}</p>
    </div>
  );
};

export default CounterCard;
