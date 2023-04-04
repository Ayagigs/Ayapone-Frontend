import Ayp from '../../../../assets/icons/ayp.svg'
import { HiArrowNarrowRight } from 'react-icons/hi'

const OrderedItem = ({
  name,
  image,
  quantity = 0,
  color,
  orderId
}) => {
  return (
    <div className='h-auto p-6 flex justify-between flex-col w-full border border-ayaNeutral-200 rounded-2xl'>
      <div className='flex gap-1 w-full'>
        <div className="flex flex-col justify-between min-w-[88px] min-h-[108px]">
          <img src={image} alt="" className="" />
        </div>
        <div className={`font-bold text-base w-full grid grid-cols-1 gap-1 place-content-center`}>
          {name}
          <div className={`font-normal text-sm pt-2 text-ayaNeutral-600`}>
            Order #{orderId}
          </div>
          <div className={`font-normal text-sm pt-2 text-ayaNeutral-600 space-x-6`}>
            <span>Color - {color}</span>
            <span>Qty: {quantity}</span>
          </div>
        </div>
        <div className={`font-bold text-sm text-ayaNeutral-600 w-full grid grid-cols-1 gap-1 place-content-center`}>
          <div>Ordered</div>
          <div>22 Jan, 2023</div>
        </div>
        <div className={`font-semibold text-xs w-full grid grid-cols-1 place-content-center`}>
          <div className='w-[74px] h-[28px] bg-ayaSuccess-100 text-ayaSuccess-200 text-center grid grid-cols-1 place-content-center rounded-lg'>Delivered</div>
        </div>
        <div className={`font-bold text-base w-full grid grid-cols-1 gap-1 place-content-center`}>
          <button
            className='bg-white hover:bg-ayaPrimary-500 text-ayaPrimary-600 font-bold rounded-[8px] hover:text-white w-[186px] border border-ayaPrimary-200 h-[50px] flex space-x-2 justify-center items-center'
          >
            View Order <HiArrowNarrowRight className='ml-2' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderedItem;
