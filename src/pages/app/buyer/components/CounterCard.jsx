
const CounterCard = ({
  title,
  icon,
  count = 0
}) => {
  return (
    <div className='bg-white shadow-8 rounded-lg h-28 w-64 p-6 flex justify-between flex-col'>
      <div className='mb-3 flex gap-4 '>
        <img src={icon} alt="" />
        <div className={`font-bold text-xl sm:text-2xl md:text-3xl`}>
          {count}
          <h3 className={`font-normal text-base text-ayaNeutral-600`}>
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
